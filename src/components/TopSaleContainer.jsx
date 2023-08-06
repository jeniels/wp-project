import { topSalesList } from "../database/TopSaleListDB";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const TopSaleContainer = () => {
  const dispatch = useDispatch();

  const handleCartItems = (topSales) => {
    dispatch(addItem(topSales));
  };
  return (
    <div className="">
      <div>
        <h1 className="font-bebas ml-20 font-extrabold text-5xl">
          Our Top Sales
        </h1>
      </div>
      <div className="flex flex-wrap gap-12 p-7 ml-10">
        {topSalesList.map((topSales, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-4 bg-[#F9F9F9] h-[30rem] w-64 hover:drop-shadow-lg transform 
              transition hover:scale-105"
            >
              <div className=" rounded-lg aspect-auto overflow-hidden ">
                <img
                  src={topSales.data.image[0]}
                  alt="image"
                  className="h-80 w-64 "
                />
                <div className="flex justify-center">
                  <img
                    src={topSales.data.image[1]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                  <img
                    src={topSales.data.image[2]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                  <img
                    src={topSales.data.image[3]}
                    alt="image"
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between px-3">
                <div className="flex flex-col w-52">
                  <h1 className="text-md font-bold truncate font-roboto uppercase">
                    {topSales.data.name}
                  </h1>
                  <h3 className="font-michroma font-semibold text-red-900">
                    {`₹${topSales.data.price}`}
                  </h3>
                </div>
                <div className="">
                  <ShoppingBagIcon
                    className="h-8 w-8 cursor-pointer"
                    onClick={() => handleCartItems(topSales)}
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

export default TopSaleContainer;
