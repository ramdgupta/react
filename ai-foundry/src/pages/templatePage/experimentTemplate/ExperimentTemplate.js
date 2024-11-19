import InfoBanner from "../../../components/InfoBanner";
import Sidebar from "../../../components/Sidebar";
import ExperimentForm from "../../../forms/ExperimentForm";
import sidebarItems from "../../../assets/json/experimentSidebar.json";
import { useLocation } from "react-router";
import BusinessTemplateList from "../../../components/BusinessTemplateList";
import CloneExperimentForm from "../../../forms/CloneExperimentForm";

const ExperimentTemplate = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="solution-template">
      <InfoBanner />
      <div className="row">
        <div className="col-sm-2">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="col-sm-10">
          {path.match("/experiment/template/create") && <ExperimentForm />}

          {path.match("/experiment/template/search") && <BusinessTemplateList />}
          {path.match("/experiment/template/clone") && <CloneExperimentForm />}

        </div>
      </div>
    </div>
  );
};
export default ExperimentTemplate;
