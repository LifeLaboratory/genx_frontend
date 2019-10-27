import React, {useState} from 'react';
import {createTask} from "../utils/Api";
import {MapStateEnum} from "../models/MapStateEnum";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function CreateTask(props) {
  const {nodes, setTask} = props

  const [selectedNode, setSelectedNode] = useState("")

  const onCreateTaskClick = () => createTask(selectedNode).then(task => setTask(task))

  return (
    <div>
      {/*<div>
        <select
          value={selectedNode}
          onChange={(event) => setSelectedNode(event.target.value)}>
          {nodes.map(node => <option
            value={node.id}
            key={node.id}>{node.id} [{node.status}]</option>)}
        </select>
      </div>*/}
      <div>
        <Button
          style={{fontSize: 20, fontWeight: 'bold'}}
          className='mt-5 text-dark'
          color='primary'
          variant='contained'
          onClick={onCreateTaskClick}>
          Create task
        </Button>
      </div>
    </div>
  );
}

export default CreateTask;
