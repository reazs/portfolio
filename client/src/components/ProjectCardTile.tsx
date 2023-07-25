import { SlideTransition } from "../animations/SlideTransition";
import { ProjectInterF } from "../models/ProjectsModel";
import { Link } from "react-router-dom";
const ProjectCardTile = ({ title, description, url }: ProjectInterF) => {
  return (
    <>
      <SlideTransition>
        <div className="p-5 border-2  ">
          <h3 className="text-3xl">{title}</h3>
          <hr className="my-2" />
          <p className=" line-clamp-4">{description}</p>
          <div className="flex flex-row-reverse">
            <Link to={url}>
              <div className="outline-btn">More Details</div>
            </Link>
          </div>
        </div>
      </SlideTransition>
    </>
  );
};

export default ProjectCardTile;
