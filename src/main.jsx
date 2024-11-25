import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "./pages/recipes/RecipesPage.jsx";
import FullRecipe from "./pages/recipes/FullRecipe.jsx";
import ReviewsPage from "./pages/reviews/ReviewsPage.jsx";
import ChristmasCalendar from "./pages/calendar/ChristmasCalendar.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import SavedRecipes from "./pages/account/SavedRecipes.jsx";
import ChristmasRecipe from "./pages/calendar/ChristmasRecipe.jsx";
import AddRecipe from "./pages/account/AddRecipe.jsx";
import FullClientRecipe from "./pages/recipes/FullClientRecipe.jsx";
import MyRecipes from "./pages/account/MyRecipes.jsx";
import { LoggedIn } from "./login/LoggedIn.jsx";
import { Register } from "./login/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Login } from "./login/Login.jsx";
import { ProtectedRoute } from "./login/ProtectedRoute.jsx";
// Create the router
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
