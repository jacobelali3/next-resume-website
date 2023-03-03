'use client';
import { useState } from "react";
import MobileNav from "./mobileLinks";

function BurgerMenu() {
  const [open, setOpen] = useState(false);


  return (
    <div className="flex  lg:hidden ">
      <button
        onClick={() => setOpen(!open)}
        className=" items-center px-3 py-2 border rounded text-white border-white hover:text-blue-300 hover:border-blue-300 hover:bg-white"
      >
        {open ? (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        ) : (
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}

        {open && <MobileNav />}
      </button>
    </div>
  );
}

export default BurgerMenu;
