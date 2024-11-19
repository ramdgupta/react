import { Nav, Tab } from "react-bootstrap";
import "./BusinessTemplateDetail.css";
import {
  faAngleLeft,
  faEnvelope,
  faFlask,
  faMessage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import BusinessTemplateCard from "./BusinessTemplateCard";
import DomainCard from "./DomainCard";
import CarouselComponent from "../../../components/CarouselComponent";
import { useNavigate } from "react-router";
import InfoBanner from "../../../components/InfoBanner";
import Nestedtable from "../../../components/NestedTable";
import data from "../../../assets/json/versiondata.json";
import Review from "../../../components/Review";
import screenshot2 from "../../../assets/images/screenshot-2.jpg";

import styled from "styled-components";

const MainImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 420px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;
const BusinessTemplateDetail = () => {
  const navigate = useNavigate();
  const [eventKey, setEventKey] = useState("desc");
  const backButtonNavigation = () => {
    navigate("/business/template/search");
  };

  return (
    <div className="template-detail-container">
      <div style={{ marginRight: "12px" }}>
        {" "}
        <InfoBanner />
      </div>
      <div>
        <button className="btn back-btn" onClick={backButtonNavigation}>
          <FontAwesomeIcon icon={faAngleLeft} />
          BACK
        </button>
      </div>
      <div>
        <h5 className="template-title">abc_ijk_0001</h5>
        <div className="rating-container">
          <span className="star">
            <FontAwesomeIcon icon={faStar} />
            <span>
              <strong>4.3</strong> | 23 rating
            </span>
            <span style={{ marginLeft: "12px", marginRight: "4px" }}>
              {" "}
              <FontAwesomeIcon icon={faFlask} /> 38
            </span>
            <span className="pipe">|</span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              Contact Support
            </span>
            <span style={{ marginLeft: "12px", marginRight: "12px" }}>
              <FontAwesomeIcon icon={faShare} />
              Share
            </span>
          </span>
        </div>
        <div className="template-desc">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et.
          </p>
        </div>
        <div className="template-tags">
          <span className="tag" title="Tag 1">
            Tag 1
          </span>
          <span className="tag" title="Tag 2">
            Tag 2
          </span>
          <span className="tag" title="Tag 3">
            Tag 3
          </span>
        </div>
        <div></div>
      </div>

      <div>
        <Tab.Container id="template-tabs" defaultActiveKey="desc">
          <Nav variant="pills" defaultActiveKey="desc">
            <Nav.Item>
              <Nav.Link eventKey="desc">Detailed Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="editorNotes">Editor’s Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="details">Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="appliedExperiments">
                Applied Experiments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="screenshots">Screen Shots</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="versions">Versions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="installation">Installation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reviews">Reviews</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="desc">
              <Row className="template-content">
                <Col sm={6}>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et. Sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et. Sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                   
                  </p>
                </Col>
                <Col sm={6}>
                  <MainImage>
                    {" "}
                    <img
                      className="desc-img"
                      src={screenshot2}
                      alt="demo-image"
                    ></img>
                  </MainImage>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="editorNotes">
              <Row className="template-content">
                <div className="section-container">
                  <div className="section">
                    <h2>Section 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et. Sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et.
                    </p>
                  </div>
                  <div className="section">
                    <h2>Section 2</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et. Sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et.
                    </p>
                  </div>
                  <div className="section">
                    <h2>Section 3</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="details">
              <Row className="template-content">
                <Row>
                  <Col sm={2}>
                    <div className="template-details">
                      <span>Category</span>
                      <span className="category-name">Category Name</span>
                    </div>
                  </Col>

                  <Col sm={3}>
                    <div className="template-details">
                      <span>Applicability / Domain</span>
                      <span className="category-name">
                        Supply Chain Systems
                      </span>
                    </div>
                  </Col>

                  <Col>
                    <div
                      className="template-details"
                      style={{ border: "none" }}
                    >
                      <span>Support Email ID</span>
                      <span className="category-name">amitsk@email.com</span>
                    </div>
                  </Col>
                </Row>
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="appliedExperiments">
              <Row className="template-content">
                <Row>
                  <Col>
                    <DomainCard />
                  </Col>
                  <Col>
                    <DomainCard />
                  </Col>
                  <Col>
                    <DomainCard />
                  </Col>
                  <Col>
                    <DomainCard />
                  </Col>
                  <Col>
                    <DomainCard />
                  </Col>
                </Row>
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="screenshots">
              <Row className="template-content">
                <CarouselComponent />
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="versions">
              <div className="template-content">
                <Nestedtable data={data} />
              </div>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="installation">
              <Row className="template-content">
                <div className="section-container">
                  <div className="section">
                    <h2>Section 1</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et. Sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et.
                    </p>
                  </div>
                  <div className="section">
                    <h2>Section 2</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et. Sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et.
                    </p>
                  </div>
                  <div className="section">
                    <h2>Section 3</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="reviews">
              <Row className="template-content">
                <Review />
              </Row>
              <Row className="template-recommend">
                <h4>Recommended Business Solution Templates</h4>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
                <Col sm={3}>
                  <BusinessTemplateCard />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};
export default BusinessTemplateDetail;
