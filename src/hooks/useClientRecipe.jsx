import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useClientRecipe = () => {
  const [clientRecipe, setClientRecipe] = useState("");
  const { id } = useParams();

  const getRecipe = async () => {
    try {
      if (id) {
        const response = await axios.get(
          `http://localhost:3000/clientsRecipes/${id}`
        );
        console.log("Updated recipe:", response.data); // Debugging line

        setClientRecipe(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  return { clientRecipe, setClientRecipe, getRecipe };
};

export default useClientRecipe;
