import { useEffect, useState } from "react";
import useGetRecipes from "../../hooks/useRecipes";
import NavigationButton from "../../components/NavigationButton";

const RandomRecipeFeature = () => {
  const { recipes } = useGetRecipes();
  const [recipeOfTheDay, setRecipeOfTheDay] = useState(null);
  const interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const fetchRecipeOfTheDay = (storedRecipe, storedTime) => {
    const now = Date.now();
    if (storedRecipe && storedTime && now - storedTime < interval) {
      console.log("Using stored recipe:", storedRecipe);
      console.log("Using stored time:", storedTime);

      // Use stored recipes if within the interval
      setRecipeOfTheDay(storedRecipe);
      if (!isRecipeAlreadyDisplayed(storedRecipe)) {
        // Folosește rețeta stocată dacă nu este deja afișată
        setRecipeOfTheDay(storedRecipe);
        // console.log(storedRecipe);
      }
    } else if (recipes.length > 0) {
      console.log(recipes);
      // Only run this if there are recipes
      const newRecipeOfTheDay = getRandomRecipe(recipes, 1);
      console.log("New recipe of the day:", newRecipeOfTheDay);
      setRecipeOfTheDay(newRecipeOfTheDay);
      // Store the new featured recipes and the current time
      localStorage.setItem("featuredRecipe", JSON.stringify(newRecipeOfTheDay));
      localStorage.setItem("featuredTime", now.toString());
    }
  };

  const isRecipeAlreadyDisplayed = (storedRecipe) => {
    const currentRecipe = getRecipe();
    return (
      storedRecipe && currentRecipe && storedRecipe.id === currentRecipe.id
    );
  };

  const getRecipe = () => {
    try {
      const storedRecipe = localStorage.getItem("featuredRecipe");
      return JSON.parse(storedRecipe);
    } catch (error) {
      console.error("Error parsing stored recipe:", error);
      return null;
    }
  };

  const getRandomRecipe = (recipes, count) => {
    // diferența dintre 0.5 și valoarea generată de Math.random() va produce o valoare aleatorie negativă, pozitivă sau zero,
    // care este utilizată pentru a decide ordinea elementelor.
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    // console.log("Fetched recipes:", recipes); // Log the recipes array
    const storedRecipe = JSON.parse(localStorage.getItem("featuredRecipe"));
    const storedTime = JSON.parse(localStorage.getItem("featuredTime"));
    // console.log(storedRecipe);
    if (recipes.length > 0) {
      // Only proceed if recipes are available
      fetchRecipeOfTheDay(storedRecipe, storedTime);
    }
  }, [recipes]); // Trigger effect when recipes change

  return (
    <div>
      {Array.isArray(recipeOfTheDay) ? (
        recipeOfTheDay.length > 0 && (
          <div
            key={recipeOfTheDay[0].id}
            className="border p-4 shadow-md text-center"
          >
            <h1 className="mb-4 text-gray-900 text-2xl text-center font-facultyGlyphic font-semibold mt-5 p-auto Recipe of the day">
              Daily Recipe
            </h1>
            <NavigationButton path={`/recipe/${recipeOfTheDay[0].id}`}>
              <button className="text-xl text-gray-700 font-facultyGlyphic hover:scale-110 mb-5 ">
                {recipeOfTheDay[0].name}
              </button>
            </NavigationButton>
            <img
              src={recipeOfTheDay[0].image}
              alt={recipeOfTheDay[0].name}
              className="rounded-md w-9/12 h-17 object-cover transform transition-transform duration-300 hover:scale-110 my-2 mx-auto"
            />
          </div>
        )
      ) : (
        <p>No featured recipes available.</p>
      )}
    </div>
  );
};

export default RandomRecipeFeature;
