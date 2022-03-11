import { Routes, Route } from "react-router-dom";
import SystemMonitoring from "./components/content/systemMonitoring/SystemMonitoring";
import Hosts from "./components/content/Hosts/Hosts";
import Details from "./components/content/Hosts/Details/Details";
import OsInfo from "./components/content/Hosts/OsInfo/OsInfo";
import CpuInfo from "./components/content/Hosts/CpuInfo/CpuInfo";
import DiskInfo from "./components/content/Hosts/DiskInfo/DiskInfo";
import WindowsSecurity from "./components/content/Hosts/WindowsSecurity/WindowsSecurity";

function App() {
  return (
    <Routes>
      <Route path="systemMonitoring">
        <Route index={true} element={<SystemMonitoring />}></Route>
        <Route
          path="hosts/details"
          element={
            <Hosts>
              <Details />
            </Hosts>
          }
        ></Route>
        <Route
          path="hosts/osInfo"
          element={
            <Hosts>
              <OsInfo />
            </Hosts>
          }
        ></Route>
        <Route
          path="hosts/cpuInfo"
          element={
            <Hosts>
              <CpuInfo />
            </Hosts>
          }
        ></Route>
        <Route
          path="hosts/windowsSecurity"
          element={
            <Hosts>
              <WindowsSecurity />
            </Hosts>
          }
        ></Route>
        <Route
          path="hosts/diskInfo"
          element={
            <Hosts>
              <DiskInfo />
            </Hosts>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
