import { useState, useContext } from "react";
import { HostContext } from "../../../store/store";

import { io } from "socket.io-client";
import Processes from "./Process";
import classes from "./CpuInfo.module.css";

// const socket = io("http://localhost:5000");

// socket.on("connect", () => {
//   console.log(socket.id);
// });

const CpuInfo = () => {
  const [showProcesses, setShowProcesses] = useState(false);
  const [processData, setProcessData] = useState(null);
  const toggleProcessess = e => {
    setShowProcesses(prevState => !prevState);

    // socket.emit("processess", 123);
    // socket.on("processData", dummyData => {
    //   setProcessData(dummyData);
    // });
  };
  const { host, setHost } = useContext(HostContext);
  return (
    <>
      <div className={classes.CpuInfoWrapper}>
        <ul>
          <li>Model :{host.cpu_info.model} </li>
          <li> Cores: {host.cpu_info.number_of_cores} </li>
        </ul>
        <ul>
          <li> Clock Speed : {host.cpu_info.current_clock_speed} </li>
          {/* <li>Type : 3 </li> */}
        </ul>
      </div>
      {/* <div className={classes.CpuInfoWrapper}>
        <ul>
          <li>Model : Intel(R) Core(TM) i3-1005G1 </li>
          <li> Cores: 2 </li>
        </ul>
        <ul>
          <li> Clock Speed : 1190 </li>
          <li>Type : 3 </li>
        </ul>
      </div> */}
      <div className={classes.btnWrapper}>
        <button onClick={toggleProcessess} className={classes.btn}>
          More...
        </button>
      </div>
      {showProcesses && <Processes processData={processData} />}
    </>
  );
};

export default CpuInfo;
