import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.webp";
import Logout from "./Logout";
import { gsap } from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText);

export default function Welcome() {
  const [userName, setUserName] = useState("");

  const spliRef = useRef(null);

  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );

    if (spliRef.current) {
      const split = new SplitText(spliRef.current, {
        type: "chars,words",
        position: "absolute",
      });
      gsap.from(split.chars, {
        duration: 1,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
      });
    }
  }, []);
  return (
    <Container>
      <div className="logout">
        <Logout />
      </div>
      <img src={Robot} alt="" />
      <h1>
        Hey, <span>{userName}!</span>
      </h1>
      <div className="spli" ref={spliRef}>
        Go have a chat you lonely dork.
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #a81111;
  }
  .logout {
    display : flex;
    margin-left:auto;
    margin-top: -180px;
    padding: 2rem;
  }
  .spli {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
