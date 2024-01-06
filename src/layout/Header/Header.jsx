import "./style.scss";
import Portfeil from "../../assets/icons/Portfeil.png";
import Profile from "../../assets/icons/Profile.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useStore from "../../store";

const Header = () => {
  const { getTotaPriceOfChart, setGlobalFilter, globalFilter } = useStore(
    (state) => state
  );

  return (
    <header>
      <h3>Eteration</h3>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={(e) => setGlobalFilter({ searchKey: e.target.value })}
        value={globalFilter.searchKey}
      />
      <div>
        <img src={Portfeil} alt="prort" className="icon-portfeil" />
        <span className="total">{getTotaPriceOfChart()}$</span>
        <img src={Profile} alt="profile" className="icon-profile" />
        <span>Anıl</span>
      </div>
    </header>
  );
};

export default Header;
