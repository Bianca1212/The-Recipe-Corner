import NavigationButton from "../../components/NavigationButton";
import useSavedRecipes from "../../hooks/useSavedRecipes";
import { NavigationLayout } from "../../layouts/NavigationLayout";

const SavedRecipes = () => {
  const { savedRecipes, deleteSavedRecipe } = useSavedRecipes();

  return (
    <>
      <NavigationLayout>
        <div>
          <h1 className="text-center text-4xl font-bold font-dancingScript">
            Saved recipes
          </h1>
          <div className="flex flex-wrap gap-20 justify-start p-6 m-10">
            {savedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <h3 className="font-semibold text-xl mt-4 p-5 text-center transition-colors duration-300 hover:text-blue-500">
                  {recipe.name}
                </h3>
                <div className="flex justify-between items-center m-2 p-2">
                  <NavigationButton path={`/recipe/${recipe.recipeId}`}>
                    <button className="text-blue-500 underline transform transition-all duration-200 hover:scale-110">
                      See more
                    </button>
                  </NavigationButton>
                  <button
                    onClick={() => deleteSavedRecipe(recipe.id)}
                    className="transform transition-transform duration-200 hover:scale-125"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      className="text-blue-700 hover:text-red-600"
                    >
                      <path d="M20.37 8.91l-1 1.73-12.13-7 1-1.73 3.04 1.75 1.36-.37 4.33 2.5.37 1.37 3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </NavigationLayout>
    </>
  );
};

export default SavedRecipes;
