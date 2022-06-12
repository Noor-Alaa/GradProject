import { useContext } from "react";
import { HostContext } from "../../../store/store";
import classes from "./Details.module.css";

const Details = () => {
  const { host, setHost } = useContext(HostContext);
  return (
    <div className={classes.detailsWrapper}>
      <ul>
        <li>Host ID : {host._id} </li>
        <li>Status : {host.status} </li>
      </ul>
      <ul>
        <li>Host Name : {host.hostName} </li>
        <li>
          UP Time : Days : {host.uptime.days} Hours : {host.uptime.hours}{" "}
        </li>
        {/* <li>IP Address : 192.168.1.11 </li> */}
      </ul>
      <ul>
        <li>CPU Type : {host.cpu_info.model} </li>
        {/* <li>MAC Address : E4-AA-EA-64-4A-E4</li> */}
      </ul>
      <ul>
        <li>RAM : {host.memory}</li>
      </ul>
      {/* <ul>
        <li>Host ID : 1002 </li>
        <li>Status : Online </li>
      </ul>
      <ul>
        <li>Host Name : ABDELRAHMAN </li>
        <li>IP Address : 192.168.1.11 </li>
      </ul>
      <ul>
        <li>CPU Type : Intel64 </li>
        <li>MAC Address : E4-AA-EA-64-4A-E4</li>
      </ul>
      <ul>
        <li>RAM : 1.9 GB</li>
        <li>UP Time : Days : 2 Hours : 5 </li>
      </ul> */}
    </div>
  );
};

export default Details;
