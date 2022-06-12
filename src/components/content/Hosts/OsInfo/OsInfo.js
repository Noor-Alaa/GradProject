import { useContext } from "react";
import { HostContext } from "../../../store/store";

import classes from "./OsInfo.module.css";

const OsInfo = () => {
  const { host, setHost } = useContext(HostContext);
  return (
    <div className={classes.OsInfoWrapper}>
      <ul>
        <li>Name : {host.os_info.name} </li>
        <li>Build : {host.os_info.build}</li>
      </ul>
      <ul>
        <li> Version : {host.os_info.version} </li>
        <li>Arch : {host.os_info.arch} </li>
      </ul>
      <ul>
        <li>Patch : KB2693643 </li>
      </ul>

      {/* <ul>
        <li>Name : Microsoft Windows 10 Pro </li>
        <li>Build : 19042</li>
      </ul>
      <ul>
        <li> Version : 10.0.19042 </li>
        <li>Arch : 64-bit </li>
      </ul>
      <ul>
        <li>Patch : KB2693643 </li>
      </ul> */}
    </div>
  );
};

export default OsInfo;
