import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import me from "../../assets/img/liyakhat.jpg";

const Footer = () => {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    console.log("Hovering:", hovering);
    setHovering(!hovering);
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <div className="about-me" id="about">
            <img src={me} alt="liyakhat" />
            <div className="about-content">
              <h2>About Me!</h2>
              <p>
                A highly skilled, competent, and diligent individual with
                intuitive problem-solving skills. Proficient in PYTHON, Machine
                Learning, Deep learning, and SQL. Strong willingness to exhibit
                my proficiency in Analytical tools, Statistics and Computing
                Methodologies in the professional environment. Looking to start
                the career as an entry-level Data Scientist with a reputed firm
                driven by technology.
              </p>
            </div>
          </div>
          <Col></Col>
          <Col className="text-center text-sm-end"></Col>
          <div className="final-contents">
            <svg
              width="200"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={() => {
                console.log("Mouse Enter");
                handleHover();
              }}
              onMouseLeave={() => {
                console.log("Mouse Leave");
                handleHover();
              }}
              className={`animateLogo ${
                hovering ? "animate__animated animate__rubberBand" : ""
              }`}
            >
              {/* Transparent background */}
              <rect width="50%" height="100%" fill="none" />

              {/* Text element for "MyFilo" with white color for all letters except "F" */}
              <text
                x="50%"
                y="50%"
                fontFamily="Consolas"
                letterSpacing="1px"
                fontWeight="700"
                fontSize="40px"
                fill="#FFFFFF"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                My
                <tspan
                  fill="#AA367C"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  F
                </tspan>
                olio
              </text>
            </svg>
            <div className="final-icons-div">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/liyakhat-yousuf-mogal-54b506221/" alt="linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/liyakhatyousufmogal" alt="facebook" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/liyakhat_yousuf/" alt="facebook" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="instagram" />
                </a>
              </div>
              <p style={{ fontFamily: "consolas" }}>Made with ❤️ OKBenzene</p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
