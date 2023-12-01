import Header from "@/components/Header";
import HeaderPage from "@/components/Navbar";
import RestroList from "@/components/RestroList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Home(props) {
  
  // const { restroList } = props;

  console.log(props);

  return (
    <>
      <Navbar />
      <Header />
      <RestroList />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {

//   return fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   )
//     .then((res) => res.json())
//     .then((data) => {
      
//       const listItems = data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
//       console.log(listItems);
//       return {
//         props: {
//           restroList: [],
//         },
//       };
//     });

    
   
  
// }

export default Home;