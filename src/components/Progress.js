import {ProgressBar} from "react-bootstrap";
import React from "react";
import './AboutMe.css';

function Progress(props) {
    const progress = props.progress;
    return <div className="me-4 my-5"><p className="progress-label">{props.skill}</p><ProgressBar variant="success" animated now={progress}/></div>
}

export default Progress;