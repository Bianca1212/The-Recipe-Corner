import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import { NavigationLayout } from "../layouts/NavigationLayout";

export const Register = () => {
  const { values, handleChange } = useForm({
    email: "",
    name: "",
    age: "",
    password: "",
    verifyPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users`, values);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <NavigationLayout>
        <h1 className="text-2xl font-bold font-facultyGlyphic text-center pt-5">
          Register to our recipes app
        </h1>
        <form
          className="w-3/12 m-auto mt-4 p-3 rounded-md flex flex-col items-center justify-center"
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
            name={"name"}
            type={"text"}
            placeholder={"Username"}
            value={values.name}
            handleChange={handleChange}
          />
          <InputGroup
            name={"age"}
            type={"number"}
            placeholder={"Age"}
            value={values.age}
            onChange={handleChange}
          />
          <InputGroup
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            value={values.password}
            handleChange={handleChange}
          />
          <InputGroup
            name={"verifyPassword"}
            type={"password"}
            placeholder={"Rewrite password"}
            value={values.verifyPassword}
            handleChange={handleChange}
          />
          <button
            className="rounded-md p-2 bg-black text-white mt-5 text-center font-facultyGlyphic mx-auto"
            type="submit"
          >
            Register
          </button>
        </form>
      </NavigationLayout>
    </>
  );
};
