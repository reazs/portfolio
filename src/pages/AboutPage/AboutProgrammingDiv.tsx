import { Reveal } from "../../animations/Reveal";

const AboutProgrammingDiv = () => {
  return (
    <>
      <div className="my-[50px] bg-[#e9eaeb] h-[500px] ">
        <div className=" max-w-screen-lg mx-auto py-[65px] ">
          <div className="mx-5">
            <Reveal>
              <h3 className="sm:text-5xl py-2 text-3xl  font-['Poppins'] font-bold text-[#37393a]">
                Programming
              </h3>
            </Reveal>
            <div className="mt-6">
              <div className="grid grid-cols-3 sm:text-xl font-['Poppins']">
                <div>
                  <p className="py-3">React</p>
                  <p className="py-3">Flutter</p>
                  <p className="py-3">Flask</p>
                  <p className="py-3">PyTorch</p>
                </div>
                <div>
                  <p className="py-3">JavaScript</p>
                  <p className="py-3">TypeScript</p>
                  <p className="py-3">Python</p>
                  <p className="py-3">Pandas</p>
                </div>
                <div>
                  <p className="py-3">Dart</p>
                  <p className="py-3">Java</p>
                  <p className="py-3">C++</p>
                  <p className="py-3">SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProgrammingDiv;
