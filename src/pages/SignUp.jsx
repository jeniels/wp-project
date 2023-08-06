import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("Invalid details");
  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  const showToastMessage = () => {
    if(error)
    toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
    });
    else
    setError("Success")
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      toast.success(error, {
        position: toast.POSITION.TOP_RIGHT
    });
      navigate("/");

    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-between  h-[46.5rem]">
      <div className="bg-black w-4/12 rounded-tr-[6rem] rounded-br-[6rem]">
        <div className="flex flex-col text-center items-center m-14 p-14">
          <h1 className="text-white text-3xl uppercase">
            Already have an account
          </h1>
          <p className=" mt-4 text-sm text-gray-400 uppercase">
          </p>
          <Link to="/login">
            <button className="h-12 rounded-full bg-white text-black mt-20 uppercase tracking-widest w-48 align-middle">
              Sign-in
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-3/5 text-center items-center m-[5%] p-[5%]">
        <h1 className="font-bold font-bebas text-6xl">SignUp to purchase</h1>
        {/* {error && (
          // <h1 className="rounded-lg h-14 w-96 text-center font-bold font-roboto p-3 bg-red-400 text-white ">
          //   {error}
          // </h1>
           {showToastMessage}
        
        )} */}

        <div className="mt-10 flex flex-col  gap-10 w-1/3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 items-center"
          >
            <input
              type="text"
              placeholder="Email"
              className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="on"
              className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none"
            />
            <button className="h-12 rounded-full bg-black text-white uppercase tracking-widest w-48 align-middle"
            onClick={showToastMessage}>
              Sign-Up
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
