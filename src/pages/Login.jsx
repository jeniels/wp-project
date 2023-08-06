import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      setError("");
      try {
        await login(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const googleAuthSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Success", {
        position: toast.POSITION.TOP_RIGHT
    });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between  h-[46.5rem] mobile-login ">
      <div className="flex flex-col w-3/5 text-center items-center m-14 p-14">
        <h1 className="font-bold font-bebas text-6xl">Login to your account</h1>
        <p className="font-roboto text-gray-400 mt-1 uppercase">
          
        </p>
        <div className="flex flex-row mt-4 gap-10">
          <button className="h-14 w-14 border bg-blue-300 text-2xl text-white font-bold rounded-full">
            F
          </button>
          <button
            onClick={googleAuthSignIn}
            className="h-14 w-14 border bg-blue-500 text-2xl text-white font-bold rounded-full"
          >
            G
          </button>
          {/* <button className="h-14 w-14 border bg-blue-700 text-2xl text-white font-bold rounded-full">
            in
          </button> */}
        </div>
        <div className="w-1/4 mt-10">
          <span className=" uppercase font-roboto font-bold ">or</span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 w-1/3">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-8 items-center w-full"
          >
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none mobile-login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full font-roboto bg-gray-100 p-4 rounded-full text-lg focus:outline-none mobile-login-input"
            />
            {error && <span className="-mt-8 "> {error} </span>}
            <button className="h-12 rounded-full bg-black text-white uppercase tracking-widest w-48 align-middle">
              Sign-In
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 hidden mobile-signup">
        <h1
          className="font-roboto bg-black text-white uppercase p-1 rounded-xl
        "
        >
          Sign-Up from Desktop or Login With GOOGLE
        </h1>
      </div>
      <div className="bg-black w-4/12 rounded-tl-[6rem] rounded-bl-[6rem] mobile-login-signup">
        <div className="flex flex-col text-center items-center m-14 p-14">
          <h1 className="text-white text-6xl uppercase">New Here?</h1>
          <p className=" mt-4 text-sm text-gray-400 uppercase">
         
          </p>
          <Link to="/signup">
            <button className="h-12 rounded-full bg-white text-black mt-20 uppercase tracking-widest w-48 align-middle">
              Sign-Up
            </button>
          </Link>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Login;
