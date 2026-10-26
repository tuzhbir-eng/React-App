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
import * as yup from "yup";
import React from "react";
import styles from "./Formik.module.sass";
import logo from "./assets/images/logo.jpeg";
import Signup from "./Signup";

const USER_VALIDATE = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(32)
    .required()
    .matches(/^[A-Z]/, "Name must starts with capital letter")
    .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(/[A-Z]/, "At least 1 capital letter")
    .matches(/[a-z]/, "At least 1 lowercase letter")
    .matches(/[!@#$%^&*.]/, "At least 1 special symbol"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords should match")
    .required(),
});

function Login() {
  return (
    <>
      <Link to="/signup" className={styles.signupBtn} type="button">
        Signup
      </Link>
      <h1 className={styles.formTitle}>Log in to your account</h1>
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
        <button className={styles.submitBtn} type="submit">
          Login
        </button>
      </Form>
    </>
  );
}

export default function FormikPage() {
  const userInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={userInitialValues}
      validationSchema={USER_VALIDATE}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        return (
          <Router>
            <img className={styles.logo} src={logo} alt="squadhelp" />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        );
      }}
    </Formik>
  );
}
