import React from "react";

import './Task.css';

const Task = ({task}) => {
    return <div className="Task-container">{task.title}</div>;
}

export default Task;