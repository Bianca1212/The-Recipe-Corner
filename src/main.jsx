import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RecipesPage from "./pages/recipes/RecipesPage.jsx";
import FullRecipe from "./pages/recipes/FullRecipe.jsx";
import ReviewsPage from "./pages/reviews/ReviewsPage.jsx";
import ChristmasCalendar from "./pages/calendar/ChristmasCalendar.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import SavedRecipes from "./pages/account/SavedRecipes.jsx";
import ChristmasRecipe from "./pages/calendar/ChristmasRecipe.jsx";
import AddRecipe from "./pages/account/AddRecipe.jsx";
import FullClientRecipe from "./pages/recipes/FullClientRecipe.jsx";
import MyRecipes from "./pages/account/MyRecipes.jsx";
import MyAccount from "./pages/account/MyAccount.jsx";
import { LoggedIn } from "./login/LoggedIn.jsx";
import { Register } from "./login/Register.jsx";
import { ProtectedRoute } from "./login/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoggedIn>
        <App />
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
    path: "/myAccount",
    element: (
      <ProtectedRoute>
        <MyAccount />
      </ProtectedRoute>
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
    element: <SavedRecipes />,
  },
  {
    path: "/reviewsPage",
    element: <ReviewsPage />,
  },
  {
    path: "/myRecipes",
    element: <MyRecipes />,
  },
  { path: "/recipeForm", element: <AddRecipe /> },
]);

// Rendering the app with both GoogleOAuthProvider and RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  // <GoogleOAuthProvider clientId="192058676312-27ucgir8eaoa758qbs1f9gae2dtcq71f.apps.googleusercontent.com">

  <StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </StrictMode>

  // </GoogleOAuthProvider>
);
