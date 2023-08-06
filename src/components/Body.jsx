import useOnline from "../Hooks/useOnline";
import Categories from "./Categories";
import TopSaleContainer from "./TopSaleContainer";

// const isOnline = useOnline();
// if (!isOnline) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         fontFamily: "Roboto",
//       }}
//     >
//       <h1>Connect to the internet</h1>
//       <p>You're offline. Check your connection</p>
//     </div>
//   );
// }

const Body = () => {
  return (
    <div className="m-10 gap-10 flex flex-row flex-wrap">
      <Categories />
      <TopSaleContainer />
    </div>
  );
};

export default Body;
