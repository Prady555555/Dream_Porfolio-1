import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Throughout my journey in the world of coding, I've had the opportunity
          to work on several exciting projects. Each one is a testament to my
          learning and growth in this field. These projects, crafted
          meticulously while following various tutorials, have allowed me to
          apply the concepts I've learned and see them come to life. From
          developing mobile applications using React Native to creating
          interactive and responsive websites with HTML, CSS, and JavaScript,
          each project has been a stepping stone in my coding journey. Recently,
          I've also ventured into the realm of 3D graphics with Three.js, adding
          another dimension to my portfolio. These projects not only showcase my
          technical skills but also my dedication to learning and my ability to
          transform concepts into tangible applications. As I continue to learn
          and grow, I look forward to adding more complex and innovative
          projects to my portfolio. Remember, the journey of learning is just as
          important as the destination. Each project you've created is a
          milestone on your path. Keep learning, keep coding, and keep creating
          amazing things!.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="nooper noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img src={arrow} className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-500" />
      <CTA />
    </section>
  );
};

export default Projects;
