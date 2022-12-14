import React from 'react';
import './Projects.css';
import {Container, Row, Col, Card, ProgressBar, Button} from "react-bootstrap";

const Projects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="customCard fw-dark shadow mt-5" style={{ width: 'auto' }}>
                        <Card.Body>
                                <Card.Title>
                                    <h1 id="projects" className="mx-4 mt-3">Projects</h1>
                                </Card.Title>
                            <div className="m-5">
                                <Row>
                                    <Col md={4} sm={12}>
                                        <Card className="projectCard fw-dark shadow" style={{height: 300, width: 350}}>
                                            <Card.Body>
                                                <Card.Title className="text-center">
                                                    <h4>Online Portfolio</h4>
                                                </Card.Title>
                                                <Card.Text>
                                                    <p>&emsp;&emsp;ostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                                    <Button variant="light" href="#" className="viewGithub">View on Github</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <Card className="projectCard fw-dark shadow" style={{width: 350}}>
                                            <Card.Body>
                                                <Card.Title className="text-center">
                                                    <h4>Project 2</h4>
                                                </Card.Title>
                                                <Card.Text>
                                                    <p>&emsp;&emsp;ostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                                    <Button variant="light" href="#" className="viewGithub">View on Github</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <Card className="projectCard fw-dark shadow" style={{width: 350}}>
                                            <Card.Body>
                                                <Card.Title className="text-center">
                                                    <h4>Project 3</h4>
                                                </Card.Title>
                                                <Card.Text>
                                                    <p>&emsp;&emsp;ostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                                    <Button variant="light" href="#" className="viewGithub">View on Github</Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>

                </Col>
            </Row>
        </Container>
    );
};

export default Projects;