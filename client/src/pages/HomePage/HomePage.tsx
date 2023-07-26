import HomeLeftDiv from "./HomeLeftDiv";
import "./HomePage.css";
import { useRive, Alignment, Layout, Fit } from "rive-react";

const HomePage = () => {
  const { RiveComponent } = useRive({
    src: "/riveAssets/hero_bot.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      alignment: Alignment.Center,
      fit: Fit.Contain,
    }),
  });
  return (
    <>
      <div className="w-full h-[92vh] flex flex-row justify-center items-center ">
        <div className=" max-w-screen-xl mx-5  w-full">
          <div className="grid w-full lg:grid-cols-2  gap-2">
            <HomeLeftDiv />
            <div className=" w-[98%] transform scale-x-[-1] ">
              <RiveComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
