import { Link } from "react-router-dom";
import { NavigationLayout } from "../layouts/NavigationLayout";
import RandomRecipeFeature from "./recipes/RandomRecipeFeature";
import RecipeCounter from "./recipes/RecipeCounter";

const Home = () => {
  return (
    <>
      <NavigationLayout>
        <div className="flex flex-col md:flex-row h-screen ">
          <div className="relative w-full md:w-1/2 flex items-center justify-center text-white text-center p-8 md:px-16 md:py-20 space-y-6 bg-black">
            <div className="absolute inset-0 z-0" />
            <div className="relative z-10">
              <h1 className="text-6xl md:text-5xl font-extrabold font-dancingScript tracking-tight leading-snug text-transparent bg-clip-text text-white">
                The Recipe Corner
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-white mt-10">
                <i>Discover. Cook. Enjoy.</i>
              </p>
              <button className="mt-8 px-8 py-4 text-lg bg-white text-black font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
                <Link to={"/recipes"}>See recipes</Link>
              </button>
              <RecipeCounter />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 flex items-center justify-center bg-offwhite">
            <div className="inset-0">
              <RandomRecipeFeature />
            </div>
          </div>
        </div>
      </NavigationLayout>
    </>
  );
};

export default Home;
