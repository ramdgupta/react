import "./BusinessTemplateList.css";
import DataTable from "./DataTable";
import { useState } from "react";
import { useNavigate } from "react-router";

const BusinessTemplateList = ({}) => {
  const navigate=useNavigate();

  const [rowData, setRowData] = useState([
    {
      id: 1,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 2,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 3,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 4,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 5,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 6,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 7,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 8,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 9,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
    {
      id: 10,
      template_name: "Demo Template",
      path: "https://demopath.com",
      description: "Lorem ipsum dolor sit amet nisi ut ex",
      domain: "demo-domain",
      usage_volume: "20",
      rating: 4.3,
    },
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Business Solution Template Name",
      field: "template_name",
      filter: true,
      maxWidth:300
    },
    // { headerName: "Path", field: "path", filter: true, maxWidth: 100 },
    {
      headerName: "Description",
      field: "description",
      filter: true,
      maxWidth:300
    },
    {
      headerName: "Domain",
      field: "domain",
      filter: true,
    },
    {
      headerName: "Usage Volume",
      field: "usage_volume",
      filter: "true",
      
    },
    { headerName: "Rating", field: "rating", filter: "true", maxWidth: 100 },
  ]);

  const editTemplate=(e)=>{
    console.log(e);
    

  }
 const rowClickedHandler=(e)=>{
  console.log(e.data.id);
  navigate(`/business/template/detail/${e.data.id}`);
  
 }

  return (
    <div style={{margin:"12px",width:"100%"}}>
      <DataTable
        columns={columnDefs}
        rows={rowData}
        label={"Search Business tamplate Product"}
        onEdit={editTemplate}
        onRowClicked={rowClickedHandler}
      />
    </div>
  );
};
export default BusinessTemplateList;
