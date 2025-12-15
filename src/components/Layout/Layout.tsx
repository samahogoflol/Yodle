import { useLocation, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const PATHS_WITHOUT_FOOTER = [
  '/bookingConfirmed',
];

const Layout = () => {
  const location = useLocation();
  const shouldHideFooter = PATHS_WITHOUT_FOOTER.includes(location.pathname);
  
  return (
    <>
      <Outlet /> 
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default Layout;