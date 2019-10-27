import React from 'react';
import {MapStateEnum} from "../models/MapStateEnum";
import CreateTask from "./CreateTask";

function StateDescription(props) {
    const {state, nodes, setTask} = props

    const renderDescription = (state) => {
        switch (state) {
            case MapStateEnum.PINGING:
                return "Pinging"
            case MapStateEnum.CREATING_TASK:
                return <CreateTask nodes={nodes} setTask={setTask}/>
            case MapStateEnum.PULLING_NODE_LIST:
                return "Pulling node list"
            case MapStateEnum.DISTRIBUTE_TASKS:
                return "Distributing tasks"
            case MapStateEnum.GETTING_RESPONSE:
                return "Waiting for responses"
            case MapStateEnum.SUCCESS:
                return "Success"
            default: return ""
        }
    }

    return (
        <div className="console">
            <div className="console__text-container">
                <div className="console__text">
                    {renderDescription(state)}
                </div>

            </div>
        </div>
    );
}

export default StateDescription;
