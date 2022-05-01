import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const Login = () => {
  return (
    <Back>
      <Card>
        <Xogo>
          <img src={Logo} alt="" />
        </Xogo>
        <div className="text">
          <input type="text" name="" id="" placeholder="Username" />
          <input type="text" name="" id="" placeholder="Password" />
          <div className="para">
            <p>
              <u>Reset Password From Default/</u>
            </p>
            <p>
              <u>Forgot Password</u>
            </p>
          </div>
        </div>
        <button>
          <Link
            to="/onboard1"
            style={{ textDecoration: "none", color: "#343232" }}
          >
            Log In
          </Link>
        </button>
      </Card>
    </Back>
  );
};

const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
`;

const Card = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  height: 500px;
  transform: translate(-50%, -50%);
  background-color: #232527;
  .text {
    position: relative;
    left: 20%;
    display: flex;
    flex-direction: column;
    top: 23%;
    .para {
      text-align: center;
      font-size: 11px;
      position: relative;
      left: -20%;
      padding-top: 1.3rem;
      line-height: 13px;
    }
    input {
      height: 2rem;
      width: 60%;
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 2.5px white solid;
      margin-top: 5%;
      color: white;
      &::placeholder {
        position: absolute;
        left: 5%;
        bottom: 5%;
        font-size: 1rem;
      }
    }
  }
  button {
    position: absolute;
    bottom: 12%;
    left: 33%;
    height: 50px;
    width: 140px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Xogo = styled.div`
  height: 4rem;
  position: relative;
  left: 40%;
  top: 10%;
`;

export default Login;
