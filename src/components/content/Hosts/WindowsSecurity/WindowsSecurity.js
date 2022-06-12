import { useContext } from "react";
import { HostContext } from "../../../store/store";

import classes from "./WindowsSecurity.module.css";

const WindowsSecurity = () => {
  const { host, setHost } = useContext(HostContext);
  return (
    <div className={classes.WindowsSecurityWrapper}>
      <ul>
        <li>Anti Virus : {host.windows_security_center.antivirus} </li>
        <li>
          WSCS : {host.windows_security_center.windows_security_center_service}
        </li>
      </ul>
      <ul>
        <li> Firewall : {host.windows_security_center.firewall} </li>
        <li>UAC :{host.windows_security_center.user_account_control}</li>
      </ul>
      <ul>
        <li>Auto Update : {host.windows_security_center.autoupdate} </li>
      </ul>
      {/* <ul>
        <li>Anti Virus : Enable </li>
        <li> WSCS : Enable </li>
      </ul>
      <ul>
        <li> Firewall : Disable </li>
        <li>UAC : Disable</li>
      </ul>
      <ul>
        <li>Auto Update : Enable </li>
      </ul> */}
    </div>
  );
};

export default WindowsSecurity;
