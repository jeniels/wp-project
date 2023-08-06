import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/toggleCartSlice";
import { useUserAuth } from "../context/UserAuthContext";
import {
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CartCard from "./CartCard";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const isOpenCart = useSelector((store) => store.toggleCart.isOpenCart);
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();
  // console.log(cartItem);
  // console.log(user);

  const handleToggle = () => {
    dispatch(toggle());
  };

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="h-12 p-2 flex items-center justify-between sticky top-0 z-50 bg-[#FFFFFF] shadow mobile-header">
      <div className="ml-3">
        <Link to="/">
          <h1 className="font-bebas tracking-widest text-2xl sm:text-4xl">
            Just<span className="font-bangers">Buy</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row relative mr-20 mobile-header-right">
        <div className={user ? "absolute right-60" : "absolute right-40"}>
          <Link to="/home">
            <HomeIcon className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          {!user ? (
            <Link to="/login">
              <button className="font-roboto font-bold flex items-center mr-10">
                <UserIcon className="h-8 w-8" />
                <span>Sign-In</span>
              </button>
            </Link>
          ) : (
            <button onClick={handleLogOut}>
              <LogoutIcon />
              <span> {user.displayName ? user.displayName: user.email} </span>
            </button>
          )}
        </div>
        {user && (
        <div className="flex right-40 absolute  ">
          <div className="flex relative ">
            <ShoppingBagIcon
              className="cursor-pointer h-8 w-8"
              onClick={() => handleToggle()}
            />
            <p className="font-bold font-roboto text-sm absolute top-[0.6rem] right-3 select-none">
              {cartItem.length}
            </p>
          </div>

          {isOpenCart && (
            <div className="absolute top-10 right-4 w-96 bg-white h-96 mt-1 flex flex-col shadow-2xl rounded-lg mobile-cart">
              {cartItem.length === 0 ? (
                <div className="flex flex-col justify-center text-center ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjhcG-tcVCpdyHukFOGZLaInyXFejYzMENQ&usqp=CAU"
                    alt="empty-logo"
                    className="object-contain"
                  />
                </div>
              ) : (
                <>
                  <div className="h-96 overflow-scroll ">
                    {cartItem.map((item) => {
                      return (
                        <div className="flex flex-col">
                          <CartCard {...item.data} key={item.data.key} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-black h-14 items-center flex justify-center">
                    <Link to="/checkout">
                      <button className="text-white w-96">
                        Go to Checkout
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>)}
      </div>
    </div>
  );
};

export default Header;
