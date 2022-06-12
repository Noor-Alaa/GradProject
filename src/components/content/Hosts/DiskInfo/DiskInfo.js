import { useContext } from "react";
import { HostContext } from "../../../store/store";
import classes from "./DiskInfo.module.css";

const DiskInfo = () => {
  const { host, setHost } = useContext(HostContext);
  return (
    <div className={classes.DiskInfo}>
      <div>
        <ul>
          <li>Disk Number</li>
          <li>Partitions</li>
          <li>Total Space</li>
          {/* <li>Free Space</li> */}
        </ul>
      </div>
      <div>
        <ul>
          <li>{host.disk_info.disk_index}</li>
          <li>{host.disk_info.number_of_partitions}</li>
          <li>{(1 * host.disk_info.disk_size).toFixed(2)}</li>
          {/* <li>53.3GB</li> */}
        </ul>
      </div>
      {/* <div>
        <ul>
          <li>0</li>
          <li>S</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>c</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>0</li>
          <li>E</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>F</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>F</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>F</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>F</li>
          <li>232 GB</li>
          <li>53.3GB</li>
        </ul>
      </div> */}
    </div>
  );
};

export default DiskInfo;
