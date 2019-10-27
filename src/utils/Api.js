import Node from "../models/Node";
import {NodeStatus} from "../models/NodeStatus";
import {TaskStatus} from "../models/TaskStatus";
import Task from "../models/Task";

export const getNodes = async () => {
    return [1, 2, 3, 4].map(i => (new Node(i, i !== 3 ? NodeStatus.running: NodeStatus.blocked)))
}

export const createTask = async (nodeId) => {
    return new Task(1, nodeId, TaskStatus.pending)
}


