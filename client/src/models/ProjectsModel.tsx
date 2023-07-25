export interface ProjectInterF {
  title: string;
  description: string;
  url: string;
}
export type Projects = ProjectInterF[];
export const ProjectsModel: Projects = [
  {
    title: "CUNY Zero",
    description: `Worked as a team to design a user-friendly website that allows instructors and students to apply, 
enroll, check grades, and keep track of class schedule. The website was built using Flask, HTML, JavaScript, 
CSS and SQL database.`,
    url: "/projects/cuny-zero",
  },
  {
    title: "Recipe Heist",
    description:
      "is a web application that provides users with access to a wide variety of recipes and cooking ideas. It offers nutrition details, cooking methods, stats, food descriptions, and a user-friendly interface to enhance your culinary experience.",
    url: "/projects/recipe-heist",
  },
  {
    title: "Callback Cats",
    description:
      "We are Callback Cats, a cat-themed e-commerce platform. Our mission is to provide cat lovers around the world with the best experience with exploring cat breeds. At Callback Cats, we understand that cats are more than just pets - they are family members. That's why we only offer the most friendly user experience to meet the needs of both cats and their owners. There are numerous cat breeds, each with their unique characteristics in this website. You can either trade or adopt a cat of your liking.",
    url: "/projects/callback-cats",
  },

  {
    title: "Spam Filter",
    description: `Worked as a team to design and build an app “Spam Filter” that can detect spam.
messages, delete messages, label messages as spam or not, block spam messages or numbers, able to read and 
send messages and On-device training. Developed using flutter, Dart, Kotlin, Pytorch, NumPy, Pandas, 
Python, LSTM model, Chaquopy, NLTK, and Kaggle.`,
    url: "/projects/spam-filter",
  },
];
