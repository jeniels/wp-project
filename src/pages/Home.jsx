import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Store } from "../database/Store";

const Home = () => {
  const dispatch = useDispatch();

  const handleCartItems = (s) => {
    dispatch(addItem(s));
  };

  return (
    <div className="m-10 gap-10 flex flex-row flex-wrap">
      <div>
        <h1 className="font-bebas font-extrabold text-5xl">Home</h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {Store.map((s) => {
          return (
            <div
              className="flex flex-col gap-4 bg-white h-[30rem] w-64 hover:drop-shadow-lg transform 
              transition hover:scale-105"
            >
              <div className=" rounded-lg aspect-auto overflow-hidden ">
                <img src={s.data.image[0]} alt="image" className="h-80 w-64 " />
                <div className="flex justify-center">
                  <img
                    src={s.data.image[1]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                  <img
                    src={s.data.image[2]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                  <img
                    src={s.data.image[3]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between px-3">
                <div className="flex flex-col w-52">
                  <h1 className="text-md font-bold truncate font-roboto uppercase">
                    {s.data.name}
                  </h1>
                  <h3 className="font-michroma font-semibold text-red-900">
                    {`₹${s.data.price}`}
                  </h3>
                </div>
                <div className="">
                  <ShoppingBagIcon
                    className="h-8 w-8 cursor-pointer"
                    onClick={() => handleCartItems(s)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
