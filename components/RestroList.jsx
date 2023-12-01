import React, { useEffect, useState } from "react";
import SingleRestro from "./SingleRestro";
import Link from "next/link";

const RestroList = () => {
  const [restoItems, setRestoItems] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        setRestoItems(
          data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        );
      });
  }, []);
  if (!restoItems) return;

  return (
    <div className="mx-36">
      <h1 className="text-2xl font-bold p-4">
        Restaurants with online food delivery in XYZ
      </h1>
      <div className="p-4">
        <ul className="grid grid-cols-3 gap-8">
          {restoItems.map((item) => {
            return (
              <Link href={"/restaurants/" + item.info.id}>
                <SingleRestro item={item} />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestroList;
