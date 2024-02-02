import { useEffect, useState } from "react";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MyComponent = () => {
  return (
    <div className=" h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-5  ">
      <div className="nav-bar flex justify-end  font-bold text-white ">
        <Link href="/">
          <button className="mx-3 hover:text-yellow-300">Home</button>
        </Link>
        <Link href="/About_Us">
          <button className="mx-3 hover:text-yellow-300">About Us</button>
        </Link>
        <Link href="/Services">
          <button className="mx-3 hover:text-yellow-300"> Services</button>
        </Link>
        <button className="mx-3 hover:text-yellow-300"> Contact</button>
        <button className="mx-3 hover:text-yellow-300"> Login</button>
      </div>
      <div className=" mt-20">
        <div className=" uppercase  text-center mr-28  text-4xl font-bold  text-yellow-200">
          Contact
        </div>

        <div className=" text-center  ml-20 text-4xl font-bold text-white">
          US
        </div>
      </div>
      <div>
        <div>
          <p className=" text-white py-5 text-center uppercase text-base font-semibold">
            if you need assistance, do not hisatate to call
            <br /> and chat with the admin
          </p>
        </div>
      </div>
      <div className=" flex justify-center gap-10 ">
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-20 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <LocalPhoneIcon className="" />
        </div>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-20 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <EmailIcon className="" />
        </div>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-20 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <LocationOnIcon className="" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
