import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Laptop from "../images/blank.svg";
import Icon from "../images/icon.svg";
const Blank = () => {
  return (
    <Back>
      <Cred>
        <h1>My Classes</h1>
        <div className="image">
          <img src={Laptop} alt="" />
          <p>
            You're yet to be added to a class, <br />
            till then you can relax
          </p>
        </div>
        <div className="txt">
          <div className="part1">
            <p>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <u>Take Demo Exam</u>
              </Link>
            </p>
          </div>
          <div className="part2">
            <div className="oki">
              <p>Samuel Doe</p>
              <p>18BI1241</p>
            </div>
            <div>
              <img src={Icon} alt="" />
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
    top: 8rem;
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
  width: 90%;
  position: absolute;
  left: 5%;
  top: 3%;
  .image {
    position: relative;
    left: 33.2%;
    top: 5rem;
    p {
      position: relative;
      left: 1%;
      bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: bolder;
      color: grey;
    }
  }
`;

export default Blank;
