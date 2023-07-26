import Rive, { useRive, Fit, Layout, Alignment } from "rive-react";
import ProjectRightDiv from "./ProjectRightDiv";
import { ProjectsModel } from "../../models/ProjectsModel";
import ProjectCardTile from "../../components/ProjectCardTile";
import { Reveal } from "../../animations/Reveal";
const ProjectPage = () => {
  const { RiveComponent } = useRive({
    src: "/riveAssets/toemater_timer.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div className="flex flex-row justify-center mt-[100px]">
          <Reveal>
            <h1 className=" text-center lg:text-7xl text-[2.8rem] font-['Poppins'] font-bold text-[#37393a]">
              Recent Work
            </h1>
          </Reveal>
        </div>
        <div className="grid lg:grid-cols-2 lg:mt-[100px] mx-5 text-center">
          <div className="lg:max-h-[380px] max-h-[380px]   ">
            <div className="h-full  w-[99%] relative bottom-[40px]">
              <RiveComponent />
            </div>
          </div>
          {/* right container */}
          <ProjectRightDiv />
        </div>
        <div className="mt-[50px] mx-5">
          <h4 className="text-gray-400 lg:text-2xl text-xl font-medium  font-['Quicksand']">
            Project Developed
          </h4>
          <div className="my-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1 lg:mx-0 ">
              {ProjectsModel.map((project, index) => {
                return <ProjectCardTile key={index} {...project} />;
              })}
            </div>
          </div>
          {/* extra space */}
          <div className="h-[300px]"></div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
