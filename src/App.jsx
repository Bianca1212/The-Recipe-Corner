import InputGroup from "./components/InputGroup";
import { useAuth } from "./context/AuthContext";
import { useForm } from "./hooks/useForm";
import { NavigationLayout } from "./layouts/NavigationLayout";

function App() {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(values);
  };

  return (
    <>
      <NavigationLayout>
        <div className="flex justify-center items-center min-h-screen relative">
          <div className="relative w-2/3">
            {/* Partea stângă cu imaginea */}
            <div className="w-full h-full">
              <img
                src="/images/login-bg.jpg"
                alt="Background"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Partea dreaptă cu formularul */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 bg-linen bg-opacity-50">
              <div className="w-3/4 max-w-md p-6 border-2 border-linen bg-white rounded-lg">
                <h1 className="text-2xl font-bold font-facultyGlyphic text-center pt-5">
                  Login Page
                </h1>
                <form
                  className="w-full m-auto mt-4 p-3 flex flex-col items-center justify-center"
                  onSubmit={handleSubmit}
                >
                  <InputGroup
                    name={"email"}
                    type={"email"}
                    placeholder={"User email"}
                    value={values.email}
                    handleChange={handleChange}
                  />
                  <InputGroup
                    name={"password"}
                    type={"password"}
                    placeholder={"Password"}
                    value={values.password}
                    handleChange={handleChange}
                  />
                  <button
                    className="rounded-md p-2 bg-black text-white mt-5 text-center font-facultyGlyphic mx-auto"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </NavigationLayout>
    </>
  );
}

export default App;
