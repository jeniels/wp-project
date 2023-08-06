const CartCard = ({ name, price, image }) => {
  return (
    <div className="flex flex-row rounded-lg gap-8 m-3">
      <div className="rounded-lg overflow-hidden  object-cover flex-1 h-20 w-20">
        <img
          src={image[0]}
          alt="img"
          className="h-20 w-20 text-gray-400 object-cover"
        />
      </div>
      <div className="flex flex-col w-[200px]">
        <h2 className="text-lg text-black font-extralight font-roboto truncate ">
          {name}
        </h2>
        <h4 className=" text-gray-400 font-roboto">{`₹${price}`}</h4>
      </div>
    </div>
  );
};

export default CartCard;
