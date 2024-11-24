import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigationLayout } from "../../layouts/NavigationLayout";

const ChristmasRecipe = () => {
  const [christmasRecipe, setChristmasRecipe] = useState(null);
  const { day } = useParams();

  useEffect(() => {
    const getChristmasRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/christmasRecipes?day=${day}`
        );
        console.log("Response:", response.data); // Log the response to check data
        setChristmasRecipe(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getChristmasRecipe();
  }, [day]);

  if (!christmasRecipe || !christmasRecipe.name) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-[url('/images/christmas-recipe-bg.jpg')] bg-repeat bg-cover bg-center min-h-screen bg-fixed">
        <NavigationLayout>
          <div className="flex flex-row bg-beige shadow-lg rounded-lg w-2/3 mx-auto my-10 ">
            <div className="w-1/3 bg-darkred m-0 p-2 overflow-hidden">
              <h2 className="text-3xl font-dancingScript font-bold mb-4 text-eggshell text-center">
                {christmasRecipe.name}
              </h2>
              <img
                src={christmasRecipe.imageUrl}
                alt={christmasRecipe.name}
                className="w-full h-64 object-cover mb-4"
              />
              <div className="text-lg mb-6 text-eggshell">
                <h3 className="text-2xl text-center font-bold font-dancingScript mb-2 text-eggshell">
                  Ingredients:
                </h3>
                {christmasRecipe.ingredients?.length ? (
                  christmasRecipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="font-facultyGlyphic text-sm mb-2"
                    >
                      {ingredient}
                    </li>
                  ))
                ) : (
                  <p>No ingredients available.</p>
                )}
              </div>
            </div>
            <div className="w-2/3 m-auto mx-3">
              <h3 className="text-2xl text-center font-bold font-dancingScript mb-2">
                Directions:
              </h3>
              {christmasRecipe.directions?.length ? (
                christmasRecipe.directions.map((direction, index) => (
                  <li key={index} className="font-facultyGlyphic text-sm mb-2">
                    {direction}
                  </li>
                ))
              ) : (
                <p>No directions available.</p>
              )}

              <div className="flex flex-col gap-3 font-facultyGlyphic text-sm">
                <p>
                  <span className="font-bold font-dancingScript text-xl">
                    Prep Time:
                  </span>
                  {christmasRecipe.cookTime}
                </p>
                <p>
                  <span className="font-bold font-dancingScript text-xl">
                    Servings:
                  </span>
                  {christmasRecipe.servings}
                </p>
                <p>
                  <span className="font-bold font-dancingScript text-xl">
                    Nutrution Facts (per serving):
                  </span>
                  {christmasRecipe.nutritionFacts}
                </p>
              </div>
            </div>
          </div>
        </NavigationLayout>
      </div>
    </>
  );
};

// ChristmasRecipe.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   prepTime: PropTypes.number.isRequired,
//   cookTime: PropTypes.number.isRequired,
//   servings: PropTypes.number.isRequired,
//   ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//   directions: PropTypes.arrayOf(PropTypes.string).isRequired,
//   nutritionFacts: PropTypes.string.isRequired,
// };

export default ChristmasRecipe;
