import React from "react";
import { Button } from "@mui/material";




function Tailwind() {
  return (
    <>
      <header > 
        <div className="bg-red-400 p-6 flex justify-between space-x-5 border-t-4 border-blue-700" >
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold text-white">Kalvium</h1>
            <div className="text-emerald-300 flex space-x-8 cursor-pointer">
              <h1>About Us</h1>
              <h1>Contacts</h1>
              <h1>Courses</h1>
            </div>
          </div>
          <div>
            <button className="text-white border p-1 px-2 rounded-md">Login</button>
          </div>
        </div>
      </header>
      <div className="px-48 my-5	leading-10 space-y-7">
        <Button variant="contained">Button one</Button>

        <div
          className="bg-red-100  text-red-600 px-4 py-1  border-2 border-red-400 rounded-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
           
            </div>
            <div className="flex items-center space-x-2 ">
              <p className="font-bold">Alert!</p>
              <p className="text-sm">
               This is awesome!
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center ">
          <div className="flex px-3 py-5 pr-48 shadow-md">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-10 w-10 mx-5"/>
          <div className="leading-6">
          <div className="font-semibold text-x5 ">Kalvium Store</div>
          <div className="text-gray">You have a great course!</div>
          </div>
          </div>
        </div>

      </div>
        <div className="text-center bg-gray-300 p-4">
          <div>&copy; 2021 Copyright:Kalvium</div>
        </div>
    </>
  );
}

export default Tailwind;
