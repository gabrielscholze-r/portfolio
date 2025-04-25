import React, { useState } from "react";
import "./DevlogItem.css";
import DevlogDetail from "../devlogDetail/DevlogDetail";

export default function DevlogItem({ data, anyOpen, setAny }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!anyOpen) {
      setAny(true);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setAny(false);
    setOpen(false);
  };
  return (
    <>
    <div
      className="w-50 mx-auto d-flex flex-column rounded px-3 py-1 shadow-custom devlog-item"
      onClick={handleOpen}
    >
      <div className="d-flex justify-content-between my-3">
        <h2 className="text-color">{data.title}</h2>
        <p className="h4 text-color"> {data.date}</p>
      </div>
      <h5 className="text-color">{data.description}</h5>
    </div>
      <DevlogDetail data={data} onClose={handleClose} open={open}/>
    </>
  );
}
