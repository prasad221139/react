import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img src={LOGO} alt="user-icon" className="user-icon" />
        </ul>
      </div>
    </div>
  );
};
export default Header;
