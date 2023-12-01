import React from "react";

const SingleRestro = (props) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { item } = props;

  return (
    <div className="flex flex-col gap-4 w-110 rounded-lg shadow-lg cursor-pointer">
      <img
        src={IMG_URL + item.info.cloudinaryImageId}
        alt="resto-logo"
        className="w-[100%] h-40 object-cover"
      />
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-semibold text-gray-700">
          {item.info.name}
        </h1>
        <div className="text-gray-700 font-semibold">
          <span>⭐</span>
          {item.info.avgRating} 22mins
        </div>
        <div className="text-gray-700">
          {item.info.locality}, {item.info.areaname}
        </div>
      </div>
    </div>
  );
};

export default SingleRestro;
