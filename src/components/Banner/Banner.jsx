import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Data Scientist"];
  const [text, setText] = useState("");
  const [letterPrint, setLetterPrint] = useState(100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letterPrint);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setLetterPrint((prevLetter) => prevLetter / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetterPrint(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetterPrint(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Liyakhat Yousuf Mogal `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Skilled, intuitive problem solver proficient in Python, ML, and
              seeking an entry-level Data Scientist or Full Stack Web Developer
              role.
            </p>
            <button onClick={() => console.log("this button works")}>
              Let`s connect <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div
                className={
                  isVisible ? "animate__animated animate__bounceIn" : "animate__animated animate__bounceOut"
                }
              >
                  <img src={bannerImg} alt="Banner Image" />
              </div>
            }
          </TrackVisibility>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
