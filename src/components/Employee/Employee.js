import "./Employee.css";

export const Employee = ({ name, image, role, backgroundColor }) => {
  return (
    <div className="employee">
      <div className="header" style={{ backgroundColor:  backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};
