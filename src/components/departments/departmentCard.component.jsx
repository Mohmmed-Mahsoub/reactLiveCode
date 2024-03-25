import { Link } from "react-router-dom";

const DepartmentCard = ({ departData: { name, id } }) => {
  return (
    <Link to={`/departments/${id}`}>
      <div className="bg-blue-50 p-6">
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default DepartmentCard;
