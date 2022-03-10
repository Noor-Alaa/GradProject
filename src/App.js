// import { Routes, Route, Link } from "react-router-dom";
// import Layout from "./components/layout/Layout";

// function App() {
//   return (
//     <div className="App">
//       <Layout />
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SystemMonitoring from "./components/content/systemMonitoring/SystemMonitoring";
import Hosts from "./components/content/Hosts/Hosts";

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="systemMonitoring">
        <Route index={true} element={<SystemMonitoring />}></Route>
        <Route path="hosts/details" element={<Hosts />}></Route>
        <Route path="hosts/osInfo" element={<Hosts />}></Route>
        <Route path="hosts/cpuInfo" element={<Hosts />}></Route>
        <Route path="hosts/windowsSecurity" element={<Hosts />}></Route>
        <Route path="hosts/diskInfo" element={<Hosts />}></Route>
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
