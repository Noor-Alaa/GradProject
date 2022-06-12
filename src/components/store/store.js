import { createContext, useState } from "react";

const initialHostContext = {
  host: {
    _id: "62a50819fe6c06fab2b09013",
    uuid: "8D1E30E9-9C20-EA11-80D3-089798896D58",
    memory: "12288.0",
    hostName: "Abdelrahman",
    uptime: {
      days: "1",
      hours: "7",
      minutes: "40",
    },
    os_info: {
      name: "Microsoft Windows 10 Pro Education",
      version: "10.0.19044",
      build: "19044",
      arch: "64-bit",
    },
    cpu_info: {
      model: "Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz",
      current_clock_speed: "1190",
      number_of_cores: "2",
    },
    windows_security_center: {
      antivirus: "Good",
      firewall: "Good",
      autoupdate: "Good",
      windows_security_center_service: "Good",
      user_account_control: "Good",
    },
    disk_info: {
      disk_index: "1",
      disk_size: "488382.275390625",
      id: "\\\\.\\PHYSICALDRIVE1",
      number_of_partitions: "3",
      type: "SCSI",
    },
    updatedAt: "2022-06-11T20:03:12.685Z",
    __v: 0,
    status: "offline",
  },
  setHost: () => {},
};

export const HostContext = createContext(initialHostContext);

export default props => {
  const [host, setHost] = useState(initialHostContext.host);

  return (
    <HostContext.Provider value={{ host, setHost }}>
      {props.children}
    </HostContext.Provider>
  );
};
