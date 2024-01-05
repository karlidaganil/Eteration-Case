import "./style.scss";
import Portfeil from "../../assets/icons/Portfeil.png";
import Profile from "../../assets/icons/Profile.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <h3>Eteration</h3>
      <Input placeholder="Search" prefix={<SearchOutlined />} />
      <div>
        <img src={Portfeil} alt="prort" />
        <span> 117.000$ </span>
        <img src={Profile} alt="profile" />
        <span> Anıl</span>
      </div>
    </header>
  );
};

export default Header;
