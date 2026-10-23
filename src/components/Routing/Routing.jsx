import React, { createContext, useState, useEffect, useContext } from "react";
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
import WeatherWrapper from "../CurrentWeather/WeatherWrapper/WeatherWrapper";
import SignUpForm from "../SignUpForm/UserForm";
import About from "./About/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Routing.module.sass";

function Home() {
  return (
    <div className={styles.homePage}>Hi! It`s React Routing home page. Wish you a good day!</div>
  );
}

function Components() {
  return (
    <div className={styles.componentsPage}>
      <ul className={styles.componentsMenu}>
        <li>
          <Link to="/components/CurrentWeather" className={styles.component}>
            Weather
          </Link>
        </li>
        <li>
          <Link to="/components/SignUpForm" className={styles.component}>
            Sign Up
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function NotFound() {
  return <div>404 Page not NotFound</div>;
}

export default function Routing() {
  return (
    <div className={styles.all}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/components/*" element={<Components />} />
            <Route path="/components/CurrentWeather" element={<WeatherWrapper />} />
            <Route path="/components/SignUpForm" element={<SignUpForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}
