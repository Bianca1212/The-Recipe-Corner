import InputGroup from "../../components/InputGroup";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import TextAreaGroup from "../../components/TextAreaGroup";
import useClientsRecipes from "../../hooks/useClientsRecipes";

const AddRecipe = () => {
  const {
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
    addRecipe,
  } = useClientsRecipes();

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      cookTime.trim() !== "" &&
      servings > 0 &&
      ingredients.trim() !== "" &&
      directions.trim() !== "" &&
      nutritionFacts.trim() !== "" &&
      imageUrl.trim() !== ""
    );
  };

  const onSubmitRecipe = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all fields in the form.");
      return;
    }
    await addRecipe();
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
            <InputGroup
              label="Recipe name"
              // name="name"
              type="text"
              value={name}
              handleChange={(event) => setName(event.target.value)}
            />
            <InputGroup
              label="Cooking time"
              // name="cookTime"
              type="text"
              value={cookTime}
              handleChange={(event) => setCookTime(event.target.value)}
            />

            <InputGroup
              label="Servings number"
              // name="servings"
              type="number"
              value={servings}
              handleChange={(event) => setServings(event.target.value)}
            />
            <InputGroup
              label="Nutrition Facts"
              // name="nutritionFacts"
              type="text"
              value={nutritionFacts}
              handleChange={(event) => setNutritionFacts(event.target.value)}
            />
            <InputGroup
              label="Image URL"
              // name="imageUrl"
              type="text"
              value={imageUrl}
              handleChange={(event) => setImageUrl(event.target.value)}
            />

            <TextAreaGroup
              name="Ingredients"
              value={ingredients}
              rows="5"
              handleChange={(event) => setIngredients(event.target.value)}
            />

            <TextAreaGroup
              name="Directions"
              value={directions}
              rows="5"
              handleChange={(event) => setDirections(event.target.value)}
            />

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
