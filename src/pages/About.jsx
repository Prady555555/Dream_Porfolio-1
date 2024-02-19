import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Pradeep Durai
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        Hi there! I'm Pradeep, a tech whiz from India. I studied Mechanical
        Engineering at Ramco Institute of Technology. Now, I'm a Full Stack
        Developer, juggling codes and solving puzzles in the MERN stack. I also
        play around with React Native, crafting cool mobile apps. My engineering
        roots help me crack tough nuts in the software world. In short, I'm an
        engineer turned coder, making the digital world a better place, one line
        of code at a time.
      </div>
      {/* this is for the logo  */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 " key={skill.name}>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*this is for the experice table   */}

      <div className="py-16">
        <h3 className="subhead-text">Journey</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Embarking on a coding journey right after my 12th standard, I,
            Pradeep, plunged into the vast ocean of Java and Android Studio.
            With each line of code, my understanding deepened and my passion for
            technology grew. Soon, I found myself drawn towards React Native,
            where I began crafting mobile applications, each one a testament to
            my growing skills. But the world of coding, vast and ever-evolving,
            beckoned me towards Web Development. I dived in, immersing myself in
            HTML, CSS, JavaScript, and more, building interactive and responsive
            websites. Now, on the brink of mastering Web Development, I stand,
            ready to face new challenges, my eyes set on the horizon of endless
            possibilities. As I continue this journey, I carry with me the
            invaluable support of my friend, a beacon of encouragement in this
            vast sea of codes and algorithms.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experice-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-500" />
      <CTA />
    </section>
  );
};

export default About;
