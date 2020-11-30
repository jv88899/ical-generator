import React, { createRef } from "react";
import { CSVReader } from "react-papaparse";

const buttonRef = createRef();

const CSVUpload = () => {
  const handleOpenDialog = e => {}

  const handleOnFileLoad = data => {}

  const handleOnError = (err, file, inputElem, reason) => {}

  const handleOnRemoveFile = data => {}

  const handleRemoveFile = e => {}

  return (
    <div>
      <h2>Upload a CSV</h2>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      />
      {({ file }) => (
        <aside
          style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
        />
      )}
    </div>
  );
};

export default CSVUpload;
