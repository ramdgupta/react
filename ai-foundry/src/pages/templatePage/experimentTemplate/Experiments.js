import { Dropdown } from "react-bootstrap";
const Experiments = () => {
  return (
    <div className="subnav-container">
      <Dropdown>
        <Dropdown.Toggle id="experiments">
          EXPERIMENTS
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/newexperiment">NEW EXPERIMENT</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Experiments;