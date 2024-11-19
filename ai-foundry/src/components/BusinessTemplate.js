import { Link } from "react-router-dom";
import "./BusinessTemplate.css";
import TemplateCard from "./TemplateCard";

const BusinessTemplate = () => {
  const templataData = [
    {
      id: 1,
      title: "Highly Rated",
      noOfTemplate: 129,
      link:""
    },
    {
      id: 2,
      title: "Most Cloned",
      noOfTemplate: 101,
      link:""
    },
    {
      id: 3,
      title: "Authored By You",
      noOfTemplate: 26,
      link:""
    },
    {
      id: 4,
      title: "Get started on Business Solution Templates ",
      link:"/business/template/create"
    },
  ];
  return (
    <div className="business-template row">
      <h1 className="template-title">Explore Business Solution Templates</h1>
      <p>Available in Enterprise AI Foundry</p>
      {templataData.map((data) => {
        return (
          <TemplateCard
            key={data.id}
            title={data.title}
            noOfTemplate={data.noOfTemplate}
            link={data?.link}
          />
        );
      })}
    </div>
  );
};
export default BusinessTemplate;
