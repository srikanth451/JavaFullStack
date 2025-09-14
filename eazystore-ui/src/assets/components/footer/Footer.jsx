import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
//import "./Footer.css";

import styles from "./Footer.module.css";
import styled from "styled-components";
import EazyButton from "../EazyButton";

const H1 = styled.h1`
  color: #5b21b6;
  text-align: center;
`;

export default function Footer() {
  const isActive = Math.random() > 0.5;

  const h1Styling = {
    textAlign: "center",
    color: isActive ? "red" : "black",
  };

  return (
    <>
      {/* <H1>Demo of Styled Components from footer</H1>
      <EazyButton $primary>Submit</EazyButton> */}
      {/* <h1
        className={`${styles["my-heading"]} ${
          isActive ? styles["primary-color"] : styles["secondary-color"]
        }`}
      >
        Demo of Global CSS Scope from Home{" "}
      </h1> */}
      {/* <h1 style={{ textAlign: "center", color: "#5b21b6" }}>
        {" "}
        Demo of Global CSS Scope from Foooter
      </h1> */}

      {/* <h1 className="my-header">Demo of Global CSS Scope from Foooter</h1> */}
      <footer className={styles.footer}>
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          className={styles["footer-icon"]}
          aria-hidden="true"
        />
        by
        <a href="https://eazybytes.com/" traget="_blank" rel="noreferrer">
          eazybytes
        </a>
      </footer>
    </>
  );
}
