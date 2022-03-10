import SystemMonitoring from "./systemMonitoring/SystemMonitoring";
import Hosts from "./Hosts/Hosts";
const Content = props => {
  return (
    <div className={props.className}>
      <Hosts />
    </div>
  );
};

export default Content;
