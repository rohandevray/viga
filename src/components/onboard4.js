import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Men from "../images/men.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Onboard4 = () => {
  return (
    <Back>
      <Card>
        <Mogo>
          <img src={Men} alt="" />
        </Mogo>
        <p>Protecting rights, respecting privacy</p>
        <button>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go to Dashboard
            <FontAwesomeIcon
              icon={faGreaterThan}
              size="1x"
              color="black"
              id="icon"
            />
          </Link>
        </button>
        <Dots>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot1"></span>
        </Dots>
      </Card>
      <p className="last">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Skip
        </Link>
      </p>
    </Back>
  );
};
const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  font-weight: bold;
  .last {
    position: absolute;
    bottom: 8%;
    left: 48.8%;
    font-weight: 100;
    opacity: 0.7;
  }
`;

const Card = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  height: 500px;
  transform: translate(-50%, -50%);
  background-color: #232527;
  p {
    position: absolute;
    bottom: 28.6%;
    left: 13%;
    cursor: pointer;
  }
  button {
    position: absolute;
    bottom: 13%;
    left: 28%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    #icon {
      position: relative;
      left: 10px;
      height: 13px;
      bottom: 2px;
      color: white;
    }
  }
`;
const Mogo = styled.div`
  height: 8rem;
  text-align: center;
  position: relative;
  top: 6%;
`;

const Dots = styled.div`
  width: 100px;
  height: 1rem;
  position: absolute;
  bottom: 9%;
  left: 38%;
  .dot1 {
    height: 7px;
    width: 10px;
    background-color: #bbb;
    border-radius: 5px;
    display: inline-block;
    padding-right: 1rem;
    margin-right: 8px;
  }
  .dot {
    height: 7px;
    width: 7px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
`;
export default Onboard4;
