import axios from "axios";
import { useEffect, useState } from "react";

const useSavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const getSavedRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/savedRecipes`);
      setSavedRecipes(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const deleteSavedRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3000/savedRecipes/${recipeId}`);
      localStorage.removeItem(`isSaved-${recipeId}`);

      setSavedRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== recipeId)
      );
    } catch (error) {
      alert("An error occurred while deleting the recipe. " + error.message);
    }
  };

  useEffect(() => {
    getSavedRecipes();
  }, []);

  return { savedRecipes, deleteSavedRecipe };
};

export default useSavedRecipes;
