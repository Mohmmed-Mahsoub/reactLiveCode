import { Outlet } from "react-router-dom";
import Footer from "./footer/footer.component";

const RootLayout = () => {
  return (
    //avoide shrink for layout when the page content height is less than the page height
    <div className="flex-col flex justify-start">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
