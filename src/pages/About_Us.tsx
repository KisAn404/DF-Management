import { useEffect, useState } from "react";
import Link from "next/link";

const MyComponent = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-5  ">
      <div className="nav-bar flex justify-end  font-bold text-white ">
        <Link href="/">
          <button className="mx-3 hover:text-yellow-300">Home</button>
        </Link>
        <button className="mx-3 hover:text-yellow-300">About Us</button>
        <Link href="/Services">
          <button className="mx-3 hover:text-yellow-300"> Services</button>
        </Link>
        <Link href="/Contact_Us">
          <button className="mx-3 hover:text-yellow-300"> Contact</button>
        </Link>
        <button className="mx-3 hover:text-yellow-300"> Login</button>
      </div>
      <div className=" mt-20">
        <div className="  text-center mr-60  text-4xl font-bold  text-yellow-200">
          WERE HERE
        </div>

        <div className=" text-center  ml-20 text-4xl font-bold text-white">
          AS ONE!
        </div>
      </div>
      <div>
        <div>
          <p className=" text-yellow-300 py-5 text-center uppercase text-base font-semibold">
            In your darkest Times, we offer you our helping hand.
          </p>
        </div>
      </div>
      <div className=" flex justify-center ">
        <p className=" rounded-md  bg-slate-100  py-10  px-16 text-center">
          The organization that aids to provide financial assistance. A death is
          assistance <br /> payable to the benificiary of a deceased person. Our
          mission is to help one another
          <br /> in times of unfortunate and greate loss.
        </p>
      </div>
      <div className=" flex justify-center my-10">
        <button className=" bg-yellow-300 rounded-full  font-bold hover:text-white px-5">
          More info
        </button>
      </div>
      <div className=" mt-20">
        <div className="  text-center mr-60  text-4xl font-bold  text-yellow-200">
          WERE HERE
        </div>

        <div className=" text-center  ml-20 text-4xl font-bold text-white">
          AS ONE!
        </div>

        <div className=" flex gap-20 mt-10 justify-center">
          <div className=" w-60 bg-white rounded-md p-5">
            <p
              className=" uppercase mb-20 bg-yellow-300 py-2 text-center
             px-5 text-white font-bold"
            >
              Transparency
            </p>
          </div>
          <div className=" w-60 bg-white rounded-md p-5">
            <p className=" uppercase mb-20 bg-yellow-300 text-center py-2 px-5 text-white font-bold">
              Efficiency
            </p>
          </div>
        </div>
        <div className=" flex justify-center my-10">
          <div className=" w-60 bg-white rounded-md p-5">
            <p className=" uppercase mb-20 bg-yellow-300 text-center py-2 px-5 text-white font-bold">
              Emapathy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
