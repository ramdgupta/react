import { Outlet } from "react-router";
import AppRouter from "../AppRouter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";


const AppLayout = () => {
  return (
    <div className="container-fluid" style={{paddingLeft:"0px",paddingRight:"0px"}}>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};
export default AppLayout;
