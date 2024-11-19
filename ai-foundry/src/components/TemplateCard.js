import "./TemplateCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const TemplateCard = ({ title, noOfTemplate, link }) => {
  return (
    <div
      className={
        noOfTemplate
          ? "template-card col"
          : "template-card col temp-background "
      }
    >
      <h6 className="template-title">{title}</h6>
      {noOfTemplate && <p>{noOfTemplate}</p>}
      <Link to={link}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};
export default TemplateCard;
