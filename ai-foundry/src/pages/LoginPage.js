import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/images/EAIF-Logo.png";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate("");

  const userChangeHandler = (e) => {
    console.log(e.target.value);
    let userName = e.target.value;
    setUsername(userName);
  };
  const passwordChangeHandler = (e) => {
    console.log(e.target.value);
    let password = e.target.value;
    setPasword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin"
    ) {
      console.log("Hello");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <h2>HCLTech</h2>
          <img src={logo} alt="HCLTech Logo" className="logo" />
        </div>

        <form>
          <label htmlFor="username" className="form-label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="USERNAME"
            className="login-input"
            onChange={userChangeHandler}
          />
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="PASSWORD"
            className="login-input"
            onChange={passwordChangeHandler}
          />
          <div className="button-container">
            {" "}
            <button
              type="submit"
              className="login-button"
              onClick={handleSubmit}
            >
              LOG IN
            </button>
          </div>
        </form>
        <div className="login-footer">
          <a href="#">FORGOT PASSWORD?</a>
          <a href="#">NEW USER?</a>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
