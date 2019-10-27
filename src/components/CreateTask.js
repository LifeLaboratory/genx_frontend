import React, {useState} from 'react';
import {createTask} from "../utils/Api";
import {MapStateEnum} from "../models/MapStateEnum";

function CreateTask(props) {
    const {nodes, setTask} = props

    const [selectedNode, setSelectedNode] = useState("")

    const onCreateTaskClick = () => createTask(selectedNode).then(task => setTask(task))

    return (
        <div>
            <div>
                <select value={selectedNode} onChange={(event) => setSelectedNode(event.target.value)}>
                    {nodes.map(node => <option value={node.id} key={node.id}>{node.id} [{node.status}]</option>)}
                </select>
            </div>
            <div>
                <button onClick={onCreateTaskClick}>Create Task</button>
            </div>
        </div>
    );
}

export default CreateTask;
