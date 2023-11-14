import React from "react";
import Work from "../images/work.jpg";

const About = () => {
  return (
    <div className="py-16 flex items-center justify-center" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <img src={Work} alt="Work" className="rounded w-[250px] h-[250px] items-center" />
        <div className="md:ml-8 mt-4 md:mt-0 md:w-[300px] ">
          <h4 className="text-3xl font-semibold">About Me</h4>
          <p className="text-sm mt-4">
          Hi, I'm Badejo Emmanuel, a frontend developer passionate about crafting seamless digital experiences. Proficient in React, TypeScript, and JavaScript, I specialize in transforming designs into interactive and visually appealing web applications.

💡 With expertise in UI/UX design using Bootstrap and Tailwind, I bring a keen eye for detail to every project. My commitment to clean, maintainable code ensures the longevity and efficiency of the solutions I create.

🌐 As an API integration enthusiast, I leverage data to enhance application functionality and deliver real-time experiences. I stay on the cutting edge of technology to bring the latest innovations to my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
