import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DomainCard.css";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
const DomainCard = ({ template_name, domain_name }) => {
  return (
    <div className="card domain-card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8">
            <h5>exp_air_den_0346</h5>
            <span style={{color:"#000000",fontSize:"14px",opacity:"0.7"}}>DOMAIN</span> &nbsp;
            <span style={{color:"#000000",fontSize:"12px",opacity:"0.7"}}>Aerospace & Travel</span>
          </div>
          <div className="col-sm-4 arrow-container">
            <div className="circle-arrow">
            <FontAwesomeIcon icon={faRightLong} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DomainCard;
