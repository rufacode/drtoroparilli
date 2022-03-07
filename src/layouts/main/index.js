import { Outlet } from "react-router-dom";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import {useLocation} from "react-router-dom";

// ----------------------------------------------------------------------

export default function MainLayout() {
  // const { pathname } = useLocation()
  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>


      <MainFooter />
    </>
  );
}
