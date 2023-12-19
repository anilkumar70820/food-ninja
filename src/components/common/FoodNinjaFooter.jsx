import React from "react";

const FoodNinjaFooter = () => {
  return (
    <div className="py-[36px] bg-light-gray px-3">
      <div className="flex gap-[25px] justify-center mb-[26px]">
        <a
          href="#"
          className=" text-544b44 font-merriweather text-2xsm font-normal leading-[160%]"
        >
          About
        </a>
        <a
          href="#"
          className=" text-544b44 font-merriweather text-2xsm font-normal leading-[160%]"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className=" text-544b44 font-merriweather text-2xsm font-normal leading-[160%]"
        >
          Contact
        </a>
      </div>
      <p className="text-2xsm font-merriweather font-bold leading-[160%] text-3e3e3e text-center">
        Copyright © 2021 Food Ninja Blog. All Rights Reserved.
      </p>
    </div>
  );
};

export default FoodNinjaFooter;
