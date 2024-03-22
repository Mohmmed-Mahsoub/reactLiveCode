import { ENDPOINTS } from "@/api/endPoints";
import { dynamicAxiosRequest } from "@/helpers/utilities/dynamicAxiosRequest";
import useSWR from "swr";

const Departments = () => {
  //fetch data by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (endPoint) =>
    dynamicAxiosRequest({
      baseUrl: import.meta.env.VITE_BASE_URLL,
      endPoint,
    }).then((res) => res);
  const {
    data: departments,
    isLoading,
    error,
  } = useSWR(`${ENDPOINTS.departments.getAllDepartments}`, fetcher);
  console.log("departments", departments);
  return (
    <div className="h-screen flex justify-center items-center">
      Departments page
    </div>
  );
};

export default Departments;
