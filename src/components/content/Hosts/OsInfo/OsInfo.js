import classes from "./OsInfo.module.css";

const OsInfo = () => {
  return (
    <div className={classes.OsInfoWrapper}>
      <ul>
        <li>Name : Microsoft Windows 10 Pro </li>
        <li>Build : 19042</li>
      </ul>
      <ul>
        <li> Version : 10.0.19042 </li>
        <li>Arch : 64-bit </li>
      </ul>
      <ul>
        <li>Patch : KB2693643 </li>
      </ul>
    </div>
  );
};

export default OsInfo;
