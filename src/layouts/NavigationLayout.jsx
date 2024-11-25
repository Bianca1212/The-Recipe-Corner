import { useState } from "react";
import NavigationButton from "../components/NavigationButton";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";

export const NavigationLayout = ({ children }) => {
  const { user, logout } = useAuth(); // Obținem userul din contextul de autentificare

  const [isOpen, setIsOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false); // Adăugăm un state pentru meniul de cont

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="py-5 flex flex-row items-center justify-around">
        <img
          src="\images\logo.png" // Verifică dacă calea este corectă
          alt="Logo"
          className="sm:max-w-xs md:max-w-sm lg:w-25 h-20 border-2 border-white ml-2" // Setează dimensiunea la auto pentru a păstra proporțiile originale
        />

        {/* Navbar container with rounded corners */}
        <div className="px-8 py-4 flex justify-around items-end max-w-4xl sm:w-full lg:w-1/2 h-16 relative fixed top-0 left-0 right-0 z-10">
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            {/* Linkuri disponibile doar pentru utilizatori logați */}
            {user ? (
              <>
                <NavigationButton
                  path="/home"
                  className="font-facultyGlyphic font-bold"
                >
                  Home
                </NavigationButton>
                <NavigationButton
                  path="/recipes"
                  className="font-facultyGlyphic font-bold"
                >
                  Explore
                </NavigationButton>
                <NavigationButton
                  path="/calendar"
                  className="font-facultyGlyphic font-bold"
                >
                  Christmas Calendar
                </NavigationButton>
                <div className="relative group">
                  <div className="flex flex-row">
                    <NavigationButton onClick={toggleAccountMenu}>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 20"
                        height="2em"
                        width="2em"
                      >
                        <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </NavigationButton>
                    <ul className="justify-self-start">
                      {user && <li>{user.email}</li>}
                    </ul>
                  </div>
                  {isAccountMenuOpen && (
                    <div className="absolute bg-white text-black p-4 gap-2 mt-2 shadow-lg rounded flex flex-col w-40">
                      <NavigationButton
                        path="/savedRecipes"
                        className="block px-4 py-2 cursor-pointer"
                      >
                        Favorites
                      </NavigationButton>
                      <NavigationButton
                        path="/recipeForm"
                        className="block px-4 py-2 cursor-pointer"
                      >
                        Add Recipe
                      </NavigationButton>
                      <NavigationButton
                        path="/myRecipes"
                        className="block px-4 py-2 cursor-pointer"
                      >
                        My Recipes
                      </NavigationButton>
                      <NavigationButton
                        path="/home"
                        className="block px-4 py-2 cursor-pointer"
                        onClick={logout}
                      >
                        Logout
                      </NavigationButton>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Linkuri disponibile pentru utilizatori neautentificați
              <>
                <NavigationButton
                  path="/home"
                  className="font-facultyGlyphic font-bold"
                >
                  Home
                </NavigationButton>
                <NavigationButton
                  path="/recipes"
                  className="font-facultyGlyphic font-bold"
                >
                  Explore
                </NavigationButton>
                <NavigationButton
                  path="/calendar"
                  className="font-facultyGlyphic font-bold"
                >
                  Christmas Calendar
                </NavigationButton>
                <NavigationButton
                  path="/login"
                  className="font-facultyGlyphic font-bold"
                >
                  Login
                </NavigationButton>
                <NavigationButton
                  path="/register"
                  className="font-facultyGlyphic font-bold"
                >
                  Register
                </NavigationButton>
              </>
            )}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black-700 focus:outline-none"
            >
              <svg fill="none" viewBox="0 0 15 15" height="3em" width="3em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.5 3.1a.4.4 0 100 .8h7a.4.4 0 000-.8h-7zm0 2a.4.4 0 100 .8h7a.4.4 0 000-.8h-7zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 010 .8h-7a.4.4 0 01-.4-.4zm.4 1.6a.4.4 0 100 .8h7a.4.4 0 000-.8h-7zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 010 .8h-7a.4.4 0 01-.4-.4zM2.5 9.25L5 6H0l2.5 3.25z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="top-full left-0 bg-white mt-2 rounded-lg shadow-lg p-4 w-full z-50">
            <ul className="flex flex-col items-center">
              {user ? (
                <>
                  <NavigationButton
                    path="/home"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Home
                  </NavigationButton>
                  <NavigationButton
                    path="/recipes"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Explore
                  </NavigationButton>
                  <NavigationButton
                    path="/calendar"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Christmas Calendar
                  </NavigationButton>
                </>
              ) : (
                <>
                  <NavigationButton
                    path="/home"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Home
                  </NavigationButton>
                  <NavigationButton
                    path="/recipes"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Explore
                  </NavigationButton>
                  <NavigationButton
                    path="/calendar"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Christmas Calendar
                  </NavigationButton>
                  <NavigationButton
                    path="/login"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Login
                  </NavigationButton>
                  <NavigationButton
                    path="/register"
                    className="inline-block px-6 py-3 rounded-full text-black font-semibold hover:shadow-lg"
                  >
                    Register
                  </NavigationButton>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      <div>{children}</div>
    </>
  );
};

NavigationButton.propTypes = {
  children: PropTypes.object,
};
