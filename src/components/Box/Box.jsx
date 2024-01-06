import "./style.scss";

const Box = ({ title, children, className }) => {
  return (
    <div className={`box-container ${className}`}>
      <span className="box-title">{title}</span>
      {children}
    </div>
  );
};

export default Box;
