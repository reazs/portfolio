import homePage from "../../assets/images/recipeHesitDemo/home.gif";
import recipesPage from "../../assets/images/recipeHesitDemo/recipes.gif";
const RecipeHeistDetails = () => {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto">
        <div className="lg:mt-[100px] mt-[50px] mx-5 lg:text-xl font-['Quicksand']">
          <h1 className="lg:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem] font-['Poppins']">
            Recipe Heist
          </h1>
          <p className="mb-5 lg:mt-5 ">
            is a delightful web application designed to be every food lover's
            go-to destination for exploring a vast collection of mouthwatering
            recipes. Whether you're an amateur chef or a seasoned culinary
            enthusiast, Recipe Heist offers a treasure trove of diverse and
            delectable dishes to inspire your creativity in the kitchen.
          </p>
          <img src={homePage} />
          <p className="my-10">
            With Recipe Heist, you can easily search, discover, and save your
            favorite recipes from various cuisines and categories. Each recipe
            comes with detailed instructions, ingredients, cooking stats, and
            nutritional information, empowering you to cook healthy and
            delicious meals tailored to your preferences.
          </p>
          <p className="my-10">
            The user-friendly interface and intuitive navigation make Recipe
            Heist a breeze to use, ensuring a delightful culinary journey for
            both novices and experts alike. Unleash your inner chef, experiment
            with new flavors, and embark on a flavorful adventure with Recipe
            Heist! Happy cooking!
          </p>
          <img src={recipesPage} />
          <p className="my-10">
            By making this project, I have learned several valuable skills and
            gained practical experience that have enriched my knowledge and
            expertise as a web developer.
            <ul className="ml-10 mt-10 list-disc">
              <li className="my-5">
                Front-end Development: I learned how to create dynamic and
                interactive user interfaces, handle state management, and
                efficiently organize components.
              </li>
              <li className="my-5">
                I learned how to integrate external APIs, such as fetching and
                displaying data from food recipe sources, and handling
                asynchronous operations using promises and async/await.
              </li>
              <li className="my-5">
                Styling and UI Design: I improved my skills in using Tailwind
                CSS to create visually appealing and responsive designs. I
                learned how to use CSS frameworks to achieve consistent and
                aesthetic layouts.
              </li>
              <li className="my-5">
                Version Control: I gained proficiency in using Git and GitHub
                for version control, collaborating with team members, and
                managing project changes effectively.
              </li>
              <li className="my-5">
                Error Handling: I learned how to handle errors gracefully,
                implement error boundaries, and provide informative error
                messages for a better user experience.
              </li>
              <li className="my-5">
                Project Management: I developed project management skills,
                organizing tasks, setting milestones, and working in an agile
                development environment.
              </li>
            </ul>
          </p>
        </div>
        {/* extra space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default RecipeHeistDetails;
