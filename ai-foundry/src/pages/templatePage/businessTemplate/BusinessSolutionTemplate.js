import BusinessTemplateList from "../../../components/BusinessTemplateList";
import InfoBanner from "../../../components/InfoBanner";
import Sidebar from "../../../components/Sidebar";
import BusinessTemplateForm from "../../../forms/BusinessTemplateForm";
import "./Template.css";
import sidebardata from "../../../assets/json/businessSidebar.json";
import { useLocation } from "react-router-dom";
const BusinessSolutionTemplate = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="solution-template">
      <InfoBanner />
      <div className="row">
        <div className="col-sm-2">
          <Sidebar items={sidebardata} />
        </div>
        <div className="col-sm-10">
          {path.match("/business/template/create") && <BusinessTemplateForm />}
          {path.match("/business/template/search") && <BusinessTemplateList />}
        </div>
      </div>
    </div>
  );
};
export default BusinessSolutionTemplate;
