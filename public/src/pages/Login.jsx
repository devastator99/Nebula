import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import login from '../assets/login.jpg';

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Nebula</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-image:url(${login});
  background-size: cover;
  background-position: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
      font-family: "Rowdies", sans-serif;
      font-weight: 200;
      font-style: normal;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter:blur(10px);
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    form {
      padding: 2rem; /* Reduce padding for smaller screens */
      width: 80%; /* Adjust width */
    }
    .brand {
      img {
        height: 3rem; /* Smaller logo */
      }
      h1 {
        font-size: 1.5rem; /* Smaller font size */
      }
    }
    input {
      font-size: 0.9rem; /* Slightly smaller font size */
    }
    button {
      padding: 0.8rem 1.5rem; /* Smaller button padding */
      font-size: 0.9rem; /* Slightly smaller font size */
    }
    span{
      font-size : 0.8rem;
    }
    }
  }

  @media (max-width: 480px) {
    form {
      padding: 1rem; /* Further reduce padding for very small screens */
      width: 90%; /* Adjust width */
    }
    .brand {
      img {
        height: 2.5rem; /* Smaller logo */
      }
      h1 {
        font-size: 1.2rem; /* Smaller font size */
      }
    }
    input {
      font-size: 0.8rem; /* Smaller font size */
    }
    button {
      padding: 0.7rem 1rem; /* Smaller button padding */
      font-size: 0.8rem; /* Smaller font size */
    }
  }
`;
