import React from "react";
import "./DevlogDetail.css";
export default function DevlogDetail({ data, open, onClose }) {
  return (
    <div
      className={`devlog-detail-modal ${
        open ? "open" : ""
      } d-flex flex-column position-fixed top-50 start-50 translate-middle rounded overflow-auto overflow-x-hidden shadow-custom`}
    >
      <div onClick={onClose} className="text-color devlog-detail-close ms-auto mx-4 display-4">
        <p>✕</p>
      </div>
      <h1 className="text-title-color mx-auto text-center">
        {data.title}
      </h1>
      <p className="h4 mx-auto text-color">
        {data.date}
      </p>
      <div className="mt-3">

      {data.paragraphs.map(item => (
        <p className="text-left h4 w-75 mx-auto my-3 text-color text devlog-paragraph">
            {item}
        </p>
      ))}
      </div>
    </div>
  );
}
