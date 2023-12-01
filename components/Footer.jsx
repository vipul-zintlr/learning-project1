import React from "react";

const footer = () => {
  return (
    <div className="bg-black p-4 flex justify-around">
      <div className="flex flex-col gap-4 w-max p-4">
        <p className="text-white">Company</p>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li>About</li>
          <li>Career</li>
          <li>Team</li>
          <li>Swiggy Instamart</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-max p-4">
        <p className="text-white">Contact Us</p>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-max p-4">
        <p className="text-white">Legal</p>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li>Terms & Conditions</li>
          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-max p-4">
        <p className="text-white">We deliver to:</p>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li>Delhi</li>
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Pune</li>
          <li>Many More</li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
