import React from "react";
import FoodNinjaNav from "./common/FoodNinjaNav";
import search_icon from "../assets/images/svg/search_icon.svg";
import mountain_ghati from "../assets/images/webp/mountain_ghati.webp";
import george_costanza from "../assets/images/svg/george_costanza.svg";
import fries_chicken from "../assets/images/webp/fries_chicken.webp";
import FoodNinjaFooter from "./common/FoodNinjaFooter";
import { Link } from "react-router-dom";
import BackToTop from "./common/BackToTop";

const AllBlogs = () => {
  return (
    <div>
      <div className="md:py-[29px]">
        <FoodNinjaNav />
      </div>
      <div className="max-w-[1100px] mx-auto xl:px-0 px-3 mt-8">
        <h1 className="text-Midnight-Blue font-merriweather lg:text-2xl md:text-[40px] sm:text-lg text-[30px] font-black leading-[100%] text-center mb-[10px]">
          The Food Ninja Blog
        </h1>
        <p className="text-2xmd font-roboto text-Slate-Gray font-normal leading-[100%] text-center mb-8">
          A blog about food, experiences, and recipes.
        </p>
        <div className="mb-20 border border-solid border-[#ddd] bg-[#FEFEFE] ps-7 py-4 pe-[24px] flex justify-between max-w-[430px] mx-auto w-full rounded-[5px] items-center">
          <input
            type="search"
            placeholder="Search for articles"
            className="outline-none bg-transparent text-Dim-Gray font-merriweather text-sm font-normal leading-[100%] w-full"
          />
          <img className="ms-3" src={search_icon} alt="serach_icon" />
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <Link to='/blogs'>
          <div className="lg:max-w-[510px] lg:pe-3 lg:mb-0 mb-12 group">
           <div className="overflow-hidden rounded-[5px]"> <img className="transition-all duration-300 group-hover:scale-[1.1] min-w-[296px] min-h-[160px]" src={mountain_ghati} alt="mountain_ghati" /></div>
            <button className="mt-5 group-hover:bg-white group-hover:border-violet group-hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-violet leading-[100%]">
              Travel
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h2>
            <p className="text-Dark-Slate-Gray text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Jun 21, 2021 • 11 min read
            </p>
            <p className="text-xsm text-Charcoal font-normal font-roboto leading-[160%] mb-[45px]">
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
          </Link>
          <Link to='/blogs'>
          <div className="lg:max-w-[510px] lg:ps-3 group">
            <div className="overflow-hidden rounded-[5px]"><img className="min-w-[296px] min-h-[160px] transition-all duration-300 group-hover:scale-[1.1]" src={fries_chicken} alt="fries_chicken" /></div>
            <button className="group-hover:bg-white group-hover:border-violet group-hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-violet leading-[100%] mt-5">
              Food Theory
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              Why You Should Never Order 12 Chicken Nuggets and Fries
            </h2>
            <p className="text-Dark-Slate-Gray text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Aug 1, 2021 • 7 min read
            </p>
            <p className="text-xsm text-Charcoal font-normal font-roboto leading-[160%] mb-5">
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
          </Link>
        </div>
        <div className="flex justify-between lg:flex-row flex-col mt-6 lg:mt-20">
        <Link to='/blogs'>
          <div className="lg:max-w-[510px] lg:pe-3 lg:mb-0 mb-12 group">
           <div className=" overflow-hidden rounded-[5px]"><img className="transition-all duration-300 group-hover:scale-[1.1] min-w-[296px] min-h-[160px]" src={fries_chicken} alt="fries_chicken" /></div>
            <button className="mt-5 group-hover:bg-white group-hover:border-violet group-hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-violet leading-[100%]">
              Food Theory
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              Why You Should Never Order 12 Chicken Nuggets and Fries
            </h2>
            <p className="text-Dark-Slate-Gray text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Aug 1, 2021 • 7 min read
            </p>
            <p className="text-xsm text-Charcoal font-normal font-roboto leading-[160%] mb-5">
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
          </Link>
          <Link to='/blogs'>
          <div className="lg:max-w-[510px] lg:ps-3 group">
           <div className="overflow-hidden rounded-[5px]"><img className="transition-all duration-300 group-hover:scale-[1.1] min-w-[296px] min-h-[160px]" src={mountain_ghati} alt="mountain_ghati" /></div>
            <button className="mt-5 group-hover:bg-white group-hover:border-violet group-hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-2 rounded-[3px] py-[5px] px-4 bg-violet leading-[100%]">
              Travel
            </button>
            <h2 className="text-xmd font-merriweather font-bold leading-[140%] text-black">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h2>
            <p className="text-Dark-Slate-Gray text-2xsm font-merriweather font-normal leading-[160%] mb-[15px]">
              Jun 21, 2021 • 11 min read
            </p>
            <p className="text-xsm text-Charcoal font-normal font-roboto leading-[160%] mb-[45px]">
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
          </Link>
         
        </div>
        <div className="flex lg:mt-[266px] md:mt-[180px] sm:mt-20 mt-12 mb-10 md:justify-start justify-center">
          <div className="flex lg:gap-20 gap-6 md:flex-row flex-col">
            <div className="max-w-[382px] px-[27px] py-[38px] bg-violet rounded-[5px]">
              <h3 className="text-white text-center font-merriweather text-xmd font-black leading-[160%] max-w-[182px] mx-auto mb-[13px]">
                Subscribe To Our Newsletter
              </h3>
              <p className="font-roboto text-sm font-medium text-Alice-Blue leading-[160%] mb-[17px] text-center">
                Get weekly food news, articles, and videos delivered to your
                inbox.
              </p>
              <form>
                <div className="flex justify-center">
                  <input
                    required
                    className="px-[15px] py-[11px] text-sm font-medium leading-[160%] font-roboto text-Slate-Gray bg-white rounded-[3px] max-w-[288px] w-full mb-[23px]  mx-auto outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <button className="hover:bg-white hover:border-violet hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto text-sm font-medium leading-[160%] bg-Midnight-Blue rounded-[3px] ms-[22px] px-[18px] py-[9px]">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="max-w-[320px]">
              <h4 className="font-roboto text-2xsm font-medium leading-[160%] text-black mb-[27px]">
                POPULAR POSTS
              </h4>
              <p className="mb-[22px] font-merriweather text-2xsm font-normal leading-[160%] text-black">
                How To Have Your Cake and Eat It Too: The Way of The Chicken Man
              </p>
              <p className="mb-[22px] font-merriweather text-2xsm font-normal leading-[160%] text-black">
                My Grandma’s 30-year-old Recipe
              </p>
              <p className="font-merriweather text-2xsm font-normal leading-[160%] text-black">
                What I learned about cooking from Ratatoulie
              </p>
            </div>
          </div>
        </div>
      </div>
      <FoodNinjaFooter />
      <><BackToTop/></>
    </div>
  );
};

export default AllBlogs;
