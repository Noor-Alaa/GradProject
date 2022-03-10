import classes from "./Header.module.css";

const Header = props => {
  const myClass = `${props.className} ${classes.Header}`;
  return (
    <div className={myClass}>
      <p>Hosts</p>
      <div>
        <img src="/header-svg1.svg" alt="" />
        <img src="/header-svg2.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
