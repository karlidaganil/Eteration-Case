const Box = ({ title, children }) => {
  return (
    <div>
      <span>{title}</span>
      {children}
    </div>
  );
};

export default Box;
