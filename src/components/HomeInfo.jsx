import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center "></p> {text}
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div>
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 ">
        Hi, Iam <span className="font-bold">Pradeep Durai</span>👋🏻
        <br /> A Full Stack Developer from India <br />
        <span className="font-semibold">Turning ideas into code💭</span>
      </h1>

      <div className="mt-3 absolute max-sm:text-[8px] max-sm:ml-4 ">
        <h2 className="neo-brutalism-blue p-1 text-white pr-3 pl-3">
          <FaArrowLeft className="inline-block" /> Swipe Left
        </h2>
      </div>
      <div className=" absolute mt-3 sm:ml-80 ml-[270px] max-sm:text-[8px]  ">
        <h2 className="neo-brutalism-blue p-1 text-white pl-3 pr-3">
          Swipe Right <FaArrowRight className="inline-block" />
        </h2>
      </div>
    </div>
  ),
  2: (
    <InfoBox
      text={
        "Education has been my guiding light. To get a glimpse of  my academic journey "
      }
      link="/about"
      btnText="visit my page"
    />
  ),
  3: (
    <InfoBox
      text="As a freelancer, every project has been a stepping stone, enriching my professional journey with invaluable skills."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Got questions? I’ve got answers.."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
