import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useChristmasRecipes = () => {
  const [christmasRecipes, setChristmasRecipes] = useState([]);
  const { id } = useParams();
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [nutritionFacts, setNutritionFacts] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const getChristmasRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/christmasRecipes`
      );

      setChristmasRecipes(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getChristmasRecipes();
  }, []);

  const addChristmasRecipe = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/christmasRecipes`,
        {
          day,
          name,
          cookTime,
          servings,
          ingredients: ingredients.split("\n"),
          directions: directions.split("\n"),
          nutritionFacts: nutritionFacts.split("\n"),
          imageUrl,
        }
      );
      console.log(response.data);
      setDay(() => "");
      setName(() => "");
      setCookTime(() => "");
      setServings(() => "");
      setIngredients(() => "");
      setDirections(() => "");
      setNutritionFacts(() => "");
      setImageUrl(() => "");
    } catch (error) {
      alert(error);
    }
  };

  return {
    christmasRecipes,
    addChristmasRecipe,
    day,
    setDay,
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

export default useChristmasRecipes;
