import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideNav.module.css";

const SideNav = props => {
  const [show, setShow] = useState(false);
  return (
    <div className={props.className}>
      <p className={classes.name}>Project Name</p>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          <li>
            <img src="/dashboard.svg" alt="" /> <p>DashBoard</p>
          </li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : "")}
            to="/systemMonitoring"
          >
            <li onClick={() => setShow(true)}>
              <img src="/systemMonitoring.svg" alt="" />{" "}
              <p>System Monitoring</p>
            </li>
          </NavLink>
          {show && (
            <NavLink
              className={navData => (navData.isActive ? classes.active : "")}
              to="/systemMonitoring/hosts/details"
            >
              <li className={classes.host}>
                <img src="/dot.svg" alt="" />
                <p>Host</p>
              </li>
            </NavLink>
          )}
          <li>
            <img src="/securityEvents.svg" alt="" /> <p>Security Events</p>
          </li>
          <li>
            <img src="/securityConfig.svg" alt="" />{" "}
            <p>Security Configuration Assessment</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
