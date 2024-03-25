import { ENDPOINTS } from "@/api/endPoints";
import { dynamicAxiosRequest } from "@/helpers/utilities/dynamicAxiosRequest";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const DepartmentDetails = () => {
  //get the id prams
  const { id } = useParams();

  const { accessToken } = useSelector((state) => state.auth);

  //fetch data by SWR to easy handle fetching and caching data if there isn't any changes to avoid unnessary requests
  const fetcher = (endPoint) =>
    dynamicAxiosRequest({
      baseUrl: import.meta.env.VITE_BASE_URLL,
      endPoint,
      cusomHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res);
  const {
    data: doctors,
    isLoading,
    error,
  } = useSWR(
    `${ENDPOINTS.departments.getDepartmentDoctors}?department=${id}`,
    fetcher
  );

  console.log("doctors", doctors);

  return (
    <div className="h-screen flex justify-center items-center">
      DepartmentDetails page
    </div>
  );
};

export default DepartmentDetails;
