import "./ExperimentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ExperimentCard = ({ title, noOfTemplate,link }) => {
  return (
    <div
      className={
        noOfTemplate
          ? "experiment-card col"
          : "template-card col exptemp-background "
      }
    >
      <h6 className="title">{title}</h6>
      {noOfTemplate && <p className="template-count">{noOfTemplate}</p>}
       <Link to={link}><FontAwesomeIcon icon={faArrowRight} /></Link>
    </div>
  );
};
export default ExperimentCard;
