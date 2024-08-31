import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  /* on change handler */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  /* submit handler */
  function handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = formData;
    const newErrors = {};
    let isValid = true;

    if (!username) {
      newErrors.username = "Required";
      isValid = false;
    } else if (username.length < 5) {
      newErrors.username = "Must be greater than 5 characters";
      isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) {
      newErrors.email = "Required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Must be greater than 8 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted");
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? "error" : ""}
          placeholder="Enter your username"
        />
        {errors.username && (
          <div className="error">
            <p>{errors.username}</p>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
          placeholder="Enter your email"
        />
        {errors.email && (
          <div className="error">
            <p>{errors.email}</p>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
          placeholder="Enter your password"
        />
        {errors.password && (
          <div className="error">
            <p>{errors.password}</p>
          </div>
        )}
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default RegistrationForm;
