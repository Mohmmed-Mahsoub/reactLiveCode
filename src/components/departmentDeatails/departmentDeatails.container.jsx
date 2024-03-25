import DoctorCard from "./doctorCard.component";

const DepartmentDetailsContainer = ({ departmentDetailsData }) => {
  return (
    <div className="container mx-auto mt-6">
      <div className="text-center mb-6">Doctors</div>
      <div className="grid grid-cols-3 gap-4">
        {departmentDetailsData.map((departData) => {
          return <DoctorCard key={departData.id} departData={departData} />;
        })}
      </div>
    </div>
  );
};

export default DepartmentDetailsContainer;
