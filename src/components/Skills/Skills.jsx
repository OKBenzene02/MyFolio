import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg"
import meter2 from "../../assets/img/meter2.svg"
import meter3 from "../../assets/img/meter3.svg"
import colorSharp from "../../assets/img/color-sharp.png"
import "animate.css"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Passionate about Python, ML, and Deep Learning. Eager to launch a Data Science career while nurturing my interest in full-stack web development with React and JavaScript.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Deep Learning</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img alt="" className="background-image-left" src={colorSharp}/>
        </section>

    );
}

export default Skills;