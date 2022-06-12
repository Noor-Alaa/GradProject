import { useEffect, useState, useContext } from "react";
import Layout from "../../layout/Layout";
import { HostContext } from "../../store/store";
import { useNavigate } from "react-router-dom";
import classes from "./SystemMonitoring.module.css";

const SystemMonitoring = () => {
  const [hosts, setHosts] = useState();

  const { host, setHost } = useContext(HostContext);

  const navigate = useNavigate();

  useEffect(() => {
    let response;
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/api/v1/hosts", {
        method: "GET",
      });

      if (!data.ok) {
        console.log("failed");
        return;
      }
      response = await data.json();
      console.log(response);
      setHosts(response);
    };

    fetchData();
  }, []);

  const onHostSelect = el => {
    setHost(el);
    console.log(el);
    navigate("/systemMonitoring/hosts/details");
  };

  return (
    <Layout>
      <ul className={classes.wrapper}>
        <li>
          <img src="windows.svg" alt="" />
          <div>
            <p>Windows</p>
            <p>1</p>
          </div>
        </li>
        <li>
          <img src="/linux.svg" alt="" />
          <div>
            <p>Linux</p>
            <p>2</p>
          </div>
        </li>
        <li>
          <img src="/mac.svg" alt="" />
          <div>
            <p>Mac</p>
            <p>1</p>
          </div>
        </li>
        <li>
          <img src="/add.svg" alt="" />
          <div>
            <p>Add</p>
          </div>
        </li>
      </ul>
      <div className={classes.container}>
        <p>Hosts</p>
        <ul>
          <li>Manage enroll secret</li>
          <li>Generate Installer</li>
        </ul>
      </div>
      <div className={classes.inputContainer}>
        <input type="text" placeholder="Search..." />
        <div className={classes.select}>
          <select id="standard-select">
            <option value="0" data-thumbnail="/add.svg">
              All Hosts
            </option>
            {/* <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option> */}
            {hosts &&
              hosts.hostsStatus.map(el => (
                <option value={el.hostName}>{el.hostName}</option>
              ))}
            <option value="Option length">
              Option that has too long of a value to fit
            </option>
          </select>
          {/* <span className={classes.focus}></span> */}
        </div>
      </div>
      <div className={classes.bottomWrapper}>
        <div>
          <ul>
            <li>HostName</li>
            <li>CPU Types</li>
            <li>RAM</li>
            {/* <li>IP address</li> */}
            <li>UP time</li>
            <li>OS type</li>
          </ul>
          <img src="/plus.svg" alt="" />
        </div>
        {hosts &&
          hosts.hostsStatus.map(el => (
            <div>
              <input type="checkbox" name="" id="" />
              <ul onClick={() => onHostSelect(el)}>
                <li>{el.hostName}</li>
                <li>{el.cpu_info.model}</li>
                <li>{el.memory}</li>
                {/* <li>192.168.1.11</li> */}
                <li>
                  Days:{el.uptime.days} Hours:{el.uptime.hours}
                </li>
                <li>{el.os_info.name}</li>
              </ul>
            </div>
          ))}
        {/* <div>
          <input type="checkbox" name="" id="" />
          <ul>
            <li>ABDELRAHMAN</li>
            <li>X58-54</li>
            <li>12.0778</li>
            <li>192.168.1.11</li>
            <li>Days:24 Hours:5</li>
            <li>Ubuntu 18.4.0</li>
          </ul>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <ul>
            <li>ABDELRAHMAN</li>
            <li>X58-54</li>
            <li>12.0778</li>
            <li>192.168.1.11</li>
            <li>Days:24 Hours:5</li>
            <li>Ubuntu 18.4.0</li>
          </ul>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <ul>
            <li>ABDELRAHMAN</li>
            <li>X58-54</li>
            <li>12.0778</li>
            <li>192.168.1.11</li>
            <li>Days:24 Hours:5</li>
            <li>Ubuntu 18.4.0</li>
          </ul>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <ul>
            <li>ABDELRAHMAN</li>
            <li>X58-54</li>
            <li>12.0778</li>
            <li>192.168.1.11</li>
            <li>Days:24 Hours:5</li>
            <li>Ubuntu 18.4.0</li>
          </ul>
        </div> */}
      </div>
    </Layout>
  );
};

export default SystemMonitoring;
