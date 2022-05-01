import React from "react";
import styled from "styled-components";
import Icon from "../images/icon.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faBell,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Back>
      <Cred>
        <h1>My Classes</h1>
        <div className="image">
          <Boxes>
            <div className="box1">
              <div className="text">
                <h3>Neural Networks and Fuzzy Control</h3>
                <p>CSE3013</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="2x"
                  color="white"
                  id="icon"
                />
              </div>
            </div>
            <div className="box2">
              <div className="first">
                <div className="text">
                  <h3>IOT System Architecture</h3>
                  <p>ECE1029</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    size="2x"
                    color="white"
                    id="icon"
                  />
                </div>
              </div>

              <Box>
                <div className="time">
                  <h3>CAT 1</h3>
                  <p>
                    22nd Dec 2020 <span>.</span> 9:00 am - 12:00 pm{" "}
                    <FontAwesomeIcon
                      icon={faBellSlash}
                      size="1x"
                      color="grey"
                      id="icon"
                    />
                  </p>

                  <button>Completed</button>
                </div>
              </Box>
              <Box>
                <div className="time">
                  <h3>CAT 2</h3>
                  <p>
                    12th Jan 2021 <span>.</span> 9:00 am - 12:00 pm{" "}
                    <FontAwesomeIcon
                      icon={faBell}
                      size="1x"
                      color="grey"
                      id="icon"
                    />
                  </p>

                  <button className="second">
                    <Link
                      to="/check"
                      style={{ textDecoration: "none", color: "#131415" }}
                    >
                      Join Exam
                    </Link>
                  </button>
                </div>
              </Box>
              <Box>
                <div className="time">
                  <h3>LAB FAT</h3>
                  <p>
                    22nd March 2021 <span>.</span> 9:00 am - 12:00 pm{" "}
                    <FontAwesomeIcon
                      icon={faBell}
                      size="1x"
                      color="grey"
                      id="icon"
                    />
                  </p>

                  <button>Yet to start</button>
                </div>
              </Box>
            </div>
          </Boxes>
        </div>

        <div className="txt">
          <div className="part1">
            <p>
              <u> Take Demo Exam</u>
            </p>
          </div>
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
        </div>
      </Cred>
    </Back>
  );
};

const Back = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white;
  .txt {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 6rem;
    .part2 {
      display: flex;
      .oki {
        padding-right: 10px;
        padding-top: 5px;
      }
    }
  }
`;
const Cred = styled.div`
  width: 83%;
  position: absolute;
  left: 8%;
  top: 3%;
`;

const Boxes = styled.div`
  background-color: black;
  margin-top: 4%;
  .box1,
  .first {
    display: flex;
    justify-content: space-between;
    padding: 12px 30px;
    background-color: #232527;
  }
  .box2 {
    margin-top: 1.2%;
    height: 312px;
    background: #232527;
  }
`;

const Box = styled.div`
  width: 95%;
  background: #484c50;
  position: relative;
  left: 2.4%;
  height: 60px;
  margin-top: 12px;
  .time {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5%;
    font-weight: 550;
    span {
      font-weight: bolder;
      position: relative;
      bottom: 0.2rem;
      padding: 0 3px;
    }
    #icon {
      padding-left: 8px;
    }
    button {
      background: #ffffff80;
      width: 7rem;
      height: 2rem;
      color: #131415;
      font-weight: 600;
      border: none;
      outline: none;
    }
    .second {
      background: #ffffff;
      cursor: pointer;
    }
  }
`;
export default Home;
