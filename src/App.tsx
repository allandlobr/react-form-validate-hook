import "./App.css";
import { useForm } from "./useForm";

type Form = {
  name: string;
  age: string;
  height: string;
};

function App() {
  const { data, errors, handleChange, handleSubmit } = useForm<Form>({
    validations: {
      name: {
        required: {
          value: true,
          message: "Name is required!",
        },
      },
      age: {
        required: {
          value: true,
          message: "Age is required!",
        },
        pattern: {
          value: "^[0-9]{1,3}$",
          message: "Age is not in the correct pattern!",
        },
      },
      height: {
        required: {
          value: true,
          message: "Height is required!",
        },
      },
    },
  });

  return (
    <div className="App">
      <h1>Validation example</h1>
      <form onSubmit={handleSubmit}>
        Name
        <input name="name" value={data.name} onChange={handleChange("name")} />
        Age
        <input name="age" value={data.age} onChange={handleChange("age")} />
        Height
        <input
          name="height"
          value={data.height}
          onChange={handleChange("height")}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="errors">
        {errors.name}<br />
        {errors.age}<br />
        {errors.height}
      </div>
    </div>
  );
}

export default App;
