import React, { useEffect } from "react";
import post_thumbnail from "../../assets/images/webp/Post_Thumbnail.webp";
import george_costanza from "../../assets/images/svg/george_costanza.svg";
import george_costanza2 from "../../assets/images/webp/george_costanza.webp";
import food_table from "../../assets/images/webp/food_table.webp";
import kitchen_table from "../../assets/images/webp/kitchen_table.webp";
import FoodNinjaNav from "../common/FoodNinjaNav";
import FoodNinjaFooter from "../common/FoodNinjaFooter";
import BackToTop from "../common/BackToTop";
import { Link } from "react-router-dom";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
    <><FoodNinjaNav/></>
      <div className="max-w-[800px] mx-auto lg:px-0 px-3 md:py-[63px] py-12">
        <button className="hover:bg-white hover:border-violet hover:text-violet transition-all duration-300 border border-solid border-transparent text-white font-roboto font-medium text-2xsm text-opacity-[0.85] mb-[14px] rounded-[3px] py-[5px] px-4 bg-violet leading-[100%]">
          Food Theory
        </button>
        <h1 className="text-black lg:text-xl md:text-[38px] sm:text-[32px] text-[28px] font-bold leading-[100%] font-merriweather">
          What I Learned About Life and Food Backpacking Around Greece
        </h1>
        <p className="text-Dark-Slate-Gray font-merriweather text-2xsm font-normal leading-[160%] mb-[18px]">
          Aug 1, 2021 • 7 min read
        </p>
        <img
          className="w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] rounded-[5px] min-w-[296px] min-h-[102px]"
          src={post_thumbnail}
          alt="post_thumbnail"
        />
        <div className="flex items-center gap-[15px] mt-5 mb-[30px]">
          <img src={george_costanza} alt="George Costanza" />
          <p className="mb-0 text-black text-2xsm font-bold leading-[160%] font-merriweather">
            George Costanza
          </p>
        </div>
        <p className="text-md mb-[30px] font-medium leading-[160%] font-roboto text-Charcoal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
        <p className="text-2xmd mb-10 font-normal leading-[160%] font-roboto text-Charcoal">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <div className="border border-[#ddd] border-solid rounded-[7px] bg-light-gray px-[35px] pb-[35px] pt-[33px] mb-[40px]">
          <h3 className="text-xmd font-bold leading-[160%] font-merriweather text-black mb-[15px]">
            In this article
          </h3>
          <ol className="list-decimal ms-[25px]">
            <li className="mb-[15px]">
              <Link
                className="text-Jet text-sm font-normal leading-[160%] font-merriweather underline"
            
              >
                {" "}
                How to travel without spending a dime
              </Link>
            </li>
            <li className="mb-[15px]">
              <Link
                className="text-Jet text-sm font-normal leading-[160%] font-merriweather underline">
                Get the most out of your credit card reward points
              </Link>
            </li>
            <li>
              <Link
                className="text-Jet text-sm font-normal leading-[160%] font-merriweather underline"
            
              >
                Why you don’t need more than 3 pieces of clothing
              </Link>
            </li>
          </ol>
        </div>
        <p className="text-2xmd mb-[30px] font-normal leading-[160%] font-roboto text-Charcoal">
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
        <h3 className="text-Jet font-merriweather font-bold leading-[160%] text-xmd mb-5">
          How to travel without spending a dime
        </h3>
        <p className="text-2xmd mb-5 font-normal leading-[160%] font-roboto text-Charcoal">
          Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
          donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
          fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
          feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
          pharetra, vestibulum rhoncus natoque.
        </p>
        <p className="text-2xmd mb-[30px] font-normal leading-[160%] font-roboto text-Charcoal">
          Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris
          etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim
          interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor.
          Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer
          praesent tincidunt. At erat sagittis tellus ultricies in a.{" "}
        </p>
        <h3 className="text-Jet font-merriweather font-bold leading-[160%] text-xmd mb-5">
          Get the most out of your credit card reward points
        </h3>
        <p className="text-2xmd mb-5 font-normal leading-[160%] font-roboto text-Charcoal">
          Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
          leo eros. Auctor in elementum accumsan malesuada gravida neque cursus
          pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque,
          porta vel, morbi nulla at tincidunt. Neque, et ultrices duis
          fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi
          feugiat.
        </p>
        <p className="text-2xmd mb-[30px] font-normal leading-[160%] font-roboto text-Charcoal">
          Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
          Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
          magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
          vitae. Duis luctus convallis risus purus sollicitudin purus id eu.
          Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus.
          Tortor felis.{" "}
        </p>
        <h3 className="text-Jet font-merriweather font-bold leading-[160%] text-xmd mb-5">
          Why you don’t need more than 3 pieces of clothing
        </h3>
        <p className="text-2xmd mb-5 font-normal leading-[160%] font-roboto text-Charcoal">
          Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
          Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin
          in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit
          leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque
          sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris.
          Viverra nulla.
        </p>
        <p className="text-2xmd mb-[50px] font-normal leading-[160%] font-roboto text-Charcoal">
          Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
          pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
          faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor.
          Maecenas molestie consequat cursus posuere ultrices facilisis hac
          bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus
          sit et.{" "}
        </p>
        <h2 className="text-Jet font-merriweather font-bold leading-[160%] md:text-lg sm:text-[30px] text-[26px] mb-[30px]">
          Keep reading
        </h2>
        <div className="mb-[29.66px] flex gap-[34px] md:flex-row flex-col items-start">
          <img
            className="shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] rounded-[5px] min-w-[250px] min-h-[166px]"
            src={food_table}
            alt="food_table"
          />
          <div>
            <h3 className="text-Jet font-merriweather font-bold leading-[160%] text-xmd mb-2">
              Why you don’t need more than 3 pieces of clothing
            </h3>
            <p className="font-roboto text-Gray text-sm font-normal leading-[160%] mb-0">
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </div>
        <div className="mb-[47.66px] flex gap-[34px] md:flex-row flex-col items-start">
          <img
            className="shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] rounded-[5px] min-w-[250px] min-h-[166px]"
            src={kitchen_table}
            alt="kitchen_table"
          />
          <div>
            <h3 className="text-Jet font-merriweather font-bold leading-[160%] text-xmd mb-2">
              Why you should cook with your family together everyday
            </h3>
            <p className="font-roboto text-Gray text-sm font-normal leading-[160%] mb-0">
              Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,
              fermentum donec nunc lacinia. Risus in egestas in orci quam.
            </p>
          </div>
        </div>
        <div className="border border-[#ddd] border-solid rounded-[5px] bg-light-gray ps-[31px] pb-[43px] pt-[44px] pe-[36px] flex gap-7 md:items-end items-start md:flex-row flex-col">
          <img className="min-w-[150px] min-h-[150px]" src={george_costanza2} alt="george_constanza" />
          <div>
            <h3 className="text-black font-merriweather text-xmd font-normal leading-[160%] mb-[13px]">
              Written by George Costanza
            </h3>
            <p className="leading=[160%] font-roboto text-sm font-normal text-black">
              Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
              molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
              elementum. Nunc potenti lectus in erat ligula cras. Eget.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto 2xl:px-0 px-3 lg:mb-[147px] md:mb-20 mb-[50px] mt-[50px]">
        <div className="flex gap-6 flex-wrap xl:ms-[170px] xl:max-w-[1182px] justify-between ">
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
                  className="px-[15px] py-[11px] text-sm font-medium leading-[160%] font-roboto text-Slate-Gray bg-white rounded-[3px] max-w-[288px] w-full mb-[23px] outline-none"
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
          <div className="max-w-[320px]">
            <h4 className="font-roboto text-2xsm font-medium leading-[160%] text-black mb-[27px]">
              Recent Posts
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
      <><FoodNinjaFooter/></>
      <><BackToTop/></>
    </>
  );
};

export default Blogs;
