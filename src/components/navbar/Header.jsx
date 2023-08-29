import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import UserLogin from "../login/UserLogin";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const [userAccess, setUserAccess] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleHamburgerClick() {
    setMenu(!menu);
 
  }

  function handleUserclick() {
    setUserAccess(!userAccess);
  }

  function openMenu() {
    setHamburger(!hamburger);
  }

  const userAccessRef = useRef();
  const humburgerRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = hamburger ? 'auto' : 'hidden';
    document.addEventListener("click", handleDocumentClick, true);
    document.addEventListener("click", handleMenuClick, true);


    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      document.removeEventListener("click", handleMenuClick, true);

    };
  }, [userAccess,hamburger]);

  const handleDocumentClick = (e) => {
    if (userAccessRef.current && !userAccessRef.current.contains(e.target)) {
      handleUserclick();
      console.log("clicked");
    }
  };
  function handleMenuClick() {
    if (humburgerRef.current && !humburgerRef.current.contains(e.target)) {
      handleHamburgerClick()
      console.log("clicked");
    }
  }
  return (
    <div className="flex flex-col w-full items-center  md:mb-[4%]">
      <div className="flex fixed p-2 mx-auto w-full z-50 bg-white   backdrop-blur-sm md:p-3 text-black shadow-lg text-sm">
        <div className="w-full flex mx-auto max-w-6xl justify-between">
          <div className="flex">
            <section
              onClick={openMenu}
              className="flex m-1  hover:cursor-pointer hover:text-purple-800 duration-700 ease-in-out"
            >
              {hamburger ? (
                <AiOutlineMenu className="md:flex my-auto m-1 duration-700 " size={25} />
              ) : (
                <AiOutlineClose className="md:flex my-auto m-1 duration-700" size={25} />
              )}
            </section>
          </div>
          <div className="flex w-[60%] m-auto">
            <span className="hidden text-lg font-normal font-mono m-auto md:flex">
              Gethsemane Life Church
            </span>
            <span className="flex text-lg font-normal font-mono m-auto md:hidden">
              GLC
            </span>
          </div>
          <div className="flex">
            <span
              onClick={handleUserclick}
              className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out"
            >
              <BiUser size={25} />
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
    {hamburger ? 
    <div className="fixed top-0 left-[-100%] h-full w-full bg-black text-white transform -transition-transform duration-700 ease-in-out ">
      <div className="h-full flex items-center justify-center">
        Hello world
      </div>
    </div>
    :
    <div className="fixed top-0 left-0 z-40 h-full w-full bg-orange-400 text-white transform -transition-transform duration-1000 ease-in-out">
      <div className="h-full flex items-center justify-center">
        Hello world
      </div>
    </div>
  }
    </div>
  );
};

export default Header;
// Gethsemane