import classes from "./WindowsSecurity.module.css";

const WindowsSecurity = () => {
  return (
    <div className={classes.WindowsSecurityWrapper}>
      <ul>
        <li>Anti Virus : Enable </li>
        <li> WSCS : Enable </li>
      </ul>
      <ul>
        <li> Firewall : Disable </li>
        <li>UAC : Disable</li>
      </ul>
      <ul>
        <li>Auto Update : Enable </li>
      </ul>
    </div>
  );
};

export default WindowsSecurity;
