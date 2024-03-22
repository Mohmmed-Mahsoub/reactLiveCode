import { redirect } from "react-router-dom";

export const protectRoute = (isUserLogenedIn, currPage) => {
  //protect login page if user is logged in
  if (isUserLogenedIn && currPage == "login") {
    return redirect("/"); // Redirect to home page

    //protect the other pages if user is NOT logged in
  } else if (!isUserLogenedIn && currPage != "login") {
    return redirect("/login"); // Redirect to login page
  }

  return null; // No redirection needed
};
