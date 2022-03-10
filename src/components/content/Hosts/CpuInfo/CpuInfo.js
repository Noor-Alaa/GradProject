import Processes from "./Process";
import classes from "./CpuInfo.module.css";
import { useState } from "react";

const CpuInfo = () => {
  const [showProcesses, setShowProcesses] = useState(false);

  return (
    <>
      <div className={classes.CpuInfoWrapper}>
        <ul>
          <li>Model : Intel(R) Core(TM) i3-1005G1 </li>
          <li> Cores: 2 </li>
        </ul>
        <ul>
          <li> Clock Speed : 1190 </li>
          <li>Type : 3 </li>
        </ul>
      </div>
      <div className={classes.btnWrapper}>
        <button
          onClick={() => setShowProcesses(prevState => !prevState)}
          className={classes.btn}
        >
          More...
        </button>
      </div>
      {showProcesses && <Processes />}
    </>
  );
};

export default CpuInfo;
