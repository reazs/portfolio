import { Reveal } from "../../animations/Reveal";
import { SlideTransition } from "../../animations/SlideTransition";
import reazProfile from "../../assets/images/reaz.jpg";

const AboutTopDiv = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto text-[#686868] p-5">
        <div className="lg:mt-[100px] mt-[50px] ">
          <Reveal>
            <h1 className=" sm:text-[6.0rem] text-[3.2rem] text-[#37393a] font-['Poppins']">
              Hello.
            </h1>
          </Reveal>
        </div>
        <div className="mt-[50px] grid lg:grid-cols-2 gap-5">
          <div className="mx-auto">
            <SlideTransition>
              <img src={reazProfile} className="rounded-md max-h-[400px]  " />
            </SlideTransition>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div>
              <p
                style={{ lineHeight: "2" }}
                className="text-xl font-['Quicksand']"
              >
                My name is Reaz Shakil. I am a Computer Science student from NYC
                aspiring to be a Data Scientist. I have experience in both front
                end and back end development. I enjoy learning new things and
                trying to experiment with different ideas.
              </p>
              <p className="mt-5 sm:text-xl font-bold text-gray-400">
                Keep Learning and Enjoying!
              </p>
            </div>
          </div>
        </div>
        {/* experence */}
        <div className="mt-[100px]">
          <Reveal>
            <h1 className="sm:text-4xl text-2xl font-['Poppins'] font-bold text-[#37393a]">
              Experience
            </h1>
          </Reveal>
          <p className="mt-5 sm:text-xl">
            Digital Factory - CUNY Career Launch - 2023
          </p>
          <Reveal>
            <h3 className="mt-3 sm:text-2xl text-xl font-bold font-['Poppins'] text-[#37393a]">
              Web Developer Intern
            </h3>
          </Reveal>
          <ul className="mt-10 ml-14 list-disc">
            <li className="my-5">
              Designed, developed, maintained, and continuously updated as a
              start-up project, starting from the ground up. Throughout the
              development process, special consideration was given to meet the
              specific UI/UX requirements set for the platform.
            </li>
            <li className="my-5">
              Regular updates and improvements were implemented to enhance the
              overall user experience and adapt to changing industry trends and
              demands.
            </li>
            <li className="my-5">
              Updated web style sheets and pages on a regular basis as required.
            </li>
            <li className="my-5">
              Orchestrated a strategic web informational architecture design to
              improve the user experience
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};
export default AboutTopDiv;
