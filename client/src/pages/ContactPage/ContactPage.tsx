import { useRive } from "rive-react";
const ContactPage = () => {
  const { RiveComponent } = useRive({
    src: "/riveAssets/toemater_timer.riv",
    animations: "break",
    autoplay: true,
  });
  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-[100px]">
        <div className=" mx-5 font-['Poppins']">
          <h1 className="lg:text-6xl text-8xl text-center  font-bold text-[#37393a]">
            Get In Touch
          </h1>
          <div className="grid md:grid-cols-2">
            <div className="h-[500px] w-[98%]">
              <RiveComponent />
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                <p style={{ lineHeight: "2" }} className="my-10 text-xl">
                  I am from Bangladesh, living and studying in the United State
                  of America. Feel free to contact me to say hi or talk about a
                  project. I will do my best to reach out back to you.
                </p>
                {/* social and contact */}
                <div className="grid sm:grid-cols-2 gap-5 ">
                  {/* contact */}
                  <div className="">
                    <h3 className="text-2xl text-gray-400"> Contact</h3>
                    <p className="my-5">Reaz.Shakil2@gmail.com</p>
                    <p>917 - 582 - 3569</p>
                  </div>
                  {/* social */}
                  <div className="text-4xl   text-[#37393a]">
                    <h3 className="text-2xl mb-5 text-gray-400">Socials</h3>
                    <a className="m-2" href={"https://github.com/reazs"}>
                      <i className="fa-brands fa-github icons"></i>
                    </a>
                    <a
                      className="m-2"
                      href="https://www.instagram.com/reazshakil/"
                    >
                      <i className="fa-brands fa-instagram icons"></i>
                    </a>
                    <a
                      className="m-2"
                      href="https://www.linkedin.com/in/reaz-shakil-a75115197/"
                    >
                      <i className="fa-brands fa-linkedin-in icons"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* extra space */}
      <div className="h-[300px]"></div>
    </>
  );
};

export default ContactPage;
