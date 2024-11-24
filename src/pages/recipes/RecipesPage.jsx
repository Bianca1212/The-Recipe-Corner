import Recipe from "./Recipe";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { useState } from "react";
import useRecipes from "../../hooks/useRecipes";
import { useTransition, animated } from "@react-spring/web"; // Importă funcțiile necesare din react-spring

const RecipesPage = () => {
  const { recipes } = useRecipes();
  const [selectedMealType, setSelectedMealType] = useState("all");

  // Filtrăm rețetele după tipul de masă
  const filterRecipesByMealType =
    selectedMealType === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.mealType.includes(selectedMealType));

  // Folosim useTransition pentru a anima rețetele la încărcare
  const transitions = useTransition(filterRecipesByMealType, {
    keys: (recipe) => recipe.id, // Folosim ID-ul pentru a identifica fiecare rețetă
    from: { opacity: 0, transform: "translateY(20px)" }, // Poziția inițială, cu transparență și ușor mai jos
    enter: { opacity: 1, transform: "translateY(0)" }, // Animație la intrare: devine complet vizibil și se mișcă în sus
    leave: { opacity: 0, transform: "translateY(20px)" }, // La ieșire: dispare și se mișcă în jos
    config: { tension: 200, friction: 25 }, // Controlăm viteza animației
    trail: 100, // Întârziere progresivă între elemente
  });

  return (
    <NavigationLayout>
      <h1 className="text-center font-dancingScript text-gray-500 md:text-lg lg:text-xl leading-relaxed mx-auto my-8 p-4 relative max-w-2xl">
        Whether you are searching for healthy, delicious recipes or need a
        personalized tool to keep track of your nutrition and wellness goals,
        <span className="text-black font-semibold"> The Recipe Corner </span>
        has you covered.
        <br />
        Our app offers a rich collection of recipes tailored to various dietary
        needs, making it easy to find meals that suit your preferences and
        support your health goals.
      </h1>

      <div className="flex justify-center gap-5 mb-6">
        <label
          htmlFor="meal-type"
          className="block text-lg font-medium font-facultyGlyphic text-gray-700 mb-2"
        >
          Select a category
        </label>
        <select
          value={selectedMealType}
          onChange={(event) => setSelectedMealType(event.target.value)}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="Beverage">Beverage</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack Dish</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-8 justify-center p-6 my-10">
        {transitions((style, recipe) => (
          <animated.div style={style} key={recipe.id}>
            {/* Folosim animated.div pentru a aplica stilurile de animație */}
            <Recipe
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
            />
          </animated.div>
        ))}
      </div>
    </NavigationLayout>
  );
};

export default RecipesPage;
