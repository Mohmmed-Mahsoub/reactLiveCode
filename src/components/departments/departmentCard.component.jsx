const DepartmentCard = ({ departData: { name } }) => {
  return (
    <div className="bg-blue-50 p-6">
      <div>{name}</div>
    </div>
  );
};

export default DepartmentCard;
