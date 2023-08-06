import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./redux/store";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./pages/Footer";

const FormalSection = lazy(() => import("./pages/FormalSection"));
const CasualSection = lazy(() => import("./pages/CasualSection"));
const SportsSection = lazy(() => import("./pages/SportsSection"));
const AthleisureSection = lazy(() => import("./pages/AthleisureSection"));
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));

const AppLayout = () => {
  return (
    <UserAuthContextProvider>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer/>
      </Provider>
    </UserAuthContextProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/formalsection",
        element: (
          <Suspense>
            <FormalSection />
          </Suspense>
        ),
      },
      {
        path: "/casualsection",
        element: (
          <Suspense>
            <CasualSection />
          </Suspense>
        ),
      },
      {
        path: "/sportssection",
        element: (
          <Suspense>
            <SportsSection />
          </Suspense>
        ),
      },
      {
        path: "/athleisuresection",
        element: (
          <Suspense>
            <AthleisureSection />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
