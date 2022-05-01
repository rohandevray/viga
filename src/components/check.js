import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../images/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scan from "../images/checkk.svg";
import Band from "../images/bend.svg";
import {
  faAngleLeft,
  faCircleNotch,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Check = () => {
  return (
    <Back>
      <Text>
        <div className="icon">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2x"
            color="white"
            id="icon"
          />
          <h1>Graduate Record Examination</h1>
        </div>
        <div>
          <h2>17th Dec 2020</h2>
          <p>9:00 am - 12:00 pm</p>
        </div>
      </Text>
      <Main>
        <div className="image">
          <img src={Scan} alt="" />
          <img src={Band} alt="" id="band" />
        </div>
        <div className="list">
          <Pie>
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              color="green"
              id="check"
            />
            <p>Webcam check</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              color="green"
              id="check"
            />
            <p>Mic testing</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon icon={faXmark} size="2x" color="red" id="cross" />
            <p>a iris sync</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon icon={faXmark} size="2x" color="red" id="cross" />
            <p>BT / Alien hardware detection</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              color="green"
              id="check"
            />
            <p>QR / Virtual Machine detection</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon
              icon={faCircleNotch}
              size="2x"
              color="grey"
              id="notch"
            />
            <p>Browser lock</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon
              icon={faCircleNotch}
              size="2x"
              color="grey"
              id="notch"
            />
            <p>Screen capture</p>
          </Pie>
          <Pie>
            <FontAwesomeIcon
              icon={faCircleNotch}
              size="2x"
              color="grey"
              id="notch"
            />
            <p>Identity authentication</p>
          </Pie>
          <button>
            <Link to="/exam" style={{ textDecoration: "none", color: "black" }}>
              Start Exam
            </Link>
          </button>
        </div>
      </Main>
      <div className="part2">
        <div className="oki">
          <p>Samuel Doe</p>
          <p>18BI1241</p>
        </div>
        <div>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <img src={Icon} alt="" />
          </Link>
        </div>
      </div>
    </Back>
  );
};

const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
  .part2 {
    display: flex;
    position: absolute;
    right: 2%;
    padding-top: 2rem;
    .oki {
      padding-right: 10px;
      padding-top: 5px;
    }
  }
`;
const Text = styled.div`
  width: 100%;
  height: 14vh;

  display: flex;
  justify-content: space-between;
  padding: 2% 5%;
  p {
    text-align: end;
    position: relative;
    bottom: 7px;
    font-size: 12px;
  }
  .icon {
    display: flex;
    h1 {
      margin-left: 31px;
    }
  }
  #icon {
    position: absolute;
    top: 5%;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  .image {
    position: relative;
    left: 3%;
    top: 2%;
    transform: rotate(-0.21deg);
    #band {
      position: absolute;
      left: 25.5%;
      top: 20%;
    }
  }
  .list {
    position: relative;
    top: 2%;
    left: 5%;
    button {
      width: auto;
      padding: 4px 25px;
      position: relative;
      left: 5%;
      top: 4%;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

const Pie = styled.div`
  display: flex;
  width: 20rem;
  padding: 3%;
  p {
    padding-left: 10px;
  }
`;
export default Check;
