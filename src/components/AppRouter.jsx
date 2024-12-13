import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoggedIn } from "../login/LoggedIn";
import { Login } from "../login/Login";
import Home from "../pages/home/Home";
import { Register } from "../login/Register";
import RecipesPage from "../pages/recipes/RecipesPage";
import FullRecipe from "../pages/recipes/FullRecipe";
import FullClientRecipe from "../pages/recipes/FullClientRecipe";
import ChristmasCalendar from "../pages/calendar/ChristmasCalendar";
import ChristmasRecipe from "../pages/calendar/ChristmasRecipe";
import { ProtectedRoute } from "../login/ProtectedRoute";
import SavedRecipes from "../pages/account/SavedRecipes";
import ReviewsPage from "../pages/reviews/ReviewsPage";
import MyRecipes from "../pages/account/MyRecipes";
import AddRecipe from "../pages/account/AddRecipe";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <LoggedIn>
          <Login />
        </LoggedIn>
      ),
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/register",
      element: (
        <LoggedIn>
          <Register />
        </LoggedIn>
      ),
    },
    {
      path: "/recipes",
      element: <RecipesPage />,
    },
    {
      path: "/recipe/:id",
      element: <FullRecipe />,
    },
    {
      path: "/clientsRecipes/:id",
      element: <FullClientRecipe />,
    },
    {
      path: "/calendar",
      element: <ChristmasCalendar />,
    },
    {
      path: "/christmasRecipe/:day",
      element: <ChristmasRecipe />,
    },
    {
      path: "/savedRecipes",
      element: (
        <ProtectedRoute>
          <SavedRecipes />
        </ProtectedRoute>
      ),
    },
    {
      path: "/reviewsPage",
      element: <ReviewsPage />,
    },
    {
      path: "/myRecipes",
      element: (
        <ProtectedRoute>
          <MyRecipes />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recipeForm",
      element: (
        <ProtectedRoute>
          <AddRecipe />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
