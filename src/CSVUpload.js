import React, { createRef, useState } from "react";
import { CSVReader } from "react-papaparse";

const buttonRef = createRef();

const CSVUpload = () => {
  const [classData, setClassData] = useState([]);

  const handleOpenDialog = e => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = async data => {
    console.log("--------------------");
    // console.log(data);
    const newClassData = [];
    await data.forEach(d => {
      newClassData.push(d.data);
      newClassData.slice(0, -1);
      newClassData.slice(newClassData.length - 1);
    });
    // const newClassData = JSON.parse(data);
    // newClassData.push(data);
    console.log("new class data", newClassData);
    console.log("--------------------");
    setClassData(newClassData);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log("--------------------");
    console.log(err);
    console.log("--------------------");
  };

  const handleOnRemoveFile = data => {
    console.log("--------------------");
    console.log(data);
    console.log("--------------------");
  };

  const handleRemoveFile = e => {
    if (buttonRef.current) {
      burronRef.current.removeFile(e);
    }
  };

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
      >
        {({ file }) => (
          <aside
            style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: "40%",
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: "60%"
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20
              }}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
      <div className="results">
        {classData.length > 0 &&
          classData.map(i => {
            console.log(i);
            return (
              <div className="result">
                <p>{i[0]}</p>
                <p>{i[1]}</p>
                <p>
                {`Thank you for registering for this class. \\n \\nYou will receive an email with important information and instructions prior to the start of the class. \\n \\nWebex Link: ${i[2]} \\nPassword: ${i[3]}`}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CSVUpload;
