import "./BusinessTemplateCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Rating from "../../../components/RatingProvider";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const BusinessTemplateCard = () => {
  const handleRate = (rating) => {
    console.log(`User rated: ${rating}`);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="user-details">
          <h6>svg_ijk_0026</h6>
          <span>
            {" "}
            <FontAwesomeIcon icon={faDownload} />
            38
          </span>
        </div>
        <div>
        <Rating initialRating={3} onRate={handleRate} />
        </div>
       
        
      </div>
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </p>
      </div>
      <div className="card-footer">
        <p>Amit K</p>
      </div>
    </div>
  );
};
export default BusinessTemplateCard;
