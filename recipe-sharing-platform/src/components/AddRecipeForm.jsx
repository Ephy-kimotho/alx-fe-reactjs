import { useState } from "react";

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

  function validate() {
    const { title, description, ingredients, steps } = formData;

    if (title.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Required",
      }));
    } else if (title.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Too short",
      }));
    }

    if (description.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Required",
      }));
    } else if (description.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Too short",
      }));
    }

    if (ingredients.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Required",
      }));
    } else if (ingredients.split(",").length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ingredients: "Enter two or more ingredients",
      }));
    }

    if (steps.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        steps: "Required",
      }));
    } else if (steps.split(",").length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        steps: "Enter two or more steps",
      }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  //function postData(){}

  function handleSubmit(e) {
    e.preventDefault();

    validate();
    console.log("Form submitted");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Add recipe to the list</h2>

        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter the description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className="text-red">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            name="ingredients"
            placeholder="Enter ingredients separated by a comma"
            value={formData.ingredients}
            onChange={handleChange}
          />
          {errors.ingredients && (
            <p className="text-red">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label htmlFor="steps">Preparation steps:</label>
          <textarea
            name="steps"
            placeholder="Enter preparation steps separated by a comma"
            value={formData.steps}
            onChange={handleChange}
          />
          {errors.steps && <p className="text-red">{errors.steps}</p>}
        </div>

        <div>
          <button type="submit">Add recipe</button>
        </div>
      </form>
    </section>
  );
}

export default AddRecipeForm;
