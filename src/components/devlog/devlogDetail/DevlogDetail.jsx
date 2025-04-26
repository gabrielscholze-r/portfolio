import React from "react";
import "./DevlogDetail.css";
import DevlogTag from "../devlogTag/DevlogTag.jsx";

export default function DevlogDetail({ data, open, onClose }) {
    return (
        <div
            className={`devlog-detail-modal ${
                open ? "open" : ""
            } d-flex flex-column position-fixed top-50 start-50 translate-middle rounded overflow-auto overflow-x-hidden shadow-custom`}
        >
            <div onClick={onClose} className="text-color devlog-detail-close ms-auto mx-4 display-5">
                <p>✕</p>
            </div>

            <h1 className="text-title-color mx-auto text-center fs-3 fs-md-4 fs-sm-5">
                {data.title}
            </h1>

            <div className="w-100 justify-content-center align-items-center text-center mb-2">
                <DevlogTag tags={data.tags} />
            </div>

            <p className="mx-auto text-color fs-6">
                {data.date}
            </p>

            <div className="mt-3">
                {data.paragraphs.map((item, index) => (
                    <p
                        key={index}
                        className="text-left w-75 mx-auto my-3 text-color text devlog-paragraph fs-6"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
