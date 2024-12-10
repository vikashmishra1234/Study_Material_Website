import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useSearchParams } from "react-router-dom";

const Read = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("q");
    console.log(url);

    return (
        <div className="">
            {url && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="" style={{ height: "96vh", border: "2px solid red" }}>
                        {/* Render the PDF without plugins or toolbars */}
                        <Viewer fileUrl={url} />
                    </div>
                </Worker>
            )}
        </div>
    );
};

export default Read;
