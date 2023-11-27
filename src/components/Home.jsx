import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import image22 from '../images/gbimg2023-10-25_at_10.57.49_PM-removebg.png';
import AOS from "./AOS.jsx"

const Home = () => {
  return (
    <div className="md: my-14 md:h-screen " id="home" data-aos="fade-up">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[100px] w-full">
         
          <div className="back3">
            <h6 className="text-3xl mt-12">Hi I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl text-yellow "> Emmanuel</h1>
            <p className="md:w-96 text-[#90909E]">
 <span>Junior Frontend Engineer and Digital Marketing Professional</span> <br/> <br/> With a relentless pursuit of web-app perfection, I fuse creativity with strategic marketing insights. From elegant designs to user-centric functionality, I aim to surpass expectations. My dedication extends beyond development, I thrive on crafting web application that resonate and reach audiences through innovative marketing tactics. This holistic approach ensures not just remarkable apps, but enduring user connections
 </p> <br/>

 <button>
 <a herf="https://eu.docworkspace.com/d/sIA-b9MvWAab68qoG"></a>
Download CV
</button>
          </div>
          <div className="order-first md:order-last relative">
            <div className="back2 two">
              <img src={image22} alt="" className="img223" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
