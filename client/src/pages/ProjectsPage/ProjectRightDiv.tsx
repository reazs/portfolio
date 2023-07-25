import rangBazaarDemo from "../../assets/images/rangbazaar-demo-img.png";
import { Link } from "react-router-dom";
const ProjectRightDiv = () => {
  return (
    <>
      {" "}
      <div className="  overflow-clip  lg:max-w-[600px] max-w-[90%]  mx-auto shadow-md rounded-md ">
        <div className="p-5  text-start">
          <img className="h-[250px] w-full object-cover" src={rangBazaarDemo} />
          <h3 className="lg:text-3xl text-2xl font-['Montserrat']  ">
            RangBazaar
          </h3>
          <hr className="my-3" />
          <p className=" line-clamp-3 sm:text-xl text-sm font-['Quicksand']">
            Rangbazaar is an e-commerce application built using React,
            TypeScript, and Vite. It allows users to browse and purchase a
            variety of products online.
          </p>
          <Link to="/projects/rangbazaar">
            <div className="flex flex-row-reverse">
              <div className="primary-btn">More Details</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectRightDiv;
