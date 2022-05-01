import React from "react";
import styled from "styled-components";
import Icon from "../images/icon.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faAngleLeft,
  faAngleDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <Back>
      <Text>
        <div className="left">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="2x"
            color="white"
            id="icon"
          />
          <div className="div">
            <img src={Icon} alt="" />
            <div className="txt">
              <h2>Samuel Doe</h2>
              <p>18BIS1241</p>
            </div>
          </div>
        </div>
        <div className="pen">
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="2x"
            color="white"
            id="icon"
          />
          <p>Edit Profile Picture</p>
        </div>
      </Text>

      {/* break */}

      <Part1>
        <h2>General Settings</h2>
        <div className="Blocks">
          <Iron>
            <p>Settings 1</p>
            <FontAwesomeIcon
              icon={faAngleDown}
              size="2x"
              color="white"
              id="icon"
            />
          </Iron>
          <div className="line"></div>
          <Iron>
            <p>Settings 2</p>
            <FontAwesomeIcon
              icon={faToggleOff}
              size="2x"
              color="white"
              id="icon"
            />
          </Iron>
          <div className="line"></div>
          <Iron>
            <p>Settings 2</p>
            <FontAwesomeIcon
              icon={faToggleOn}
              size="2x"
              color="white"
              id="icon"
            />
          </Iron>
        </div>
      </Part1>
      <Part2>
        <h2>General Settings</h2>
        <div className="Blocks">
          <Iron>
            <p>Settings 1</p>
            <p>
              <u>View More</u>
            </p>
          </Iron>
          <div className="line"></div>
          <Iron>
            <p>Settings 2</p>
            <FontAwesomeIcon
              icon={faToggleOff}
              size="2x"
              color="white"
              id="icon"
            />
          </Iron>
        </div>
      </Part2>
    </Back>
  );
};

const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
`;

const Text = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: space-between;
  padding: 1.8% 2%;
  .left {
    display: flex;
    margin-left: 3.6%;
    img {
      width: 4rem;
    }
    #icon {
      margin-left: 20px;
      position: relative;
      top: 1.6rem;
    }
    .div {
      padding-left: 1.5rem;
      display: flex;
      .txt {
        position: absolute;
        left: 16%;
        top: 5.5%;
      }
    }
  }
  .pen {
    display: flex;
    padding: 2% 7.5%;
    font-size: 12px;
    #icon {
      margin-right: 10px;
      margin-top: -3px;
    }
  }
`;
const Part1 = styled.div`
  width: 85%;
  position: relative;
  left: 7%;
  h2 {
    padding: 1% 0;
  }
  .line {
    width: 95%;
    position: relative;
    margin: 5px 0;
    left: 3%;
    height: 1.4px;
    background-color: #ffffff80;
  }
  .Blocks {
    background: #232527;
    height: 215px;
  }
`;
const Part2 = styled.div`
  width: 85%;
  position: relative;
  left: 7%;
  h2 {
    margin: 2rem 0 0.7rem 0;
  }
  .line {
    width: 95%;
    position: relative;
    margin: 5px 0;
    left: 3%;
    height: 1.4px;
    background-color: #ffffff80;
  }
  .Blocks {
    background: #232527;
    height: 130px;
  }
  u {
    margin-right: 1rem;
  }
`;
const Iron = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
  #icon {
    margin-right: 1rem;
  }
`;

export default Settings;
