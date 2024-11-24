import useClientsRecipes from "../../hooks/useClientsRecipes";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import ClientRecipe from "../recipes/ClientRecipe";

const MyRecipes = () => {
  const { clientsRecipes, deleteClientRecipe } = useClientsRecipes();

  return (
    <>
      <NavigationLayout>
        <h1 className="text-center text-4xl font-bold font-dancingScript p-5">
          My recipes
        </h1>
        <div className="flex flex-wrap justify-center gap-10 p-6 my-0 mx-5">
          {clientsRecipes &&
            clientsRecipes.map((clientRecipe) => {
              return (
                <ClientRecipe
                  key={clientRecipe.id}
                  id={clientRecipe.id}
                  name={clientRecipe.name}
                  imageUrl={clientRecipe.imageUrl}
                  deleteClientRecipe={deleteClientRecipe}
                />
              );
            })}
        </div>
      </NavigationLayout>
    </>
  );
};
export default MyRecipes;
