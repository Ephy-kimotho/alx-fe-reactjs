import { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
  });

  const [debouncedFormData, setDebouncedFormData] = useState(formData);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFormData(formData);
    }, 500);

    return () => clearTimeout(handler);
  }, [formData]);

  const form = useRef(null);

  function validate() {
    const { title, description, ingredients, steps } = debouncedFormData;
    let isValid = true;

    setErrors({ title: "", description: "", ingredients: "", steps: "" });

    if (title.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Required",
      }));
      isValid = false;
    } else if (title.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Too short",
      }));
      isValid = false;
    }

    if (description.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Required",
      }));
      isValid = false;
    } else if (description.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Too short",
      }));
      isValid = false;
    }

    if (ingredients.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Required",
      }));
      isValid = false;
    } else if (ingredients.split(",").length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Enter two or more ingredients",
      }));
      isValid = false;
    }

    if (steps.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        steps: "Required",
      }));
      isValid = false;
    } else if (steps.split(",").length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        steps: "Enter two or more steps",
      }));
      isValid = false;
    }

    return isValid;
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function postRecipe() {
    const newRecipe = {
      ...debouncedFormData,
      id: nanoid(),
      ingredients: debouncedFormData.ingredients
        .split(",")
        .filter((item) => item.trim().length > 0),
      steps: debouncedFormData.steps
        .split(",")
        .filter((item) => item.trim().length > 0),
    };

    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    form.current.reset();
    setFormData({
      title: "",
      description: "",
      ingredients: "",
      steps: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      postRecipe();
    } else {
      console.log("Form has errors.");
    }
  }

  useEffect(() => console.log("recipes: ", recipes), [recipes]);

  return (
    <section className="h-screen bg-gray flex justify-center items-center">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-cyan py-3 px-4 shadow-md rounded w-4/5 md:w-3/5 my-16"
      >
        <h2 className="text-darkBlue text-center underline uppercase text-xl sm:text-3xl md:text-4xl font-bold">
          Add recipe to the list
        </h2>

        <div className="w-full mb-2">
          <label htmlFor="title" className="text-lg font-bold">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full  p-2 text-base  rounded focus:outline focus:outline-green-500
            focus:outline-2  ${
              errors.title ? "outline outline-red outline-2" : ""
            }`}
          />
          {errors.title && <p className="text-red text-base">{errors.title}</p>}
        </div>

        <div className="w-full mb-2">
          <label htmlFor="description" className="text-lg font-bold">
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter the description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-2 text-base rounded focus:outline focus:outline-green-500
            focus:outline-2  ${
              errors.description ? "outline outline-red outline-2" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red text-base">{errors.description}</p>
          )}
        </div>

        <div className="w-full mb-2">
          <label htmlFor="ingredients" className="text-lg font-bold">
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            placeholder="Enter ingredients separated by a comma"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full p-2 h-20 text-base rounded focus:outline focus:outline-green-500 focus:outline-2  ${
              errors.ingredients ? "outline outline-red outline-2" : ""
            }`}
          />
          {errors.ingredients && (
            <p className="text-red text-base">{errors.ingredients}</p>
          )}
        </div>

        <div className="w-full mb-2">
          <label htmlFor="steps" className="text-lg font-bold">
            Preparation steps:
          </label>
          <textarea
            name="steps"
            placeholder="Enter preparation steps separated by a comma"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full p-2 h-20 text-base rounded focus:outline focus:outline-green-500 focus:outline-2  ${
              errors.steps ? "outline outline-red outline-2" : ""
            }`}
          />
          {errors.steps && <p className="text-red text-base">{errors.steps}</p>}
        </div>

        <div className="w-full mb-2 text-center">
          <button
            type="submit"
            className="w-3/5 sm:w-2/5 py-2 bg-darkBlue text-white rounded-md hover:bg-sky-700"
          >
            Add recipe
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddRecipeForm;
