import React from 'react';
import './AboutMe.css';
import {Container, Row, Col, Card, ProgressBar, Button} from "react-bootstrap";
import './Progress';
import Progress from "./Progress";

const AboutMe = () => {
    return (

        <Container>
            <Row>
                <Col sm={8}>
                    <Card className="customCard fw-dark shadow mt-5" style={{ width: 'auto' }}>
                        <Card.Body className="m-4">
                            <Card.Title className="fw-bolder">
                                <h1>HI,<br />I'M ANDREW</h1>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Self-Taught Software Developer</Card.Subtitle>
                            <Card.Text className="my-4">
                                &emsp;&emsp;Transitioning from middle school to high school, I performed a lead 3D designer role in a competitive
                                FTC team from 2015 to 2017, designing dozens of parts using industry software such as Creo CAD.
                                Over the next few years I dual-enrolled in community college, working on a Towson University Information
                                Systems transfer program. During this time I gained different industry experience while supporting my studies and
                                scholarships. Throughout my studies I experimented with many programming languages, including but not
                                limited to Java, C++, C#, HTML, CSS, Javascript, and Python.<br /><br />
                            </Card.Text>
                            <Button variant="light" href="#">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card className="customCard fw-dark shadow mt-5" style={{width: '100%'}}>
                        <Card.Body>
                            <Card.Title>
                                <h2 className="m-4">Skills</h2>
                            </Card.Title>
                            <Card.Text>
                                <ul className="skillList">
                                    <Card className="skillCard spaceEvenly"><li>HTML/CSS</li></Card>
                                    <Card className="skillCard spaceEvenly"><li>Javascript</li></Card>
                                    <Card className="skillCard spaceEvenly"><li>Python</li></Card>
                                    <Card className="skillCard spaceEvenly"><li>React</li></Card>
                                    <Card className="skillCard spaceEvenly"><li>Bootstrap</li></Card>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;