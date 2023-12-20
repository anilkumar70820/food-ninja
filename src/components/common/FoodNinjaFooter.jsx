import React from "react";
import { Link } from "react-router-dom";

const FoodNinjaFooter = () => {
  return (
    <div className="py-[36px] bg-light-gray px-3">
      <div className="flex gap-[25px] justify-center mb-[26px]">
        <Link
          
          className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-Ebony after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] text-Ebony font-merriweather text-2xsm font-normal leading-[160%]"
        >
          About
        </Link>
        <Link
          
          className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-Ebony after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] text-Ebony font-merriweather text-2xsm font-normal leading-[160%]"
        >
          Privacy Policy
        </Link>
        <Link
          
          className="relative after:content-[''] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-Ebony after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] text-Ebony font-merriweather text-2xsm font-normal leading-[160%]"
        >
          Contact
        </Link>
      </div>
      <p className="text-2xsm font-merriweather font-bold leading-[160%] text-3e3e3e text-center">
        Copyright © 2021 Food Ninja Blog. All Rights Reserved.
      </p>
    </div>
  );
};

export default FoodNinjaFooter;
