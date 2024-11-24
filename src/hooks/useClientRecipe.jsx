import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useClientRecipe = () => {
  const [clientRecipe, setClientRecipe] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:3000/clientsRecipes/${id}`
          );
          setClientRecipe(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getRecipe();
  }, [id]);

  return { clientRecipe };
};

export default useClientRecipe;
