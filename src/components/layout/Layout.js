import Header from "../header/Header";
import SideNav from "../sideNav/SideNav";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <div className={classes.layout}>
      <SideNav className={classes.SideNav} />
      <Header className={classes.Header} />
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

export default Layout;
