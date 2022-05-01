import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCircle,
  faAngleLeft,
  faAngleRight,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Exame from "../images/exame.svg";
import Ring from "../images/reng.svg";
import Box1 from "../images/box1.svg";
import Box2 from "../images/box2.svg";
import Box3 from "../images/box3.svg";
import Box4 from "../images/box.svg";

const Warning = () => {
  return (
    <Back>
      <Time>
        <div className="icon">
          <FontAwesomeIcon icon={faClock} size="2x" color="white" id="icon" />
          <p>01:33:33</p>
        </div>
        <div>
          <button>Exit</button>
          <button>Submit</button>
        </div>
      </Time>
      <div className="Overall">
        <Ques>
          <h2>Question 1</h2>
          <Main>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in
              id diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut
              placerat gravida. Dolor velit sed non in semper. Enim etiam sem
              nunc fermentum sollicitudin tellus. Sagittis cum nec justo leo
              semper ut sollicitudin. Gravida pellentesque dis.
            </p>
            <img src={Exame} alt="" />
          </Main>
          <Ans>
            <FontAwesomeIcon
              icon={faCircle}
              size="1x"
              color="white"
              id="icon"
            />
            <p>Lorem ipsum dolor</p>
          </Ans>
          <Ans>
            <img src={Ring} alt="" />
            <p>Lorem ipsum dolor</p>
          </Ans>
          <Ans>
            <img src={Ring} alt="" />
            <p>Lorem ipsum dolor</p>
          </Ans>
          <Ans>
            <img src={Ring} alt="" />
            <p>Lorem ipsum dolor</p>
          </Ans>
        </Ques>
        <div className="square">
          <Line1>
            <img src={Box2} alt="" />
            <img src={Box3} alt="" />
            <img src={Box1} alt="" />
            <img src={Box4} alt="" />
            <img src={Box4} alt="" />
          </Line1>
          <Line2>
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
          </Line2>
          <Line3>
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
          </Line3>
          <Line4>
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
            <img src={Box3} alt="" />
          </Line4>
          <Fine>
            <div className="num">
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="1x"
                color="white"
                id="icon"
              />
              <span>1</span>
              <span className="low">2</span>
              <span className="low">3</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                size="1x"
                color="white"
                id="icon"
              />
            </div>
            <div className="btns">
              <button className="one">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="1x"
                  color="black"
                  id="icon1"
                />
                Previous
              </button>
              <button className="two">
                Next
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size="1x"
                  color="black"
                  id="icon2"
                />
              </button>
            </div>
          </Fine>
          <Warn1>
            <p>Please adjust your camera</p>
            <p className="time">12:30pm</p>
          </Warn1>
          <Warn2>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="2x"
              color="red"
              id="icon"
            />
            <div className="left">
              <h4>Warning 1</h4>
              <p>Warning 1</p>
            </div>
            <FontAwesomeIcon icon={faXmark} size="2x" color="grey" id="xcon" />
          </Warn2>
          <Warn3>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="2x"
              color="yellow"
              id="icon"
            />
            <div className="left">
              <h4>Warning 2</h4>
              <p>Warning 2</p>
            </div>
            <FontAwesomeIcon icon={faXmark} size="2x" color="grey" id="xcon" />
          </Warn3>
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
  .Overall {
    display: flex;
  }
`;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 5%;
  .icon {
    display: flex;
    position: relative;
    left: 4%;
    p {
      margin-left: 1rem;
      position: relative;
      top: 0.24rem;
    }
  }
  button {
    background-color: white;
    color: black;
    width: 7rem;
    height: 2.4rem;
    margin-right: 1.7rem;
    font-weight: bold;
  }
`;

const Ques = styled.div`
  width: 870px;
  position: absolute;
  left: 9%;
  top: 11%;
  h2 {
    margin-bottom: 1rem;
  }
`;
const Main = styled.div`
  width: 870px;
  height: 16em;
  background: #232527;
  padding: 1.5%;
  p {
    padding-bottom: 1rem;
  }
`;
const Ans = styled.div`
  width: 870px;
  background: #232527;
  display: flex;
  height: 2.5rem;
  margin-top: 1.6rem;
  padding: 1%;
  #icon {
    position: relative;
    top: 4.3px;
  }
  img {
    width: 1rem;
    position: relative;
    top: 1.3px;
  }
  p {
    margin-left: 1.5%;
  }
`;
const Line1 = styled.div`
  width: 18rem;
  position: absolute;
  right: 6%;
  top: 15%;
  img {
    margin-left: 1.4rem;
  }
`;

const Line2 = styled.div`
  img {
    margin-left: 1.4rem;
  }
  width: 18rem;
  position: absolute;
  top: 25%;
  right: 6%;
`;
const Line3 = styled.div`
  img {
    margin-left: 1.4rem;
  }
  width: 18rem;
  position: absolute;
  top: 35%;
  right: 6%;
`;
const Line4 = styled.div`
  img {
    margin-left: 1.4rem;
  }
  width: 18rem;
  position: absolute;
  top: 45%;
  right: 6%;
`;
const Fine = styled.div`
  width: 8rem;
  position: absolute;
  right: 16%;
  top: 52%;
  span {
    padding: 0 0.9rem;
    font-weight: 700;
  }
  .low {
    opacity: 0.8;
  }
  .btns {
    display: flex;
    padding: 20% 0;
    width: 16rem;
    .one {
      background: #ffffff80;
      padding-left: 2rem;
    }
    .two {
      padding-left: 2rem;
      margin-left: 17px;
    }
  }
  button {
    outline: none;
    border: none;
    width: 9rem;
    display: flex;
    color: black;
    padding: 0.7rem 1rem;
    margin-left: 0.4rem;
    #icon1 {
      position: relative;
      top: 2.85px;
      right: 13%;
    }
    #icon2 {
      position: relative;
      top: 2.85px;
      left: 13%;
    }
    font-weight: bold;
  }
`;

const Warn1 = styled.div`
  position: absolute;
  width: 300px;
  height: 55px;
  right: 8%;
  bottom: 25%;
  background: #232527;
  padding: 1%;
  .time {
    font-size: 10px;
    position: absolute;
    right: 5%;
  }
`;
const Warn2 = styled.div`
  position: absolute;
  width: 300px;
  height: 58px;
  padding: 0.5%;
  right: 8%;
  bottom: 15%;
  background: #232527;
  display: flex;
  #icon {
    padding-left: 4px;
    margin-top: 5px;
  }
  h4 {
    color: red;
  }
  p {
    font-size: 0.7rem;
    position: relative;
    bottom: 2px;
  }
  .left {
    margin-left: 9px;
  }
  #xcon {
    position: absolute;
    right: 7%;
  }
`;
const Warn3 = styled.div`
  position: absolute;
  width: 300px;
  height: 58px;
  padding: 0.5%;
  right: 8%;
  bottom: 5%;
  display: flex;
  background: #232527;
  #icon {
    padding-left: 4px;
    margin-top: 5px;
  }
  p {
    font-size: 0.7rem;
    position: relative;
    bottom: 2px;
  }
  .left {
    margin-left: 9px;
  }
  h4 {
    color: yellow;
  }
  #xcon {
    position: absolute;
    right: 7%;
  }
`;
export default Warning;
