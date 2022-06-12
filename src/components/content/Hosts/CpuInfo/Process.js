import { useState, useContext, useEffect } from "react";
import { HostContext } from "../../../store/store";

import classes from "./Process.module.css";

const Processes = props => {
  const [processData, setProcessData] = useState();
  const { host, setHost } = useContext(HostContext);
  useEffect(() => {
    let response;
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:5000/api/v1/processes/${host._id}?limit=20&page=1`,
        {
          method: "GET",
        }
      );

      if (!data.ok) {
        console.log("failed");
        return;
      }
      response = await data.json();
      console.log(response);
      setProcessData(response);
    };

    fetchData();
  }, [host]);

  return (
    <div className={classes.Processes}>
      <div>
        <ul>
          <li>PID</li>
          <li>Name</li>
          <li>PPID</li>
          {/* <li>User</li> */}
          <li>Path</li>
        </ul>
      </div>
      {processData &&
        processData.data.map((el, i) => (
          <div key={i}>
            <ul>
              <li>{el.pid}</li>
              <li>{el.name}</li>
              <li>{el.pid}</li>
              {/* <li>{el.host}</li> */}
              <li>{el.path}</li>
            </ul>
          </div>
        ))}
      {/* <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>20824</li>
          <li>powershell.exe</li>
          <li>14020</li>
          <li>Ahmed</li>
          <li>C:\\Windows....</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Processes;
