import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRecipes = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        if (id) {
          // Only fetch if id is valid
          const response = await axios.get(
            `https://dummyjson.com/recipes/${id}`
          );
          setRecipe(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getRecipe();
  }, [id]);

  const getRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes?limit=0");
      setRecipes(response.data.recipes);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return { recipes, recipe };
};

export default useRecipes;
