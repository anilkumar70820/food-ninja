import React from "react";
import FoodNinjaNav from "./common/FoodNinjaNav";
import search_icon from "../assets/images/svg/search_icon.svg";
import mountain_ghati from "../assets/images/png/mountain_ghati.png";
import george_costanza from "../assets/images/svg/george_costanza.svg";
import fries_chicken from "../assets/images/png/fries_chicken.png";
import FoodNinjaFooter from "./common/FoodNinjaFooter";

const AllBlogs = () => {
  return (
    <div>
      <>
        <FoodNinjaNav />
      </>
      <div className="max-w-[1100px] mx-auto xl:px-0 px-3">
        <h1 className="text-000638 font-merriweather text-2xl font-black leading-[100%] text-center mb-[10px]">
          The Food Ninja Blog
        </h1>
        <p className="text-2xmd font-roboto text-605c59 font-normal leading-[100%] text-center mb-8">
          A blog about food, experiences, and recipes.
        </p>
        <div className="mb-20 border border-solid border-[#ddd] bg-[#FEFEFE] ps-7 py-4 pe-[24px] flex justify-between max-w-[430px] mx-auto w-full rounded-[5px] items-center">
          <input
            type="search"
            placeholder="Search for articles"
            className="outline-none bg-transparent text-5F5F5F font-merriweather text-sm font-normal leading-[100%] w-full"
          />
          <img className="ms-3" src={search_icon} alt="serach_icon" />
        </div>
        <div className="flex justify-between">
          <div className="max-w-[510px]">
            <img className="mb-5" src={mountain_ghati} alt="mountain_ghati" />
            <button className="text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-vilote leading-[100%]">
              Travel
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h2>
            <p className="text-515151 text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Jun 21, 2021 • 11 min read
            </p>
            <p className="text-xsm text-434343 font-normal font-roboto leading-[160%] mb-[45px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras.
            </p>
            <div className="flex items-center gap-[15px]">
              <img src={george_costanza} alt="George Costanza" />
              <p className="mb-0 text-black text-2xsm font-bold leading-[160%] font-merriweather">
                George Costanza
              </p>
            </div>
          </div>
          <div className="max-w-[510px]">
            <img className="mb-5" src={fries_chicken} alt="fries_chicken" />
            <button className="text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-vilote leading-[100%]">
              Food Theory
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              Why You Should Never Order 12 Chicken Nuggets and Fries
            </h2>
            <p className="text-515151 text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Aug 1, 2021 • 7 min read
            </p>
            <p className="text-xsm text-434343 font-normal font-roboto leading-[160%] mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras. Ligula a varius tempus ac
              amet, vel lectus sed. Urna sit Eget.
            </p>
            <div className="flex items-center gap-[15px]">
              <img src={george_costanza} alt="George Costanza" />
              <p className="mb-0 text-black text-2xsm font-bold leading-[160%] font-merriweather">
                George Costanza
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-20 mt-[266px] mb-10">
  <div className="max-w-[382px] px-[27px] py-[38px] bg-vilote rounded-[5px]">
<h3 className="text-white text-center font-merriweather text-xmd font-black leading-[160%] max-w-[182px] mx-auto mb-[13px]">Subscribe To Our Newsletter</h3>
  <p className="font-roboto text-sm font-medium text-dfe6ff leading-[160%] mb-[17px] text-center">Get weekly food news, articles, and videos delivered to your inbox.</p>
  <form>
   <input required className="px-[15px] py-[11px] text-sm font-medium leading-[160%] font-roboto text-605c59 bg-white rounded-[3px] max-w-[288px] w-full mb-[23px]  mx-auto outline-none" type="email" placeholder="Email" />
  <button className="text-white font-roboto text-sm font-medium leading-[160%] bg-000638 rounded-[3px] ms-[22px] px-[18px] py-[9px]">Sign Up</button>
  </form>
  </div>
  <div className="max-w-[320px]">
    <h4 className="font-roboto text-2xsm font-medium leading-[160%] text-black mb-[27px]">POPULAR POSTS</h4>
 <p className="mb-[22px] font-merriweather text-2xsm font-normal leading-[160%] text-black">How To Have Your Cake and Eat It Too: The Way of The Chicken Man</p>
 <p className="mb-[22px] font-merriweather text-2xsm font-normal leading-[160%] text-black">My Grandma’s 30-year-old Recipe</p>
 <p className="font-merriweather text-2xsm font-normal leading-[160%] text-black">What I learned about cooking from Ratatoulie</p>
  </div>
  </div>
      </div>
      <FoodNinjaFooter/>
    </div>
  );
};

export default AllBlogs;
