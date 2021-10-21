import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile from "./file-sample.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDF = () => {
  return (
    <>
      {" "}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "300px",
          }}
        >
          <Viewer fileUrl={pdfFile} />
        </div>
      </Worker>
    </>
  );
};

export default PDF;
