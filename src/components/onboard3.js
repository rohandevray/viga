import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThirdX from "../images/fourth.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Onboard3 = () => {
  return (
    <Back>
      <Card>
        <Mogo>
          <img src={ThirdX} alt="" />
        </Mogo>
        <p>Say no to false reports</p>
        <button>
          <Link
            to="/onboard4"
            style={{ textDecoration: "none", color: "white" }}
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
        <Dots>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot1"></span>
          <span className="dot"></span>
        </Dots>
      </Card>
      <p className="last">
        <Link to="/onboard4" style={{ textDecoration: "none", color: "white" }}>
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
    left: 49.5%;
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
    bottom: 31%;
    left: 30%;
    cursor: pointer;
  }
  button {
    position: absolute;
    bottom: 13%;
    left: 41%;
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
  left: 41%;
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
export default Onboard3;
