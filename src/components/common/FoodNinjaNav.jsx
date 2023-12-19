import React from "react";

const FoodNinjaNav = () => {
  return (
    <header className="py-9">
      <div className="max-w-[1100px] mx-auto xl:px-0 px-3">
        <nav className="flex items-center justify-between">
          <h3 className="text-xmd text-000638 font-black leading-[100%] font-merriweather cursor-pointer">
            Food Ninja
          </h3>
          <ul className="flex items-center gap-5">
            <li>
              <a href="#" className="text-605c59 font-roboto text-sm leading-[100%] font-normal">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-605c59 font-roboto text-sm leading-[100%] font-normal">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-605c59 font-roboto text-sm leading-[100%] font-normal">
                Contact
              </a>
            </li>
            <li><button className="text-sm font-roboto text-white font-normal leading-[100%] py-2 px-[15px] rounded-[29px] bg-vilote">Log in</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default FoodNinjaNav;
