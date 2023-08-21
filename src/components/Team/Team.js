import Employee from "../Employee";
import "./Team.css";

export const Team = (props) => {
  const bgColor = { backgroundColor: props.secondaryColor };
  const borderColor = { borderColor: props.primaryColor };

  return (
    props.employees.length > 0 && (
      <section className="team" style={bgColor}>
        <h3 style={borderColor}>{props.name}</h3>
        <div className="employees">
          {" "}
          {props.employees.map((employee) => (
            <Employee
              backgroundColor={props.primaryColor}
              key={employee.name}
              name={employee.name}
              role={employee.role}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
