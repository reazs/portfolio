import { Reveal } from "../../animations/Reveal";
import { SlideTransition } from "../../animations/SlideTransition";

const HomeLeftDiv = () => {
  return (
    <div className="lg:w-full mx-auto">
      <h3 className="lg:text-4xl text-xl font-['Quicksand'] font-medium">
        Hello, I'm{" "}
      </h3>
      <Reveal>
        <h1 className="font-['Poppins'] font-bold lg:text-[4.8rem] text-[2.8rem] text-[#37393a]">
          Reaz Shakil
        </h1>
      </Reveal>
      <h6 className="lg:text-2xl text-xl sm:w-full w-[250px]">
        A <span className=" text-red-400 font-medium">Creative Designer</span>{" "}
        from New York
      </h6>
      {/* little description box */}
      <div className="flex flex-row lg:mt-8 gap-5 ">
        <div className="w-[100px]  lg:block hidden border-r-2"></div>
        <SlideTransition>
          <div>
            <div className="lg:text-xl text-sm font-['Quicksand'] lg:w-[320px] w-[250px] ">
              <p>
                I'm full-stack Web and mobile app developer, and I'am very
                passionate and dedicated to my work
              </p>
            </div>
            <a href="/about">
              <div className="outline-btn">More About Me</div>
            </a>
          </div>
        </SlideTransition>
      </div>
    </div>
  );
};

export default HomeLeftDiv;
