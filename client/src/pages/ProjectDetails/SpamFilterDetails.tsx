import home from "../../assets/images/spamFilterDemo/home.gif";
import autoBlock from "../../assets/images/spamFilterDemo/autoBlock.gif";
import autoDelete from "../../assets/images/spamFilterDemo/autoDelete.gif";
import qualifier from "../../assets/images/spamFilterDemo/qualifier.gif";
import resetModel from "../../assets/images/spamFilterDemo/resetModel.gif";
import training from "../../assets/images/spamFilterDemo/training.gif";
import tracking from "../../assets/images/spamFilterDemo/tracking.gif";
const SpamFilterDetails = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="lg:mt-[100px] mt-[50px] mx-5 lg:text-xl font-['Quicksand']">
          <h1 className="lg:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem] font-['Poppins']">
            Spam Filter
          </h1>
          <p className="lg:my-5">
            As a collaborative team, we embarked on an exciting journey to
            design and build the "Spam Filter" app, a powerful tool that can
            efficiently detect and manage spam messages. The app's primary goal
            was to empower users to have control over their messages, allowing
            them to delete, label, and block spam messages or numbers
            effectively. Additionally, the app was equipped with on-device
            training capabilities, enabling it to continuously learn and improve
            its spam detection accuracy. We leveraged an array of cutting-edge
            technologies, including Flutter, Dart, Kotlin, Pytorch, NumPy,
            Pandas, Python, LSTM model, Chaquopy, NLTK, and Kaggle, to craft a
            robust and user-friendly application.
          </p>
          <img src={home} />
          <p className="my-10">
            Building the "Spam Filter" app was an incredible learning experience
            for our team. Throughout the project, we honed our technical skills
            and gained insights into a wide range of technologies and
            frameworks. Flutter and Dart empowered us to create a sleek and
            responsive user interface, ensuring an engaging user experience.
            Kotlin played a crucial role in developing various app
            functionalities on the Android platform. Pytorch, NumPy, and Pandas
            were instrumental in implementing the LSTM model, enabling the app
            to effectively detect spam messages.
          </p>
          <div className="grid grid-cols-2">
            <img src={autoBlock} />
            <img src={autoDelete} />
            <img src={qualifier} />
            <img src={resetModel} />
          </div>
          <p className="my-10">
            The app's on-device training capability presented a unique
            challenge, and we overcame it by leveraging the power of Chaquopy
            and Python to facilitate continuous learning within the app.
            Utilizing NLTK allowed us to enhance the app's natural language
            processing capabilities, further improving spam detection accuracy.
          </p>
          <div className="grid grid-cols-2">
            <img src={training} />
            <img src={tracking} />
          </div>
          <p className="my-10">
            Throughout the development process, teamwork and collaboration were
            vital. We learned the importance of effective communication, active
            listening, and supporting each other's ideas. Regular code reviews
            and discussions enabled us to maintain code quality and ensure that
            our project aligned with the initial vision.
          </p>
          <p className="">
            Overall, the "Spam Filter" app project provided us with invaluable
            experiences in software development, artificial intelligence, and
            mobile app creation. We are proud of the end result - a
            sophisticated and practical application that empowers users to
            reclaim control over their messages and maintain a clutter-free
            inbox. The knowledge and skills we gained from this project will
            undoubtedly serve us well in future endeavors, and we look forward
            to applying them to create more innovative and impactful solutions
            in the ever-evolving world of technology.
          </p>
        </div>
        {/* extra space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};
export default SpamFilterDetails;
