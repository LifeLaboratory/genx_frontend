import React, {useState, useEffect} from 'react';
import Map from "../components/Map";
import StateDescription from "../components/StateDescription";
import {getNodes} from "../utils/Api";
import {MapStateEnum} from "../models/MapStateEnum";

function MapContainer() {

  const [mapState, setMapState] = useState(MapStateEnum.PINGING)
  const [nodes, setNodes] = useState([]);
  const [task, setTask] = useState(null);

  const onSetTask = (task) => {
    setTask(task)
    setMapState(MapStateEnum.PULLING_NODE_LIST)

    setTimeout(() => {
      setMapState(MapStateEnum.DISTRIBUTE_TASKS)

      setTimeout(() => {
        setMapState(MapStateEnum.GETTING_RESPONSE)

        setTimeout(() => {
          setMapState(MapStateEnum.SUCCESS)
        }, 5000)

      }, 5000)


    }, 5000)
  }

  useEffect(() => {
    setTimeout(() => {
      getNodes().then(nodes => {
        setNodes(nodes)
        setMapState(MapStateEnum.CREATING_TASK)
      })
    }, 1000)
  }, []);


  return <div>
    <Map state={mapState} nodes={nodes} task={task}/>
    <StateDescription state={mapState} nodes={nodes} setTask={onSetTask}/>
  </div>
}

export default MapContainer;
