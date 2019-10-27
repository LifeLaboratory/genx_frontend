import React from 'react';
import {MapStateEnum} from "../models/MapStateEnum";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function Map(props) {
  const {state, nodes} = props

  const renderArrows = () => {
    switch (state) {
      case MapStateEnum.PINGING:
      case MapStateEnum.CREATING_TASK:
        return <use xlinkHref="#g-rows--d-lines"/>
      case MapStateEnum.PULLING_NODE_LIST:
        return <use xlinkHref="#g-rows--d"/>
      case MapStateEnum.DISTRIBUTE_TASKS:
        return <use xlinkHref="#g-rows--d-distribute"/>
      case MapStateEnum.GETTING_RESPONSE:
        return <use xlinkHref="#g-rows--d-get-response"/>
      case MapStateEnum.SUCCESS:
        return <div/>
    }
  }

  const renderPulse = (expectedState) => {

    const blue = 'rgba(0,0,0,0.7)';

    if (state === expectedState) {
      return <animate
        attributeName="stroke-width"
        values="0.3; 5; 0.3"
        dur="3s"
        repeatCount="indefinite"
      />
    }
  }

  const renderNodeColor = (nodeId) => {
    switch (state) {
      case MapStateEnum.PINGING:
      case MapStateEnum.CREATING_TASK:
        return "shadow node node__default node-controller"
      case MapStateEnum.PULLING_NODE_LIST:
      default:
        return `shadow node ${nodeId !== "4" ? "node__green" : "node__red"} node-controller`
    }
  }

  return <div className="map">
    <img src="images/map.jpg" className="map_image"/>

    <svg xmlns="http://www.w3.org/2000/svg"
         height="80vh"
         width="100%"
         viewBox="0 0 100 100"
         className="svg">

      <defs>
        <g id="g-circles--d">
          <circle fill="orangered" r="2" cx="0" cy="0">
            <animate
              attributeName="cy"
              values="0; 4; -3; 4; -4; 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle fill="gold" r="1.5" cx="0" cy="0">
            <animate
              attributeName="cy"
              values="0; -4; 3; -4; 4;  0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle fill="dodgerblue" r="1" cx="0" cy="0">
            <animate
              attributeName="cy"
              values="0; 1; -1; 2; -2; 5; -5; 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g id="g-rows--d-distribute">
          <line x1="40" y1="50" x2="0" y2="30" stroke="blue"/>
          <line x1="1" y1="30" x2="5" y2="36" stroke="blue"/>
          <line x1="0" y1="30" x2="7.5" y2="30" stroke="blue"/>

          <line x1="40" y1="50" x2="90" y2="50" stroke="blue"/>
          <line x1="88" y1="50" x2="83" y2="47" stroke="blue"/>
          <line x1="88" y1="50" x2="83" y2="53" stroke="blue"/>
        </g>

        <g id="g-rows--d-get-response">
          <line x1="40" y1="50" x2="0" y2="30" stroke="blue"/>
          <line x1="38" y1="49" x2="31.5" y2="49" stroke="blue"/>
          <line x1="38" y1="50" x2="35" y2="44" stroke="blue"/>


          <line x1="40" y1="50" x2="90" y2="50" stroke="blue"/>
          <line x1="42" y1="50" x2="47" y2="47" stroke="blue"/>
          <line x1="42" y1="50" x2="47" y2="53" stroke="blue"/>
        </g>

        <g id="g-rows--d-get-success">
          <line x1="40" y1="50" x2="0" y2="30" stroke="blue"/>
          <line x1="38" y1="49" x2="31.5" y2="49" stroke="blue"/>
          <line x1="38" y1="50" x2="35" y2="44" stroke="blue"/>

          <line x1="40" y1="50" x2="90" y2="50" stroke="blue"/>
          <line x1="42" y1="50" x2="47" y2="47" stroke="blue"/>
          <line x1="42" y1="50" x2="47" y2="53" stroke="blue"/>
        </g>

        <g id="g-rows--d">
          <line x1="50" y1="20" x2="40" y2="50" stroke="blue">
            <animate
              attributeName="x2"
              dur="2s"
              begin="1s"
              values="50; 40"
              fill="freeze"
            />

            <animate
              attributeName="y2"
              dur="2s"
              begin="1s"
              values="20; 50"
              fill="freeze"
            />
          </line>
          <line x1="41" y1="47" x2="39" y2="41" stroke="blue"/>
          <line x1="41" y1="47" x2="46" y2="43" stroke="blue"/>
        </g>

        <g id="g-rows--d-lines">
          <line x1="50" y1="20" x2="0" y2="30" stroke="blue" strokeDasharray={"3"}>
            <animate
              attributeName="x2"
              dur="2s"
              begin="1s"
              values="50; 0"
              fill="freeze"
            />

            <animate
              attributeName="y2"
              dur="2s"
              begin="1s"
              values="20; 30"
              fill="freeze"
            />
          </line>
          <line x1="50" y1="20" x2="40" y2="50" stroke="blue" strokeDasharray={"3"}>
            <animate
              attributeName="x2"
              dur="2s"
              begin="1s"
              values="50; 40"
              fill="freeze"
            />

            <animate
              attributeName="y2"
              dur="2s"
              begin="1s"
              values="20; 50"
              fill="freeze"
            />
          </line>

          <line
            x1="50"
            y1="20"
            x2="90"
            y2="50"
            stroke="blue"
            strokeDasharray={"3"}>

            <animate
              attributeName="x2"
              dur="2s"
              begin="1s"
              values="50; 90"
              fill="freeze"
            />

            <animate
              attributeName="y2"
              dur="2s"
              begin="1s"
              values="20; 50"
              fill="freeze"
            />

          </line>

          <line
            x1="50"
            y1="20"
            x2="90"
            y2="10"
            stroke="blue"
            strokeDasharray={"3"}>

            <animate
              attributeName="x2"
              dur="2s"
              begin="1s"
              values="50; 90"
              fill="freeze"
            />

            <animate
              attributeName="y2"
              dur="2s"
              begin="1s"
              values="20; 10"
              fill="freeze"
            />
          </line>
        </g>

      </defs>

      <animate
        attributeName="y"
        values="30; 20; 30"
        dur="4s"
        repeatCount="indefinite"
      />

      {renderArrows()}

      <circle id='controller'
              className="node node__black node-controller"
              cx="50"
              cy="20"
              r="3"
              strokeWidth={"0.8"}
              stroke="rgba(36,36,36,0.5)">
        {renderPulse(MapStateEnum.PINGING)}
        {renderPulse(MapStateEnum.CREATING_TASK)}
      </circle>

      <circle id="1"
              className={renderNodeColor("1")}
              cx="0"
              cy="30"
              r="3"
              strokeWidth={"0.8"}
              stroke="rgba(0,0,0,0.7)">
        />

      </circle>

      <circle id="2"
              className={renderNodeColor("2")}
              cx="40"
              cy="50"
              r="3"
              strokeWidth={"0.8"}
              stroke="rgba(0,0,0,0.7)">
        >
        {renderPulse(MapStateEnum.SUCCESS)}

      </circle>

      <circle id="3"
              className={renderNodeColor("3")}
              cx="90"
              cy="50"
              r="3"
              strokeWidth={"0.8"}
              stroke="rgba(0,0,0,0.7)">

      </circle>

      <circle id="4"
              className={renderNodeColor("4")}
              cx="90"
              cy="10"
              r="3"
              strokeWidth={"0.8"}
              stroke="rgba(0,0,0,0.7)">

      </circle>

    </svg>

  </div>

}

export default Map;
