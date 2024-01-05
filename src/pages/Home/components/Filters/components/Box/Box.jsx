import "./style.scss";

const Box = ({ title, children }) => {
  return (
    <div className="filter-box">
      <span className="box-title">{title}</span>
      {children}
    </div>
  );
};

export default Box;
