import { NavLink } from "react-router-dom";
import Layout from "../../layout/Layout";
import classes from "./Hosts.module.css";

const Hosts = props => {
  return (
    <Layout>
      <ul className={classes.refetch}>
        <li>last fetched a minute</li>
        <li>
          <img src="/refetch.svg" alt="" />
          <p>Refetch</p>
        </li>
      </ul>
      <div className={classes.wrapper}>
        <p>ABDELRAHMAN</p>
        <div className={classes.container}>
          <ul>
            <li>Status</li>
            <li>Disk space</li>
            <li>RAM</li>
            <li>CPU</li>
            <li>OS</li>
            <li>IP address</li>
          </ul>
          <ul className={classes.imgContainer}>
            <li>
              <img src="/online.svg" alt="" />
              <p>Online</p>
            </li>
            <li>
              <input
                type="range"
                id="cowbell"
                name="cowbell"
                min="0"
                max="100"
                value="40"
                step="10"
              />
              <p>22.55GB available</p>
            </li>
            <li>1.9 GB</li>
            <li>X58-54</li>
            <li>Ubuntu 18.4.0</li>
            <li>192.168.1.11</li>
          </ul>
        </div>
      </div>
      <ul className={classes.detailsNav}>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring/hosts/details"
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring/hosts/osInfo"
          >
            OS Info
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring/hosts/cpuInfo"
          >
            CPU Info
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring/hosts/diskInfo"
          >
            Disk Info
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring/hosts/windowsSecurity"
          >
            Windows Security Center
          </NavLink>
        </li>
      </ul>

      {props.children}
    </Layout>
  );
};

export default Hosts;
