import "./style.scss";
import Portfeil from "../../assets/icons/Portfeil.png";
import Profile from "../../assets/icons/Profile.png";

const Header = () => {
  return (
    <header>
      <h3>Eteration</h3>
      <input type="text" placeholder="Search" />
      <div>
        <img src={Portfeil} alt="profile" />
        <span>117.000</span>
        <img src={Profile} alt="profile" />
        <span>Anıl</span>
      </div>
    </header>
  );
};

export default Header;
