import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  Link,
  Outlet,
  NavLink,
  Route,
  Routes,
  useMatch,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import styles from "./Formik.module.sass";

export default function SignupForm() {
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <>
      <Link to="/" className={styles.signupBtn}>
        Login
      </Link>
      <h1 className={styles.formTitle}>Create an account</h1>

      <Form className={styles.formContainer}>
        <Field
          className={styles.input}
          type="text"
          name="firstName"
          placeholder="Nickname"
          autoFocus
        />
        <ErrorMessage name="firstName" component="span" className={styles.err} />
        <Field
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
        ></Field>
        <ErrorMessage name="password" component="span" className={styles.err} />
        <Field
          className={styles.input}
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
        ></Field>
        <button className={styles.submitBtn} type="submit">
          Signup
        </button>
      </Form>
    </>
  );
}
