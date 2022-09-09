import {ProgressBar} from "react-bootstrap";
import React from "react";

function Progress(props) {
    const progress = props.progress;
    return <div className="my-4"><p>{props.skill}</p><ProgressBar striped variant="success" animated now={progress}/></div>
}

export default Progress;