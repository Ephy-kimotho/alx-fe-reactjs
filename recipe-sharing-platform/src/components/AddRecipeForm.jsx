import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const { name, value } = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(formData);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Add recipe to the list</h2>

        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" placeholder="Enter the title" />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter the description"
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            name="ingredients"
            placeholder="Enter ingredients separated by a comma"
          />
        </div>

        <div>
          <label htmlFor="steps">Preparation steps:</label>
          <textarea
            name="steps"
            placeholder="Enter preparation stepsseparated by a comma"
          />
        </div>

        <div>
          <button type="submit">Add recipe</button>
        </div>
      </form>
    </section>
  );
}

export default AddRecipeForm;
