import React from "react";
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-black opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Badejo Emmanuel</p>
        {/* Display only on screens larger than or equal to sm (640px) */}
        <p className="hidden sm:block text-black">Frontend Developer</p>
        <div className="flex items-center mt-4 md:mt-0">
          <a href="mailto:emmanuelayodejibadejo78@gmail.com" target="_blank" rel="noreferrer">
            <BiLogoGmail />
          </a>
          <a className="ml-4" href="https://github.com/BadejoEmmanuel07" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a className="ml-4" href="https://www.linkedin.com/in/emmanuel-badejo-68b30121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
