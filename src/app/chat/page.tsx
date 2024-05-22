"use client";
import { useState } from "react";
import { Sidebar } from "~/components/sidebar";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Image from "next/image";

import hcdcStroke from "~/assets/images/hcdc-stroke.png";

export default function Chat() {
  const [hasStartedConversation, setHasStartedConversation] = useState(false);

  const startConversation = () => {
    setHasStartedConversation(true);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 relative">
          {!hasStartedConversation ? (
            <>
              <div className="mx-5 my-7">
                <h1 className="text-black text-4xl">Welcome Back,</h1>
                <p className="text-blue-700 font-semibold text-5xl">User</p>
              </div>
              <div className="flex relative justify-center items-center ">
                <div className="mt-14">
                  <h1 className="mt-4 text-black font-montserrat text-6xl font-bold tracking-tighter uppercase">
                    HCDC Student Handbook
                  </h1>
                  <div className="flex space-x-3 justify-end">
                    <p className="text-black font-montserrat font-regular text-5xl">
                      an AI Assistant
                    </p>
                    <VscSparkleFilled className="text-blue-700 w-[50px] h-[50px]" />
                  </div>
                </div>
              </div>
              <div className="font-inter flex justify-center items-center my-6">
                <div className="grid grid-cols-3 gap-4 relative">
                  <div className="relative w-[400px] h-[200px] bg-red-700 border rounded-md transition-all duration-300 hover:scale-105">
                    <p className="py-8 px-5 text-3xl text-left text-white">
                      What is the prescribe haircut for males?
                    </p>
                    <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3 text-white" />
                  </div>
                  <div className="relative w-[400px] h-[200px] bg-red-700 rounded-md transition-all duration-300 hover:scale-105">
                    <p className="py-8 px-5 text-3xl text-left text-white">
                      What is CET?
                    </p>
                    <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3 text-white" />
                  </div>
                  <div className="relative w-[400px] h-[200px] bg-red-700 rounded-md transition-all duration-300 hover:scale-105">
                    <p className="py-8 px-5 text-3xl text-left text-white">
                      Courses offered by Holy Cross of Davao College?
                    </p>
                    <FaSearch className="w-[30px] h-[30px] absolute bottom-3 right-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="font-inter flex justify-center items-center space-x-4 mt-10">
                <FaWandMagicSparkles className="text-red-700 w-[30px] h-[30px]" />
                <h1 className="font-regular text-red-700 text-2xl">
                  How can I help you today?
                </h1>
              </div>
              <div className="max-w-screen-lg w-[65%] mx-auto">
                <div className="absolute flex justify-center bottom-7">
                  <div className="relative">
                    <input
                      placeholder="Ask Gab and Ana..."
                      className="font-inter w-[1040px] h-[56px] outline-none py-4 pl-4 pr-14 tex4t-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700"
                      type="text"
                    />
                    <button
                      className="absolute font-montserrat bg-red-700 py-3 px-3 rounded-full top-2 right-2 transition duration-300 hover:bg-red-800"
                      onFocus={startConversation}
                    >
                      <FaArrowUp className="w-[15px] h-[15px]" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="font-inter max-w-screen-lg w-[65%] mx-auto my-7">
              <div className="mt-5">
                <h1 className="mt-4 text-black font-inter text-2xl font-bold tracking-tighter uppercase">
                  HCDC Student Handbook
                </h1>
                <div className="flex space-x-1 justify-start">
                  <p className="text-black font-inter font-thin text-xl">
                    an AI Assistant
                  </p>
                  <VscSparkleFilled className="text-blue-700 w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="relative flex flex-col space-y-4 mt-5">
                {/* Render the chat messages here */}
                <div className="bg-gray-400 p-4 rounded-lg place-self-end max-w-[800px]">
                  What is the Prescribed haircut for Male?
                </div>

                <div className="bg-red-700 p-4 rounded-lg place-self-start max-w-[800px]">
                  <h1>
                    The prescribed haircut for men typically refers to a haircut
                    that is required or recommended in certain formal,
                    professional, or institutional settings, such as the
                    military, law enforcement, certain schools, or corporate
                    environments.
                  </h1>
                </div>
                {/* Add more chat messages as needed */}
              </div>
              <div className="absolute flex justify-center bottom-7">
                <div className="relative">
                  <input
                    placeholder="Ask Gab and Ana..."
                    className="font-inter w-[1040px] h-[56px] outline-none py-4 pl-4 pr-14 text-black bg-gray-200 border border-gray-200 rounded-full placeholder:text-red-700"
                    type="text"
                  />
                  <button className="absolute font-montserrat bg-red-700 py-3 px-3 rounded-full top-2 right-2 transition duration-300 hover:bg-red-800">
                    <FaArrowUp className="w-[15px] h-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
