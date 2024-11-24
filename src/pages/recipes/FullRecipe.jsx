import { NavigationLayout } from "../../layouts/NavigationLayout";
import useRecipes from "../../hooks/useRecipes";
import NavigationButton from "../../components/NavigationButton";
import { useState } from "react";
import RecipeReviewModal from "../reviews/RecipeReviewModal";
import useReviews from "../../hooks/useReviews";
import ReviewsSection from "../reviews/ReviewSection";

const FullRecipe = () => {
  const { recipe } = useRecipes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { reviews, getReviews } = useReviews();

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
      <NavigationLayout>
        <div className="bg-beige p-6 shadow-lg rounded-lg max-w-2xl mx-auto my-10">
          <h2 className="text-3xl font-bold font-dancingScript mb-4">
            {recipe.name}
          </h2>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover mb-4"
          />
          <div className="text-lg mb-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold font-dancingScript text-black mb-2">
                Ingredients:
              </h3>
              <p className="text-gray-800 text-sm font-facultyGlyphic leading-relaxed">
                {recipe.ingredients.join(", ")}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold font-dancingScript text-black mb-2">
                Directions:
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed font-facultyGlyphic">
                {recipe.instructions}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p className="text-2xl text-black font-dancingScript">
                Prep Time:
                <span className="text-sm font-facultyGlyphic">
                  {recipe.prepTimeMinutes} minutes
                </span>
              </p>
              <p className="text-2xl text-black font-dancingScript">
                Calories:
                <span className="text-sm font-facultyGlyphic">
                  {recipe.caloriesPerServing}
                </span>
              </p>
              <p className="text-2xl text-black font-dancingScript">
                Meal Type:
                <span className="text-sm font-facultyGlyphic">
                  {recipe.mealType}
                </span>
              </p>
              <p className="text-2xl text-black font-dancingScript">
                Difficulty:
                <span className="text-sm font-facultyGlyphic">
                  {recipe.difficulty}
                </span>
              </p>
            </div>
            <div className="mt-6 text-center flex justify-center">
              <NavigationButton
                onClick={openModal}
                className="font-dancingScript font-bold text-3xl mt-5"
              >
                Add review
              </NavigationButton>
            </div>
          </div>
        </div>
        <ReviewsSection reviews={reviews} />
      </NavigationLayout>
      <RecipeReviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        recipe={recipe}
        getReviews={getReviews}
      />
    </>
  );
};

export default FullRecipe;
