import React, { useEffect, useState } from "react";
import preloader_img from "../../assets/images/webp/fries_chicken.webp"
function Preloader() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center">
            <div className="flex justify-center items-center flex-col px-3">
                <h2 className="text-Midnight-Blue font-merriweather lg:text-2xl md:text-[40px] sm:text-lg text-[30px] font-black leading-[100%] text-center mb-5 preloader_animation">The Food Ninja Blogs</h2>
           <img className="preloader_animation w-full min-w-[250px] min-h-[166px]" src={preloader_img} alt="preloader_img" />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Preloader;