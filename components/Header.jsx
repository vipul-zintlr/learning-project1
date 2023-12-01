import React, { useEffect, useState } from "react";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const fetchHeaderData = async (API_URL) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data.cards[0].card.card.imageGridCards?.info;
};

const Header = () => {
  const API_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [listItems, setListItems] = useState();

  useEffect(() => {
    const itemsData = fetchHeaderData(API_URL);
    console.log(itemsData);
    setListItems(itemsData);
  }, []);

  //   console.log(listItems);

  if (!listItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-36 p-4 my-4">
      <h1 className="text-xl font-bold text-gray-700">What's on your mind?</h1>

      <ul className="mt-4 inline-flex gap-2 overflow-x-hidden">
        {listItems?.map((item) => {
          return (
            <li className="">
              <img src={IMG_URL + item.imageId} alt="logo" className="w-36" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
