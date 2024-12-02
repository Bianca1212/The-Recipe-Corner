import { useState } from "react";
import useClientsRecipes from "../../hooks/useClientsRecipes";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import useClientRecipe from "../../hooks/useClientRecipe";

const FullClientRecipe = () => {
  const { clientRecipe, getRecipe } = useClientRecipe();
  const { updateRecipe, updatedRecipe, setUpdatedRecipe } = useClientsRecipes();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setUpdatedRecipe(clientRecipe); // preîncarcă rețeta pentru editare
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    await updateRecipe(clientRecipe.id, updatedRecipe);
    getRecipe();
    closeModal();
  };

  return (
    <>
      <NavigationLayout>
        <div className="flex flex-row bg-beige p-6 shadow-lg rounded-lg w-2/3 mx-auto my-10 ">
          <div className="w-1/3">
            <h2 className="text-3xl text-center font-dancingScript font-bold mb-4">
              {clientRecipe.name}
            </h2>
            <img
              src={clientRecipe.imageUrl}
              alt={clientRecipe.name}
              className="w-full h-64 object-cover mb-4"
            />
            <div className="text-lg text-center mb-6 border-r-2 border-yellow-700">
              <h3 className="text-2xl text-center font-bold font-dancingScript mb-2">
                Ingredients:
              </h3>
              {clientRecipe.ingredients?.length ? (
                clientRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="font-facultyGlyphic text-sm mb-2">
                    {ingredient}
                  </li>
                ))
              ) : (
                <p>No ingredients available.</p>
              )}

              <div className="flex flex-col gap-3 font-facultyGlyphic text-sm">
                <p>
                  <span className="text-2xl text-center font-bold font-dancingScript mb-2">
                    Prep Time:
                  </span>
                  {clientRecipe.cookTime}
                </p>
                <p>
                  <span className="text-2xl text-center font-bold font-dancingScript mb-2">
                    Servings:
                  </span>
                  {clientRecipe.servings}
                </p>
                <p className="text-2xl text-center font-bold font-dancingScript mb-2">
                  Nutrition Facts:
                </p>
                {clientRecipe.nutritionFacts?.length ? (
                  clientRecipe.nutritionFacts.map((fact, index) => (
                    <li
                      key={index}
                      className="font-facultyGlyphic text-sm mb-2"
                    >
                      {fact}
                    </li>
                  ))
                ) : (
                  <p>No nutrition facts available.</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-2/3 m-auto mx-3">
            <h3 className="text-2xl text-center font-bold font-dancingScript mb-2">
              Directions:
            </h3>

            {clientRecipe.directions?.length ? (
              clientRecipe.directions.map((direction, index) => (
                <li key={index} className="font-facultyGlyphic text-sm mb-2">
                  {direction}
                </li>
              ))
            ) : (
              <p>No ingredients available.</p>
            )}

            <button
              onClick={openModal}
              className="p-4 transform transition-transform duration-200 hover:scale-125 block mt-5 mx-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2.5em"
                width="2.5em"
                className="text-green-700 hover:text-red-600"
              >
                <path d="M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>
      </NavigationLayout>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-1/2 relative">
            <button className="absolute top-2 right-2" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-xl font-semibold">Edit Recipe</h2>
            <form onSubmit={handleUpdateRecipe}>
              <InputGroup
                type="text"
                value={updatedRecipe.name}
                handleChange={(e) =>
                  setUpdatedRecipe({ ...updatedRecipe, name: e.target.value })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Recipe name"
              />
              <InputGroup
                type="text"
                value={updatedRecipe.cookTime}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    cookTime: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Cooking time"
              />
              <InputGroup
                type="number"
                value={updatedRecipe.servings}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    servings: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Servings"
              />
              <TextAreaGroup
                value={updatedRecipe.ingredients}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    ingredients: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Ingredients"
              />
              <TextAreaGroup
                value={updatedRecipe.directions}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    directions: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Directions"
              />
              <TextAreaGroup
                value={updatedRecipe.nutritionFacts}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    nutritionFacts: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Nutrition Facts"
              />
              <InputGroup
                type="text"
                value={updatedRecipe.imageUrl}
                handleChange={(e) =>
                  setUpdatedRecipe({
                    ...updatedRecipe,
                    imageUrl: e.target.value,
                  })
                }
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                placeholder="Image URL"
              />
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black p-2 rounded ml-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FullClientRecipe;
