import { Col } from "react-bootstrap";

const ProjectCard = ({ imgURL, title, description, links }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}<br /><a href={links} target="_blank" rel="noopener noreferrer">Know more about it</a></span>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard