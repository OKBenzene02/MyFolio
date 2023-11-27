import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png"
import projImg1 from "../../assets/img/university.png"
import projImg2 from "../../assets/img/predictions-app.png"
import projImg3 from "../../assets/img/image-class.png"
import projImg4 from "../../assets/img/audio-class.png"
import projImg5 from "../../assets/img/image-tables.png"
import projImg6 from "../../assets/img/learn-app.png"

const Projects = () => {
  const projectsArray1 = [
    {
      tilte: "Web Application with backend",
      description: "Created a web application for university using React.js with backend support built with flask. Fully functional and simple UI design with aesthetic look.",
      imgURL: projImg1,
      links: "https://github.com/OKBenzene02/StudentFormReg",
    },
    {
      tilte: "Predictions Website",
      description: "Flask-based project utilizes regression techniques to predict Flight, House, and Stock prices with LSTM and ML methods.",
      imgURL: projImg2,
      links: "https://github.com/OKBenzene02/Data-Science-Projects/tree/main/Flight%20Predictions%20App",
    },
    {
      tilte: "Image Classification",
      description: "Image classification using CNN and SVM for predicting Cat/Dog from dataset with 80% accuracy.",
      imgURL: projImg3,
      links: "https://github.com/OKBenzene02/Data-Science-Projects/tree/main/Image%20classification",
    },
  ];

  const projectsArray2 = [
    {
      tilte: "Audio Classification",
      description: "Audio classification using Stacked LSTM with 89% accuracy, analyzing UrbanSound8K dataset.",
      imgURL: projImg4,
      links: "https://github.com/OKBenzene02/Data-Science-Projects/tree/main/Audio%20classification",
    },
    {
      tilte: "Image to Tables",
      description: "Automated solution needed for efficient extraction and analysis of job vacancies from diverse textual sources, enhancing accessibility and overview.",
      imgURL: projImg5,
      links: "https://github.com/OKBenzene02/Data-Science-Projects/tree/main/image%20content%20recognizer",
    },
    {
      tilte: "Plugin Page for SurveySparrow",
      description: "Integrated app: ChatGPT, PowerBI, LeetCode. Tailored programming guides, real-time doubt clearance, performance analytics, user-friendly UI, personal guides storage.",
      imgURL: projImg6,
      links: "https://github.com/OKBenzene02/Learn-X-in-Y",
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              My projects domain includes Machine Learning in python with model
              deployment and Web development with React and vanilla JS.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills md-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab one</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <br />
                    <Row>
                        {
                            projectsArray1.map((project, i) => {
                                return (
                                    <ProjectCard key={i} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <br />
                    <Row>
                        {
                            projectsArray2.map((project, i) => {
                                return (
                                    <ProjectCard key={i} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="colorsharp2" />
    </section>
  );
};

export default Projects;
