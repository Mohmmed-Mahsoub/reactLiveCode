import { useDispatch, useSelector } from "react-redux";
import AppRoutes from "./router/AppRoutes";
import { useEffect, useRef } from "react";
import { refreshAccsessToken } from "./appState/slices/authSlice";
import { ENDPOINTS } from "./api/endPoints";
import { isLoggedInWithin24Hours } from "./helpers/utilities/isLoggedInWithin24Hours";
import { changeUrlDirect } from "./helpers/utilities/changeUrlDirect";

function App() {
  const dispatch = useDispatch();
  const { isLoading, refreshToken, timestamp } = useSelector(
    (state) => state.auth
  );

  //stop return useEffect twice and feach data ONLY once
  const effectRan = useRef(false);
  useEffect(() => {
    //the user logged in berore and comes back to tha app
    if (refreshToken) {
      //check if the token needs refresh
      if (!isLoggedInWithin24Hours(timestamp) && effectRan.current === false) {
        dispatch(
          refreshAccsessToken({
            baseUrl: import.meta.env.VITE_BASE_URLL,
            endPoint: ENDPOINTS.auth.refreshUserToken,
            body: {
              refresh: refreshToken, //the current refresh token (which be old)
            },
          })
        ).then((res) => {
          if (!res.payload || !res.payload?.refreshToken) {
            //if couldn't refresh the token redirect to login page to login again
            //you can't use useNavigat because it's outside the react router dom hear
            changeUrlDirect(`${import.meta.env.VITE_BASE_URLL}/login`);
          }
        });
      }
    }

    //clean up useEffect
    return () => {
      effectRan.current = true;
    };
  }, []);
  //show loading until refresh the token if needs to
  return <>{isLoading ? <mainLoader /> : <AppRoutes />}</>;
}

export default App;
