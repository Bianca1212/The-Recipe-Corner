import { NavigationLayout } from "../../layouts/NavigationLayout";

const MyAccount = () => {
  return (
    <>
      <NavigationLayout>
        <h1>Account page!</h1>
        <h2>Only for logged in users!</h2>
      </NavigationLayout>
    </>
  );
};

export default MyAccount;
