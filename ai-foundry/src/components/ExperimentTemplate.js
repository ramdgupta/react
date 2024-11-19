import ExperimentCard from "./ExperimentCard";
import "./ExperimentTemplate.css";
const ExperimentTemplate=()=>{
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
        title: "Get started on Experiments ",
         link:"/experiment/template/create"
      },
    ];
    return (
      <div className="experiment-template row">
        <h1 className="template-title">Explore Experiments</h1>
        <p>Created in Enterprise AI Foundry</p>
        {templataData.map((data) => {
          return (
            <ExperimentCard
              key={data.id}
              title={data.title}
              noOfTemplate={data.noOfTemplate}
              link={data.link}
            />
          );
        })}
      </div>
    );
  };
  export default ExperimentTemplate;