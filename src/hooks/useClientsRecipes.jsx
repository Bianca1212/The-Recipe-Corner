import axios from "axios";
import { useEffect, useState, useRef } from "react";

const useClientsRecipes = () => {
  const [clientsRecipes, setClientsRecipes] = useState([]);
  const nameRef = useRef("");
  const cookTimeRef = useRef("");
  const servingsRef = useRef("");
  const ingredientsRef = useRef("");
  const directionsRef = useRef("");
  const nutritionFactsRef = useRef("");
  const imageUrlRef = useRef("");
  const [updatedRecipe, setUpdatedRecipe] = useState({
    name: nameRef.current,
    cookTime: cookTimeRef.current,
    servings: servingsRef.current,
    ingredients: ingredientsRef.current,
    directions: directionsRef.current,
    nutritionFacts: nutritionFactsRef.current,
    imageUrl: imageUrlRef.current,
  });

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
        name: nameRef.current.value,
        cookTime: cookTimeRef.current.value,
        servings: servingsRef.current.value,
        ingredients: ingredientsRef.current.value.split("\n"),
        directions: directionsRef.current.value.split("\n"),
        nutritionFacts: nutritionFactsRef.current.value.split("\n"),
        imageUrl: imageUrlRef.current.value,
      });

      nameRef.current.value = "";
      cookTimeRef.current.value = "";
      servingsRef.current.value = "";
      ingredientsRef.current.value = "";
      directionsRef.current.value = "";
      nutritionFactsRef.current.value = "";
      imageUrlRef.current.value = "";
    } catch (error) {
      alert("An error occurred while saving the recipe. " + error.message);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/clientsRecipes/${id}`,
        updatedRecipe
      );
      setClientsRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.id === id ? response.data : recipe))
      );
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
    setClientsRecipes,
    addRecipe,
    updateRecipe,
    updatedRecipe,
    setUpdatedRecipe,
    deleteClientRecipe,
    nameRef,
    cookTimeRef,
    servingsRef,
    ingredientsRef,
    directionsRef,
    nutritionFactsRef,
    imageUrlRef,
  };
};

export default useClientsRecipes;
