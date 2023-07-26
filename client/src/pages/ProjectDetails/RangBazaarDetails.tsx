import homePage from "../../assets/images/rangbazaarDemo/home_page.gif";
import signIn from "../../assets/images/rangbazaarDemo/singIn_page.gif";
import singUp from "../../assets/images/rangbazaarDemo/singUp_page.gif";
import userPage from "../../assets/images/rangbazaarDemo/user_page.gif";
import shopPage from "../../assets/images/rangbazaarDemo/shop_page.gif";
import shopDetails from "../../assets/images/rangbazaarDemo/shop_details_page.gif";
import shopping from "../../assets/images/rangbazaarDemo/shop_page.gif";
import order_page from "../../assets/images/rangbazaarDemo/order_page.gif";
import ordering from "../../assets/images/rangbazaarDemo/ordering.gif";
import reviewPage from "../../assets/images/rangbazaarDemo/review.gif";
import contactPage from "../../assets/images/rangbazaarDemo/contact_page.gif";
const RangBazaarDetails = () => {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto">
        <div className="lg:mt-[100px] mt-[50px] mx-5 lg:text-xl font-['Quicksand']">
          <h1 className="lg:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem] font-['Poppins']">
            Rang Bazaar
          </h1>
          <p className="mb-5 lg:mt-5 ">
            is a modern and user-friendly e-commerce platform designed to
            provide a seamless shopping experience to customers. Built with
            React for the frontend and Node.js for the backend, Rangbazaar
            offers a wide range of products from various categories, making it a
            one-stop destination for all shopping needs.
          </p>
          <img src={homePage} />
          <p className="my-5">
            User Authentication and Authorization: Rangbazaar allows users to
            sign up and log in securely, ensuring a personalized shopping
            experience and protecting sensitive information.
          </p>
          <div className="grid grid-cols-2 gap-1">
            <img src={signIn} />
            <img src={singUp} />
          </div>

          <p className="my-5">
            Whether users are searching for the latest fashion trends,
            electronic gadgets, home essentials, or any other products,
            Rangbazaar caters to their needs with a diverse and ever-expanding
            product range. Shop with confidence at Rangbazaar and enjoy a
            delightful online shopping journey.
          </p>
          <img src={userPage} />
          <p className="my-5">
            The platform's intuitive user interface, complemented by smooth
            animations and a responsive design, ensures an enjoyable shopping
            experience across various devices. Rangbazaar also emphasizes
            security, implementing JWT authentication to protect user data and
            ensure confidentiality.
          </p>
          <div className="grid lg:grid-cols-2">
            <img src={shopPage} />
            <img src={shopDetails} />
            <img src={shopping} />
            <img src={order_page} />
            <img src={ordering} />
            <img src={reviewPage} />
            <img src={contactPage} />
          </div>
          {/* little learning description */}
          <p className="my-10">
            Working on this project as a team has been an enriching experience,
            allowing us to explore various aspects of web development and learn
            valuable skills. Throughout the development process, we delved into
            different aspects of JavaScript, gaining a deeper understanding of
            its functionalities and applications.
          </p>
          <p className="my-10">
            In terms of security and user authentication, we successfully
            integrated JWT (JSON Web Tokens) into our application, ensuring that
            user data and interactions remain secure and protected. This added
            an extra layer of trust and confidence for our users when using the
            platform.
          </p>
          <p className="my-10">
            Overall, this project has been an incredible learning journey,
            allowing us to grow as developers and work together as a cohesive
            team. We are proud of the final product we have created and are
            excited to continue improving and expanding the platform in the
            future. With a user-friendly interface and a wide range of products,
            we hope that Rangbazaar will provide a seamless shopping experience
            for all our valued customers.
          </p>
          <hr className="my-5" />
          <p>
            <strong>GitHub Repository:</strong>{" "}
            <a
              className="text-blue-500 underline"
              href="https://github.com/reazs/rangbazar"
            >
              https://github.com/reazs/rangbazar
            </a>
          </p>
        </div>

        {/* extra space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default RangBazaarDetails;
