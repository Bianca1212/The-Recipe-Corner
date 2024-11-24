import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import useChristmasRecipes from "../../hooks/useChristmasRecipes";

const AddChristmasRecipe = () => {
  const {
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
    addChristmasRecipe,
  } = useChristmasRecipes();

  const onSubmitRecipe = async (event) => {
    event.preventDefault();
    await addChristmasRecipe();
  };

  return (
    <>
      <form
        onSubmit={onSubmitRecipe}
        className="flex flex-col justify-center items-center mx-auto mt-10 p-6 gap-3 bg-indigo-200 border border-gray-300 shadow-2xl rounded-lg w-full max-w-lg transform hover:translate-y-1 hover:scale-105 transition-all duration-300"
      >
        <InputGroup
          label="Day"
          type="number"
          placeholder="Day"
          value={day}
          handleChange={(event) => setDay(event.target.value)}
        />
        <InputGroup
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          handleChange={(event) => setName(event.target.value)}
        />
        <InputGroup
          label="Cooking time"
          type="text"
          placeholder="Cook time"
          value={cookTime}
          handleChange={(event) => setCookTime(event.target.value)}
        />
        <InputGroup
          label="Servings number"
          type="number"
          placeholder="Servings"
          value={servings}
          handleChange={(event) => setServings(event.target.value)}
        />
        <InputGroup
          label="Nutrition facts"
          type="text"
          placeholder="Nutrition facts"
          value={nutritionFacts}
          handleChange={(event) => setNutritionFacts(event.target.value)}
        />
        <InputGroup
          label="Image URL"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          handleChange={(event) => setImageUrl(event.target.value)}
        />
        <TextAreaGroup
          name="Ingredients"
          rows="5"
          placeholder="Ingredients"
          value={ingredients}
          handleChange={(event) => setIngredients(event.target.value)}
        />
        <TextAreaGroup
          name="Directions"
          rows="5"
          placeholder="Directions"
          value={directions}
          handleChange={(event) => setDirections(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddChristmasRecipe;
