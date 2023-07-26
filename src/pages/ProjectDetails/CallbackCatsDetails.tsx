import home from "../../assets/images/callbackCatsDemo/home.gif";
import adopt from "../../assets/images/callbackCatsDemo/adopt.gif";
import adoptCat from "../../assets/images/callbackCatsDemo/adopt-cat.gif";
import user from "../../assets/images/callbackCatsDemo/user.gif";
import facts from "../../assets/images/callbackCatsDemo/facts.gif";
import uploadCats from "../../assets/images/callbackCatsDemo/upload-cats.gif";
const CallbackCatsDetails = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="lg:mt-[100px] mt-[50px] mx-5 lg:text-xl font-['Quicksand']">
          <h1 className="lg:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem] font-['Poppins']">
            Callback Cats
          </h1>
          <p className="lg:my-5">
            Welcome to our exciting group project! As a team of dedicated
            developers, we've come together to create a cutting-edge web
            application that combines the power of TypeScript, React, Flask,
            SQL, REST API, and fetching data from external sources.
          </p>
          <img src={home} />
          <p className="my-10">
            Our project revolved around a central theme of data retrieval and
            manipulation, where we aimed to create a dynamic and user-friendly
            platform for users worldwide. The frontend of our web application
            was powered by TypeScript and React. We leveraged TypeScript's
            strong typing system and React's component-based architecture to
            ensure a robust and maintainable codebase. The user interface was
            designed to be intuitive, responsive, and aesthetically pleasing,
            providing an engaging experience for our users.
          </p>
          <p className="my-10">
            The frontend of our web application is powered by TypeScript and
            React. With TypeScript's strong typing system and React's
            component-based architecture, we are ensuring a robust and
            maintainable codebase. The user interface will be intuitive,
            responsive, and aesthetically pleasing, providing an engaging
            experience for our users.
          </p>
          <img src={adopt} />
          <p className="py-10">
            On the backend, we're utilizing Flask, a powerful Python web
            framework, to create a REST API. Flask allows us to efficiently
            handle HTTP requests and responses, making data retrieval and
            manipulation a breeze. Through this API, we were able to interact
            with our SQL database seamlessly.
          </p>
          <p className="">
            Speaking of databases, our SQL database serves as the backbone of
            our project. It will store essential data and user information,
            ensuring efficient data management and retrieval. We're committed to
            maintaining data integrity and security throughout the application.
          </p>
          <img src={user} />
          <p className="my-10">
            Throughout the project, collaboration and communication were our
            cornerstones. We utilized version control systems like Git to ensure
            a streamlined workflow and facilitate seamless integration of our
            individual contributions. Frequent code reviews and discussions
            helped maintain code quality and fostered a positive team
            environment.
          </p>
          <img src={adoptCat} />
          <div className="grid grid-cols-2">
            <img src={facts} />
            <img src={uploadCats} />
          </div>
          <p className="py-10">
            Our shared passion for technology, creativity, and problem-solving
            drove the success of this project. We are proud of our work, and the
            application we built leaves a lasting impact on our users.
          </p>
          <p className="mb-5">
            Completing this college project was a fulfilling experience for all
            of us. We worked together, leveraged our diverse skills, and
            delivered an exceptional web application that met our goals and
            exceeded expectations. The journey was challenging but rewarding,
            and we are excited to have successfully brought our ideas to life.
          </p>
          <hr className="my-5" />
          <p>
            <strong>GitHub Repository:</strong>{" "}
            <a
              className="text-blue-500 underline"
              href="https://github.com/reazs/callback-cats"
            >
              https://github.com/reazs/callback-cats
            </a>
          </p>
        </div>
        {/* extra space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default CallbackCatsDetails;
