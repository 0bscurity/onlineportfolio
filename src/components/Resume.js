import React from 'react';
import './Resume.css';
import {Container, Row, Col, Card, Button} from "react-bootstrap";


const Resume = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="customCard fw-dark shadow my-5" style={{ width: 'auto' }}>
                        <Card.Body>
                            <Card.Title>
                                <h1 id="resume" className="mx-4 mt-3 text-center">Resume</h1>
                            </Card.Title>
                            <div className="spaceEvenly m-5">
                                <iframe className="spaceEvenly"
                                        src="https://docs.google.com/document/d/e/2PACX-1vRjm8IUb0efuSenNfR5mRgFRQ9pyduEfk64ZHQc_BFQjUbGLQ5UvJYQN1clAedkmCyuQUkx_kju-rpO/pub?embedded=true"
                                        width="70%"
                                        height="950px"
                                        allowFullScreen>
                                </iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;