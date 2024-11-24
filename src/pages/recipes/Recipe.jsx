import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonSave from "../../components/ButtonSave";
import NavigationButton from "../../components/NavigationButton";
import axios from "axios";
import { toast } from "react-toastify";

const Recipe = ({ id, name, image }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Verifică dacă rețeta a fost deja salvată la încărcarea componentei
    const savedState = localStorage.getItem(`isSaved-${id}`);
    if (savedState) {
      setIsSaved(JSON.parse(savedState));
    }
  }, [id]);

  const dataToSave = {
    recipeId: id,
    name,
    image,
  };

  const handleSaveRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:3000/savedRecipes");
      const savedRecipes = response.data;
      const isRecipeAlreadySaved = savedRecipes.some(
        (recipe) => recipe.recipeId === dataToSave.recipeId
      );

      if (isRecipeAlreadySaved) {
        toast.error("Recipe already saved!");
      } else {
        await axios.post("http://localhost:3000/savedRecipes", dataToSave);
        toast.success("The recipe was successfully saved!");
        setIsSaved(true);
        localStorage.setItem(`isSaved-${id}`, JSON.stringify(true));
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
            <ButtonSave isSaved={isSaved} onClick={handleSaveRecipe} />
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
