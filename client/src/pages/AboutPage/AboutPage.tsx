import { Reveal } from "../../animations/Reveal";
import AboutProgrammingDiv from "./AboutProgrammingDiv";
import AboutTopDiv from "./AboutTopDiv";

const AboutPage = () => {
  return (
    <>
      <AboutTopDiv />
      <AboutProgrammingDiv />
      <div className="max-w-screen-lg mx-auto font-['Poppins'] mt-[100px]">
        <div className="mx-5">
          <Reveal>
            <h3 className="sm:text-5xl text-4xl font-bold text-[#37393a] ">
              Education
            </h3>
          </Reveal>
          <p className="my-5  ">
            The City College Of New York, Grove School of Engineering, New York
            City, NY - 2023
          </p>
          <Reveal>
            <h5 className="sm:text-3xl text-2xl  font-bold text-[#37393a]">
              Bachelor of Science in Computer Science
            </h5>
          </Reveal>
          <p className="my-5">GPA: 3.2/4</p>
          <p>
            <strong>Relevant Courses :</strong> Algorithms, Data Structures,
            Software Design Lab, Database Systems, Introduction to Data Science,
            Machine Learning, Software Engineering, Senior Design (Applied
            Machine Learning), Numerical Issues in Scientific Programming,
            Computational Complexity.
          </p>
        </div>
      </div>

      {/* extra space */}
      <div className="h-[300px]"></div>
    </>
  );
};

export default AboutPage;
