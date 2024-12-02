import { NavigationLayout } from "../../layouts/NavigationLayout";
import useClientsRecipes from "../../hooks/useClientsRecipes";
import { useState } from "react";

const AddRecipe = () => {
  const {
    nameRef,
    cookTimeRef,
    servingsRef,
    nutritionFactsRef,
    imageUrlRef,
    ingredientsRef,
    directionsRef,
    addRecipe,
  } = useClientsRecipes();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!nameRef.current.value) {
      newErrors.name = "Recipe name is required!";
    }

    if (!cookTimeRef.current.value) {
      newErrors.cookTime = "Cooking time is required!";
    }
    if (!servingsRef.current.value || servingsRef.current.value <= 0) {
      newErrors.servings = "Servings should be a valid number greater than 0!";
    }

    if (!nutritionFactsRef.current.value) {
      newErrors.nutritionFacts = "Nutrition facts are required!";
    }

    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (
      !imageUrlRef.current.value &&
      !urlPattern.test(imageUrlRef.current.value)
    ) {
      newErrors.imageUrl = "Image URL not valid!";
    }

    if (!ingredientsRef.current.value) {
      newErrors.ingredients = "Ingredients are required!";
    }

    if (!directionsRef.current.value) {
      newErrors.directions = "Directions are required!";
    }

    return newErrors;
  };

  const onSubmitRecipe = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      await addRecipe();
    }
  };

  return (
    <>
      <NavigationLayout>
        <div className="bg-[url('/images/form-bg.png')] bg-repeat bg-cover bg-center min-h-screen bg-fixed flex flex-col justify-center p-1">
          <h2 className="text-center text-3xl font-bold font-dancingScript mb-6">
            Add a New Recipe
          </h2>

          <h4 className="text-center font-semibold font-dancingScript text-2xl space-y-5 text-gray-700">
            Welcome to{" "}
            <span className="text-black font-bold">the Recipe Manager!</span>{" "}
            <br />
            We are excited to help you share your culinary creations with the
            world. <br />
            Use the form below to submit your new recipe.
          </h4>
          <form
            onSubmit={onSubmitRecipe}
            className="flex flex-col justify-center items-center bg-linen mx-auto my-10 p-5 gap-6 border rounded-lg shadow-lg w-full max-w-lg transform hover:scale-105 transition-all duration-300"
          >
            <label>Recipe name</label>
            <input ref={nameRef} type="text" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <label>Cooking time</label>
            <input ref={cookTimeRef} type="text" />
            {errors.cookTime && (
              <p className="text-red-500 text-sm">{errors.cookTime}</p>
            )}
            <label>Servings number</label>
            <input ref={servingsRef} type="number" />
            {errors.servings && (
              <p className="text-red-500 text-sm">{errors.servings}</p>
            )}
            <label>Nutrition Facts</label>
            <input ref={nutritionFactsRef} type="text" />
            {errors.nutritionFacts && (
              <p className="text-red-500 text-sm">{errors.nutritionFacts}</p>
            )}
            <label>Image URL</label>
            <input ref={imageUrlRef} type="text" />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm">{errors.imageUrl}</p>
            )}
            <label>Ingredients</label>
            <textarea ref={ingredientsRef} rows="5" />
            {errors.ingredients && (
              <p className="text-red-500 text-sm">{errors.ingredients}</p>
            )}
            <label>Directions</label>
            <textarea ref={directionsRef} rows="5" />
            {errors.directions && (
              <p className="text-red-500 text-sm">{errors.directions}</p>
            )}

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-black text-white font-facultyGlyphic rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Add
            </button>
          </form>
        </div>
      </NavigationLayout>
    </>
  );
};

export default AddRecipe;
