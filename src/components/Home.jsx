import React from 'react';
import tailwind from '../images/tailwindcss_at_2.45.40_PM-removebg-preview.png';
import Bootstrap from '../images/bootstrap2.45.40_PM-removebg-preview.png';
import Htmlp from '../images/htmlpm-removebg-preview.png';
import css from '../images/Css_PM-removebg-preview.png';
import javascript from '../images/javascript_PM-removebg-preview.png';
import typescript from '../images/typesript_at_2.45.39_PM-removebg-preview.png';
import image22 from '../images/gbimg2023-10-25_at_10.57.49_PM-removebg.png';
import React22 from '../images/Reacttt.png';

const Home = () => {
  return (
    <div className="md:px-10 px-3 my-14 md:h-screen bg-[#fff]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[100px] w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-black">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl text-yellow ">Badejo Emmanuel</h1>
            <p className="md:w-96">Frontend developer. I create seamless web experiences for end-users.</p>
          </div>
          <div className="order-first md:order-last relative">
            <div className="back2 two">
              <img src={image22} alt="" className="img223" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-30 gap-[30px] md:pl-12 pt-2">
        <p className="mb-2">Tech Stack </p>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={Htmlp} alt="" className="image-tech1" />
          <img src={css} alt="" className="image-tech5" />
          <img src={javascript} alt="" className="image-tech6" />
          <img src={Bootstrap} alt="" className="image-tech2" />
          <img src={tailwind} alt="" className="image-tech3" />
          <img src={typescript} alt="" className="image-tech4" />
          <img src={React22} alt="" className="image-tech7" />
        </div>
      </div>
    </div>
  );
};

export default Home;
