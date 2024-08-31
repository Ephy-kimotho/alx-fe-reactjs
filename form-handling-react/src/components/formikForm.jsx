import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string()
    .min(5, "Must be 5 or more characters")
    .max(18, "Must be 18 or less characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be greater than 8 characters")
    .required("Required"),
});

export function formikForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form values: ", values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form>
          <label htmlFor="username">UserName</label>
          <Field
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red", fontSize: "14px", margin:"10px 0" }}
          />

          <label htmlFor="email">Email</label>
          <Field name="email" id="email" placeholder="Enter your email" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: "red", fontSize: "14px", margin:"10px 0" }}
          />

          <label htmlFor="password"></label>
          <Field
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red", fontSize: "14px", margin:"10px 0" }}
          />

          <div>
            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
