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

  const deleteSavedRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/savedRecipes/${id}`);
      localStorage.removeItem(`isSaved-${id}`);

      setSavedRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
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
