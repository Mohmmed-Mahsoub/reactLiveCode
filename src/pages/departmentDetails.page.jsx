import { ENDPOINTS } from "@/api/endPoints";
import DepartmentDetailsContainer from "@/components/departmentDeatails/departmentDeatails.container";
import MainLoader from "@/components/general/mainLoader.component";
import NoData from "@/components/general/noData.component";
import ServerError from "@/components/general/serverError.component";
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
    data: departmentDetailsData,
    isLoading,
    error,
  } = useSWR(
    `${ENDPOINTS.departments.getDepartmentDoctors}?department=${id}`,
    fetcher
  );

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : !isLoading && error ? (
        <ServerError />
      ) : departmentDetailsData?.results?.length === 0 ? (
        <NoData text="no Doctors" />
      ) : (
        <DepartmentDetailsContainer
          departmentDetailsData={departmentDetailsData?.results}
        />
      )}
    </>
  );
};

export default DepartmentDetails;
