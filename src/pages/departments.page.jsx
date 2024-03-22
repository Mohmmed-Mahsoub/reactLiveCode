import { ENDPOINTS } from "@/api/endPoints";
import MainLoader from "@/components/general/mainLoader.component";
import ServerError from "@/components/general/serverError.component";
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
    <>
      {isLoading ? (
        <MainLoader />
      ) : !isLoading && error ? (
        <ServerError />
      ) : (
        "data"
      )}
    </>
  );
};

export default Departments;
