import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SaveButton from "../../components/SaveButton";
import NavigationButton from "../../components/NavigationButton";
import axios from "axios";
import { toast } from "react-toastify";

const Recipe = ({ id, name, image }) => {
  const [isSaved, setIsSaved] = useState(false);

  const dataToSave = {
    recipeId: id,
    name,
    image,
  };

  const checkIfRecipeIsSaved = async () => {
    try {
      // Obținem rețetele salvate
      const savedResponse = await axios.get(
        "http://localhost:3000/savedRecipes"
      );
      const savedRecipes = savedResponse.data;
      // Verificăm dacă rețeta există în savedRecipes
      const isRecipeSaved = savedRecipes.some(
        (recipe) => recipe.recipeId === dataToSave.recipeId
      );
      setIsSaved(isRecipeSaved);
    } catch (error) {
      alert("Error checking saved recipes: " + error.message);
    }
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      const recipes = response.data; // Asumăm că răspunsul conține lista de rețete
      // Verificăm dacă rețeta cu recipeId există în lista de rețete
      const isRecipeInAPI = recipes.some(
        (recipe) => recipe.id === dataToSave.recipeId
      );
      if (!isRecipeInAPI) {
        toast.error("Recipe not found in the API.");
      }
    } catch (error) {
      toast.error("Error fetching recipes: " + error.message);
    }
  };

  useEffect(() => {
    // La montarea componentei, verificăm dacă rețeta este salvată
    checkIfRecipeIsSaved();
    // Verificăm dacă rețeta există pe API-ul extern
    fetchRecipes();
  }, [id]);

  const handleSaveRecipe = async () => {
    try {
      if (isSaved) {
        alert("Recipe already saved!");
      } else {
        await axios.post("http://localhost:3000/savedRecipes", dataToSave);
        setIsSaved(true);
      }
    } catch (error) {
      toast.error("An error occurred:: " + error.message);
    }
  };

  return (
    <div className="bg-linen rounded-lg flex justify-center p-6">
      <div className="bg-white max-w-md w-full shadow-lg rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold font-facultyGlyphic text-gray-800 mb-4">
            {name}
          </h2>
          <div className="flex justify-between">
            <NavigationButton path={`/recipe/${id}`}>
              <button className="text-blue-500 font-semibold underline mt-4">
                See more
              </button>
            </NavigationButton>
            <SaveButton isSaved={isSaved} onClick={handleSaveRecipe} />
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Recipe;
