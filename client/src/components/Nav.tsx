import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProjectPage from "../pages/ProjectsPage/ProjectPage";
import RangBazaarDetails from "../pages/ProjectDetails/RangBazaarDetails";
import RecipeHeistDetails from "../pages/ProjectDetails/RecipeHeistDetails";
import CunyZeroDetails from "../pages/ProjectDetails/CunyZeroDetails";
import SpamFilterDetails from "../pages/ProjectDetails/SpamFilterDetails";
import CallbackCatsDetails from "../pages/ProjectDetails/CallbackCatsDetails";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" mx-5 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="border-b shadow-sm">
        <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900 mx-5">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium text-2xl font-['Poppins'] "
            >
              <span className="text-red-400">R</span>
              <span className="text-teal-500">S</span>
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button> */}
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            {/* <Button variant="gradient" size="sm" className="mb-2 w-full">
            <span>Buy Now</span>
          </Button> */}
          </MobileNav>
        </Navbar>
      </div>
      {/* links */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/rangbazaar" element={<RangBazaarDetails />} />
        <Route path="/projects/recipe-heist" element={<RecipeHeistDetails />} />
        <Route path="/projects/cuny-zero" element={<CunyZeroDetails />} />
        <Route path="/projects/spam-filter" element={<SpamFilterDetails />} />
        <Route
          path="/projects/callback-cats"
          element={<CallbackCatsDetails />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
