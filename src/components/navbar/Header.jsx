import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import UserLogin from "../login/UserLogin";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const [userAccess, setUserAccess] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleMenuClick() {
    setMenu(!menu);
  }

  function handleUserclick() {
    setUserAccess(!userAccess);
  }

  function openMenu() {
    setHamburger(!hamburger);
  }

  const userAccessRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [userAccess]);

  const handleDocumentClick = (e) => {
    if (userAccessRef.current && !userAccessRef.current.contains(e.target)) {
      handleUserclick();
      console.log("clicked");
    }
  };

  return (
    <div className="flex flex-col w-full items-center  md:mb-[4%]">
      <div className="flex fixed p-4 mx-auto w-full z-50 bg-white   backdrop-blur-sm md:p-3 text-black shadow-lg text-sm">
        <div className="w-full flex mx-auto max-w-6xl justify-between">
          <div className="flex">
            <section
              onClick={openMenu}
              className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out"
            >
              {hamburger ? (
                <AiOutlineMenu className="md:flex my-auto m-1" size={25} />
              ) : (
                <AiOutlineClose className="md:flex my-auto m-1" size={25} />
              )}
            </section>
          </div>
          <div className="flex w-[60%] m-auto">
            <span className="text-lg font-normal font-mono m-auto flex">
              Gethsemane Life Church
            </span>
          </div>
          <div className="flex">
            <span
              onClick={handleUserclick}
              className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out"
            >
              <RiAccountCircleLine size={25} />
              <span className="hidden md:flex m-auto mx-1">Account</span>
            </span>
          </div>
        </div>
      </div>
      {userAccess && (
        <div className="w-full h-screen z-50 md:h-[100vh] bg-black/70 backdrop-blur-lg justify-center fixed ">
          <UserLogin ref={userAccessRef} />
        </div>
      )}
    </div>
  );
};

export default Header;
