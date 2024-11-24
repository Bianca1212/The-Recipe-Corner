import NavigationButton from "../../components/NavigationButton";
import PropTypes from "prop-types";

const ClientRecipe = ({ id, name, imageUrl, deleteClientRecipe }) => {
  const handleDelete = async () => {
    await deleteClientRecipe(id);
  };

  return (
    <>
      <>
        <div className="bg-linen rounded-lg flex justify-center p-8">
          <div className="bg-white max-w-md w-full shadow-lg rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={`${name} image`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-center text-xl font-bold font-facultyGlyphic text-gray-800 mb-4">
                {name}
              </h2>
              <div className="flex justify-around items-center">
                <NavigationButton path={`/clientsRecipes/${id}`}>
                  <button className="p-4 text-blue-500 underline transform transition-all duration-200 hover:scale-110">
                    See more
                  </button>
                </NavigationButton>
                <button
                  onClick={handleDelete}
                  className="p-4 transform transition-transform duration-200 hover:scale-125"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="text-blue-700 hover:text-red-600"
                  >
                    <path d="M20.37 8.91l-1 1.73-12.13-7 1-1.73 3.04 1.75 1.36-.37 4.33 2.5.37 1.37 3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default ClientRecipe;

ClientRecipe.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  deleteClientRecipe: PropTypes.func,
};
