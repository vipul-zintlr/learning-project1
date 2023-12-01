import Navbar from "@/components/Navbar";
import HeaderPage from "@/components/Navbar";
import RecommendedDices from "@/components/restaurants/RecommendedDices";
import RestaurantHeader from "@/components/restaurants/RestaurantHeader";
import RestaurantOfferSection from "@/components/restaurants/RestaurantOfferSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RestaurantPage(props) {
  const RESTRO_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7605545&lng=83.3731675&restaurantId=77949&catalog_qa=undefined&submitAction=ENTER";

  const router = useRouter();
  const id = router.query.id;

  const [recommendedList, setRecommendedList] = useState([]);

  useEffect(() => {
    fetch(RESTRO_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(
          data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card.itemCards
        );
        setRecommendedList(
          data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card.itemCards
        );
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="mx-36">
        <RestaurantHeader />
        <hr />
        <RestaurantOfferSection />
        <hr />
        <RecommendedDices items={recommendedList} />
      </div>
    </>
  );
}
export default RestaurantPage;
