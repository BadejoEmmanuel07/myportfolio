import React from "react";
import carrental from "../images/car-rental.jpeg";
import movie from "../images/movie.jpeg";
import googleshop from "../images/googleclone.jpeg";
import ecoshop from "../images/ecoshop.jpeg";

const Projects = () => {
  const buttonStyles =
    "bg-[#000] text-white rounded-full px-6 py-2 hover:bg-[#000] transition duration-300 z-10";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
      {/* E-commerce Web App */}
      <div className="project-card relative overflow-hidden group">
        <img
          src={ecoshop}
          alt="E-commerce Web App"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            E-commerce Web App
          </p>
          <p className="text-gray-300 item text-lg md:text-xs">
            Built a feature-rich e-commerce web application with secure payment
            gateways, intuitive product navigation, and a dynamic cart system.
            Leveraged API integrations for optimized inventory management and
            real-time updates, enhancing overall efficiency.
          </p>{" "}
          <br />
          <a
            href="https://ecoshop-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
          >
            Visit Project
          </a>
        </div>
      </div>

      {/* Movie Trailer Web App */}
      <div className="project-card relative overflow-hidden group">
        <img
          src={movie}
          alt="Movie Trailer Web App"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            Movie Trailer Web App
          </p>
          <p className="text-gray-300 item text-lg md:text-sm">
            Designed and implemented a movie web app focused on watching
            trailers. Users can easily browse and watch trailers for a vast
            collection of movies. Incorporated API integrations for real-time
            movie data.
          </p>{" "}
          <br />
          <a
            href="https://my-movieprojecttmb-ficj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
          >
            Visit Project
          </a>
        </div>
      </div>

      {/* Google Clone */}
      <div className="project-card relative overflow-hidden group">
        <img
          src={googleshop}
          alt="Google Clone"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            Google Clone
          </p>
          <p className="text-gray-300 item text-lg md:text-xs">
            Crafted a Google search clone with a replicated interface and
            functionalities of the renowned search engine. Integrated the Google
            Search API for an authentic search experience.
          </p>{" "}
          <br />
          <a
            href="https://googleappclone.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
          >
            Visit Project
          </a>
        </div>
      </div>

      {/* Car Rental Website */}
      <div className="project-card relative overflow-hidden group">
        <img
          src={carrental}
          alt="Car Rental Website"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            Car Rental Website
          </p>
          <p className="text-gray-300 text-lg item md:text-xs">
            Designed and implemented a responsive car rental website, providing
            users with an intuitive platform to explore, select, and rent
            vehicles. Integrated real-time features like live availability and
            pricing information.
          </p>{" "}
          <br />
          <a
            href="https://car-rental-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
