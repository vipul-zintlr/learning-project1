import HeaderPage from "@/components/Navbar";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <>
      <HeaderPage />
      <div className=''>
        <iframe
          width={'100%'}
          height='356px'
          src="https://www.youtube.com/embed/fLz2fgU_x1Q?si=RR50lonKKPlaVkxc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="text-white bg-orange-400 py-36 w-full">
        <p className="text-3xl w-[70%] mx-auto">
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </p>
      </div>

      <div>
        <p className="text-3xl font-bold text-gray-700 p-4 w-max mx-auto my-4">
          The Swiggy Journey
        </p>
        <img
          src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg"
          className="w-[80%] mx-auto"
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <h1 className="text-3xl font-semibold text-gray-700 w-[70%] text-center py-8">
          What’s In Store For The Future?
        </h1>
        <p className="text-xl w-[70%] p-2">
          Swiggy has grand plans to be India’s most loved hyperlocal player. It
          aims to be the most accessible platform on the network - reimagining
          the meaning of convenience in the country through a variety of service
          offerings.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-around py-8 my-4">
          <p className="text-3xl text-gray-800 font-semibold">
            Changing the game
          </p>
          <div className="flex w-[60%] gap-8">
            <div className="flex flex-col items-center justify-center gap-4 broder border-2 border-orange-400 rounded-md w-52">
              <p className="text-3xl text-black">150000+</p>
              <p className="text-xl text-gray-700 text-center">
                Restaurant Partners Countrywide
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 broder border-2 border-orange-400 rounded-md w-52">
              <p className="text-3xl text-black">150000+</p>
              <p className="text-xl text-gray-700 text-center">
                Restaurant Partners Countrywide
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 broder border-2 border-orange-400 rounded-md w-52">
              <p className="text-3xl text-black">150000+</p>
              <p className="text-xl text-gray-700 text-center">
                Restaurant Partners Countrywide
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutPage;
