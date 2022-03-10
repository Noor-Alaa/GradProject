// import Header from "../header/Header";
// import Content from "../content/Content";
// import SideNav from "../sideNav/SideNav";
// import classes from "./Layout.module.css";

// const Layout = () => {
//   return (
//     <div className={classes.layout}>
//       <SideNav className={classes.SideNav} />

//       <Header className={classes.Header} />
//       <Content className={classes.Content} />
//     </div>
//   );
// };

// export default Layout;

import Header from "../header/Header";
import Content from "../content/Content";
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
