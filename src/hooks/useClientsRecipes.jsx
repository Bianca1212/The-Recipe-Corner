import axios from "axios";
import { useEffect, useState } from "react";

const useClientsRecipes = () => {
  const [clientsRecipes, setClientsRecipes] = useState([]);
  const [name, setName] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [nutritionFacts, setNutritionFacts] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const getClientsRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/clientsRecipes");
      if (response && response.data) {
        setClientsRecipes(response.data);
      } else {
        console.error("No data found in response.");
      }
    } catch (error) {
      console.error("Error fetching clients recipes:", error);
      alert("An error occurred while fetching the recipes.");
    }
  };

  useEffect(() => {
    getClientsRecipes();
  }, []);

  const addRecipe = async () => {
    try {
      await axios.post(`http://localhost:3000/clientsRecipes`, {
        name,
        cookTime,
        servings,
        ingredients: ingredients.split("\n"),
        directions: directions.split("\n"),
        nutritionFacts: nutritionFacts.split("\n"),
        imageUrl,
      });

      setName("");
      setCookTime("");
      setServings("");
      setIngredients("");
      setDirections("");
      setNutritionFacts("");
      setImageUrl("");
    } catch (error) {
      alert("An error occurred while saving the recipe. " + error.message);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      await axios.put(
        `http://localhost:3000/clientsRecipes/${id}`,
        updatedRecipe
      );
      // setClientsRecipes((prevRecipes) =>
      //   prevRecipes.map((recipe) => (recipe.id === id ? response.data : recipe))
      // );
      await getClientsRecipes(); // Fetch the updated list of recipes
    } catch (error) {
      alert(`Error updating recipe: ${error.message}`);
    }
  };

  const deleteClientRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/clientsRecipes/${id}`);
      setClientsRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
    } catch (error) {
      alert("An error occurred while deleting the recipe. " + error.message);
    }
  };

  return {
    clientsRecipes,
    addRecipe,
    updateRecipe,
    deleteClientRecipe,
    name,
    setName,
    cookTime,
    setCookTime,
    servings,
    setServings,
    ingredients,
    setIngredients,
    directions,
    setDirections,
    nutritionFacts,
    setNutritionFacts,
    imageUrl,
    setImageUrl,
  };
};

export default useClientsRecipes;
