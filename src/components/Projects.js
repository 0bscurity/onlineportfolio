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
                                    <h1 className="mx-4 mt-3">Projects</h1>
                                </Card.Title>
                            <div className="spaceEvenly m-5">
                                <Card className="projectCard fw-dark shadow" style={{height: 300, width: 350}}>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            <h4>Online Portfolio</h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="projectCard fw-dark shadow" style={{width: 350}}>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            <h4>Project 2</h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="projectCard fw-dark shadow" style={{width: 350}}>
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            <h4>Project 3</h4>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
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