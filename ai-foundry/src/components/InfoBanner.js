import "./InfoBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
const InfoBanner=()=>{
    return(<div className="info-banner">
        <h2><span className="bull-icon"><FontAwesomeIcon icon={faBullhorn} /></span>New Enterprise AI Foundry version available. Know what’s new.</h2>
    </div>);
}
export default InfoBanner;