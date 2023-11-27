import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from '../../assets/img/logo.svg'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "animate.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    console.log("Hovering:", hovering);
    setHovering(!hovering);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" style={{ marginRight: "4rem" }}>
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                setActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                setActiveLink("about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                setActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/liyakhat-yousuf-mogal-54b506221/" alt="linkedin" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/liyakhatyousufmogal" alt="facebook" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/liyakhat_yousuf/" alt="instagram" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="instagram" />
              </a>
              
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let`s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
