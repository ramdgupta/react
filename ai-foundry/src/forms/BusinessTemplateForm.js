import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import FileUploader from "../components/FileUploader";
import "./BusinessTemplateForm.css";
const BusinessTemplateForm = () => {
    const [fileName, setFileName] = useState("");

    // Handle file input change
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name);
      } else {
        setFileName('Favicon Image');
      }
    };

    const options = [
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag2', label: 'Tag 2' },
        { value: 'tag3', label: 'Tag 3' },
      ];
      const typeOptions = [
        { value: 'type1', label: 'Type 1' },
        { value: 'type2', label: 'Type 2' },
        { value: 'type3', label: 'Type 3' },
      ];




  return (
    <div className="business-template-form">
        <div className="btn-container">
            <button className="btn btn-cancel ">Cancel</button>
            <button className="btn btn-cancel ">Save</button>
            <button className="btn btn-primary btn-save ">Submit</button>
        </div>
      <div className="row" style={{ margin: "12px" }}>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="templateName">
            Business Template Name
          </label>
          <input
            className="form-control"
            id="templateName"
            name="templateName"
            placeholder="Enter Name"
          />
        </div>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="tags">
            Tags
          </label>
            <CustomSelect id="tags" options={options} placeholder="Select Tags"/>
        </div>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="technology">
            Technology
          </label>
          <input
            className="form-control"
            id="technology"
            name="technology"
            placeholder="Enter Technology"
          />
        </div>
      </div>

      <div className="row" style={{ margin: "12px" }}>
        <div className="col-sm-4">
          <label htmlFor="short_description" className="form-label">
            Short Description
          </label>
          <input
            className="form-control"
            id="short_description"
            name="short_description"
           type="text"
            placeholder="Enter Short Description"
          />
        </div>
        <div className="col-sm-4">
            <label className="form-label" htmlFor="development_type"> Development Type</label>
            <CustomSelect options={typeOptions} placeholder="Select Development Type"/>
        </div>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="category">
            Category
          </label>
            <CustomSelect id="category" options={options} placeholder="Select Category"/>
        </div>
        
      </div>

      <div className="row" style={{ margin: "12px" }}>
      <div className="col-sm-4">
          <label htmlFor="detail_description" className="form-label">
            Detail Description
          </label>
          <textarea
            className="form-control"
            id="detail_description"
            name="detail_description"
            rows={5}
            placeholder="Enter Short Description"
          />
        </div>
        <div className="col-sm-4">
            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="emailid">Support Email Id </label>
                    <input type="email" id="emailid"  className="form-control" name="emailid" placeholder="Enter Email"/>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <label className="form-label" htmlFor="version">Version </label>
                    <input   className="form-control" type="text" id="version" name="version" placeholder="Enter Version"/>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="configuration_instructions" className="form-label">
          Configuration Instructions
          </label>
          <textarea
            className="form-control"
            id="configuration_instructions"
            name="configuration_instructions"
            rows={5}
            placeholder="Enter Configuration Instructions"
          />
        </div>
       
      </div>

      <div className="row" style={{ margin: "12px" }}>
      <div className="col-sm-4">
            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="emailid">Category </label>
                    <input type="email" id="emailid"  className="form-control" name="emailid" placeholder="Enter Email"/>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <label className="form-label" htmlFor="domain">Applicability / Domain </label>
                    <input   className="form-control" type="text" id="domain" name="domain" placeholder="Enter Applicability / Domain"/>
                </div>
            </div>
        </div>
       <div className="col-sm-4">
          <label htmlFor="version_detail" className="form-label">
          What's new in this version
          </label>
          <textarea
            className="form-control"
            id="version_detail"
            name="version_detail"
            rows={5}
            placeholder="Enter New Version Details"
          />
        </div>
        <div className="col-sm-4">
          <label htmlFor="installation_details" className="form-label">
          Installation Details
          </label>
          <textarea
            className="form-control"
            id="installation_details"
            name="installation_details"
            rows={5}
            placeholder="Enter Installation Details"
          />
        </div>
      </div>

      <div className="row" style={{ margin: "12px" }}>
      <div className="col-sm-4">
          <label htmlFor="benefits" className="form-label">
          Benefits
          </label>
          <textarea
            className="form-control"
            id="benefits"
            name="benefits"
            rows={5}
            placeholder="Enter Benefits"
          />
        </div>
        <div className="col-sm-4">
        <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="upload_favicon">Upload Favicon</label>
                   <FileUploader placeholder={fileName===""?"Upload Favicon":fileName} onFileUpload={handleFileChange}  />
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <label className="form-label" htmlFor="upload_screenshots">Upload Screenshots </label>
                    <FileUploader placeholder={fileName===""?"Upload Screenshots":fileName} onFileUpload={handleFileChange} />
                </div>
            </div>
        </div>
        <div className="col-sm-4">
        <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="upload_installation_documents">Upload Installation Documents </label>
                    <FileUploader id="upload_installation_documents" placeholder={fileName===""?"Document":fileName} onFileUpload={handleFileChange} />
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <label className="form-label" htmlFor="code">Upload Deployment Package </label>
                    <FileUploader id="code" placeholder={fileName===""?"Code":fileName} onFileUpload={handleFileChange} />
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};
export default BusinessTemplateForm;
