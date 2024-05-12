import React from 'react';

const FileUploadComponent = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        console.log(jsonData);
        onFileUpload(jsonData);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="mt-3">
      <label htmlFor="fileUpload" className="form-label">Upload JSON File:</label>
      <input type="file" id="fileUpload" className="form-control" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadComponent;
