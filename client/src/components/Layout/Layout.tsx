import { useLocation, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PATHS_WITHOUT_FOOTER = [
  '/bookingConfirmed',
  '/privacyPolicy',
  '/publicOffer'
];

const Layout = () => {
  const location = useLocation();
  const shouldHideFooter = PATHS_WITHOUT_FOOTER.includes(location.pathname);
  
  return (
    <>
      <div className="absolute top-3.5 md:top-5 left-0 right-0 z-50 " >
        <Header/>
      </div>
      <Outlet /> 
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default Layout;