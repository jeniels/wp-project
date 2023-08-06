import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import { closeCart } from "../redux/toggleCartSlice";
import PaymentModal from "../Payment/PaymentModal";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(closeCart());
  });

  const { items } = useSelector((store) => store.cart);

  if (items.length < 1) {
    Navigate("/");
  }
  console.log("item", items);
  const totalPrice = useMemo(() => {
    return items.reduce((total, currentVal) => {
      return total + parseInt(currentVal.data.price) * currentVal.data.amount;
    }, 0);
  }, [items]);

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(totalPrice);
  };

  return (
    <div className="flex flex-col mt-14 w-10/12 ml-auto mr-auto border shadow-2xl">
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col items-center gap-3 ">
        {items.map((item) => {
          return <CheckoutCard item={item} key={item.data.id} />;
        })}
      </div>
      <div className="flex flex-col p-10">
        <h1 className="font-roboto text-xl font-extrabold">
          Total:{" "}
          <span className="font-michroma font-semibold text-red-900">
            ₹{totalPrice}
          </span>
        </h1>
        <div>
          <button onClick={buyMovies} className="bg-black w-20 mt-3 h-10 text-white rounded-lg font-roboto font-bold">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
