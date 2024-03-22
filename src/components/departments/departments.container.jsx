import DepartmentCard from "./departmentCard.component";

const DepartmentsContainer = ({ activeDepartmentsData }) => {
  return (
    <div className="container mx-auto mt-6">
      <div className="text-center mb-6">Active Departments</div>
      <div className="grid grid-cols-3 gap-4">
        {activeDepartmentsData.map((departData) => {
          return <DepartmentCard key={departData.id} departData={departData} />;
        })}
      </div>
    </div>
  );
};

export default DepartmentsContainer;
