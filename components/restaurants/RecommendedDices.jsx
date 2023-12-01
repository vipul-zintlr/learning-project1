import React from "react";

const RecommendedDices = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div className="my-4 px-4">
      <p className="text-lg font-bold text-gray-700">Recommended 20</p>
      <div>
        <ul className="flex flex-col">
          {items.map((item) => {
            return (
                <>
                <div className="flex items-center justify-between my-4 w-full">
                  <div className="flex flex-col items-start pr-4">
                    <p className="text-xl font-semibold text-gray-700">
                      {item.card.info.name}
                    </p>
                    <p className="text-sm text-gray-700">${item.card.info.price/100}</p>
                    <p className="text-sm text-gray-500 my-2">
                      {item.card.info.description}
                    </p>
                  </div>
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fdfbd0bc28dd767baeafdc2fa6d1cf92"
                    alt=""
                    className="w-32"
                  />
                </div>
                <hr />
            </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecommendedDices;
