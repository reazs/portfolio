import fullProjectDemo from "../../assets/images/cunyZeroDemo/full_project.gif";
import classDetials from "../../assets/images/cunyZeroDemo/class_detials.png";
import classGrade from "../../assets/images/cunyZeroDemo/class_grading.png";
import complain_page from "../../assets/images/cunyZeroDemo/complain_page.png";
import homePage from "../../assets/images/cunyZeroDemo/homepage.png";
import instructorRegister from "../../assets/images/cunyZeroDemo/instructor_register.png";
import studentLogin from "../../assets/images/cunyZeroDemo/student_login.png";
import studentResiger from "../../assets/images/cunyZeroDemo/student_login.png";
import instructorLogin from "../../assets/images/cunyZeroDemo/instuctor_login.png";
import studentHome from "../../assets/images/cunyZeroDemo/student_homepage.png";
import viewGrade from "../../assets/images/cunyZeroDemo/view_grade.png";
const CunyZeroDetails = () => {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto">
        <div className="lg:mt-[100px] mt-[50px] mx-5 lg:text-xl font-['Quicksand']">
          <h1 className="lg:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem] font-['Poppins']">
            CUNY Zero
          </h1>
          <p className="lg:mt-5 mb-10">
            As a collaborative team member, I played an integral role in
            designing and developing a user-friendly website for CUNY Zero. Our
            primary goal was to create a seamless platform that facilitates
            interactions between instructors and students, streamlining
            essential processes such as application, enrollment, grade checking,
            and class schedule management.
          </p>
          <p className="my-10">
            As a collaborative team member, I played an integral role in
            designing and developing a user-friendly website for CUNY Zero. Our
            primary goal was to create a seamless platform that facilitates
            interactions between instructors and students, streamlining
            essential processes such as application, enrollment, grade checking,
            and class schedule management.
          </p>
          <img className="" src={fullProjectDemo} />
          <p className="my-10">
            To maintain data integrity and accessibility, we leveraged an SQL
            database, implementing efficient data storage and retrieval
            mechanisms. This decision was critical in ensuring that users can
            easily access their academic information and navigate the website
            with confidence.
          </p>

          <p className="my-10">
            Throughout the development process, collaboration and effective
            communication were key factors driving our success. We worked
            cohesively as a team, exchanging ideas and providing valuable input,
            resulting in a final product that fulfills CUNY Zero's vision for an
            innovative educational platform.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <img src={homePage} />
            <img src={instructorLogin} />
            <img src={instructorRegister} />
            <img src={studentLogin} />
            <img src={studentResiger} />
            <img src={studentHome} />
            <img src={classDetials} />
            <img src={classGrade} />
            <img src={viewGrade} />
            <img src={complain_page} />
          </div>
          <p className="my-10">
            Creating the CUNY Zero group project was an incredible learning
            experience from my perspective. Working collaboratively with my
            teammates allowed us to tackle the challenges of designing a
            user-friendly website for instructors and students. Throughout the
            project, I gained valuable insights that extended beyond technical
            skills.
          </p>
          <p className="my-10">
            One of the most significant takeaways for me was the importance of
            teamwork and collaboration. As a team, we learned how to effectively
            communicate, share ideas, and support one another to achieve our
            common goal. Understanding each team member's strengths and
            delegating tasks accordingly was essential in ensuring the project's
            success.
          </p>
          <p className="my-10">
            I faced various technical challenges during the development process,
            and these hurdles allowed me to enhance my problem-solving skills.
            Finding solutions to technical issues and debugging code became
            second nature as we progressed through the project.
          </p>
          <p className="my-10">
            Above all, this project fueled my passion for continuous learning.
            Technology is constantly evolving, and this experience reinforced
            the importance of staying curious and embracing new tools and
            techniques in web development.
          </p>
          <p className="my-10">
            Above all, this project fueled my passion for continuous learning.
            Technology is constantly evolving, and this experience reinforced
            the importance of staying curious and embracing new tools and
            techniques in web development.
          </p>
          <hr className="my-5" />
          <p>
            <strong>GitHub Repository:</strong>{" "}
            <a
              className="text-blue-500 underline"
              href="https://github.com/reazs/cunyZero"
            >
              https://github.com/reazs/cunyZero
            </a>
          </p>
        </div>

        {/* extra space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default CunyZeroDetails;
