import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import lego from "../images/logo.svg";
import { Link } from "react-router-dom";

const Spach = () => {
  return (
    <Back>
      <Home>
        <Logo>
          <img src={lego} alt="" />
          <div className="logo-text">
            <h4>Proctor</h4>
            <h4>Vision.</h4>
          </div>
        </Logo>
        <div className="text">
          <p>Welcome aboard</p>
          <p>to the future in the making</p>
          <p>you've just become a part of it</p>
        </div>
        <button>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#343232" }}
          >
            Continue
            <FontAwesomeIcon
              icon={faGreaterThan}
              size="1x"
              color="black"
              id="icon"
            />
          </Link>
        </button>
      </Home>
    </Back>
  );
};
const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;
const Home = styled.div`
  position: absolute;
  width: 1114px;
  height: 500px;
  left: 50%;
  top: 28%;
  transform: translate(-50%, -20%);
  background: #232527;
  box-shadow: 7px 8px 52px rgba(0, 0, 0, 0.35);
  color: white;

  .text {
    width: 90%;
    position: relative;
    left: 10%;
    top: 28%;
    p {
      font-weight: bolder;
      font-size: 34px;
      line-height: 50px;
    }
  }
  button {
    position: absolute;
    bottom: 14%;
    left: 10%;
    height: 43px;
    width: 160px;
    cursor: pointer;
    letter-spacing: 0.5px;
    font-size: 20px;
    font-weight: 600;
    color: #343232;
    &:hover {
    }
    #icon {
      position: relative;
      left: 10px;
      height: 13px;
      bottom: 2px;
    }
  }
`;

const Logo = styled.div`
  height: 4rem;
  position: relative;
  left: 10%;
  top: 14%;
  letter-spacing: 1.5px;
  display: flex;
  .logo-text {
    position: relative;
    left: 10px;
    top: 18px;
    font-size: 1.1rem;
    font-weight: bolder;
  }
`;

export default Spach;
