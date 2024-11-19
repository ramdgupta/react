// src/components/FileUpload.js
import React, { useState } from 'react';
import './FileUploader.css';
import { faUpFromLine} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const FileUploader = (props) => {
  return (
    <div className="file-upload-container">
      <label className="file-upload-label">
        <div className="file-upload-button"><FontAwesomeIcon icon={faUpload}/>Browse</div>
        <input
          type="file"
          onChange={props.onFileUpload}
          className="file-upload-input"
        />
        <span className="file-upload-filename">{props.placeholder}</span>
      </label>
    </div>
  );
};

export default FileUploader;
