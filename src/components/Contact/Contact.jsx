import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg"

const Contact = () => {

    const emptyFormDetails = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formDetails, setFormDetails] = useState(emptyFormDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (name, value) => {
        setFormDetails({
            ...formDetails, 
            [name]: value
        })
    }

    const handleSbubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...")
        let response = await fetch("", {
            method: "POST",
            header: {
                "Content-Type": "Application/json;charset=utf-8", 
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = response.json();
        setFormDetails(emptyFormDetails);
        if (result.code === 200){
            setStatus({sucess: true, message: 'Message sent successfully'})
        } else{
            setStatus({ sucess: false, message: "Something went wrong, please try again later." })
        }
    }


    return(
        <>
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact-us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form method="POST" onSubmit={handleSbubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastname', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('Phone', e.target.value)}/>
                                </Col>
                                <Col className="px-1">
                                    <textarea value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.sucess === false ? "dange": "sucess"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Contact;