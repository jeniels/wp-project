import {
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { decrementItem, incrementItem, removeItem } from "../redux/cartSlice";

const CheckoutCard = ({ item }) => {
  const { name, price, image, amount } = item.data;
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center border-b-gray-600 w-3/4 mobile-card">
        <div className="flex flex-row items-center gap-5 w-96">
          <img
            src={image[0]}
            alt="product"
            className="h-48 w-28 mobile-card-image"
          />
          <h1 className="font-roboto font-extralight truncate mobile-card-name">
            {name}
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          <button>
            <ChevronLeftIcon
              onClick={() => dispatch(decrementItem(item))}
              className="h-6 w-6"
            />
          </button>
          <p>{amount}</p>
          <button>
            <ChevronRightIcon
              onClick={() => dispatch(incrementItem(item))}
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="font-roboto font-extralight ">{`₹${price}`}</div>
        <div>
          <button onClick={() => handleRemove(item)}>
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
