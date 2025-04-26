import { useState } from "react";
import "./DevlogItem.css";
import DevlogDetail from "../devlogDetail/DevlogDetail";
import DevlogTag from "../devlogTag/DevlogTag.jsx";

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
            className="devlog-item w-50 w-md-75 w-sm-100 mx-auto d-flex flex-column rounded px-3 py-2 shadow-custom"
            onClick={handleOpen}
        >
          <div>
            <div className="d-flex flex-column flex-md-row justify-content-between my-3">
              <h2 className="text-color fs-4 fs-md-5 fs-sm-6 text-center text-md-start">{data.title}</h2>
              <p className="text-color fs-6 text-center text-md-end">{data.date}</p>
            </div>
            <div className="text-center">
              <DevlogTag tags={data.tags} />
            </div>
          </div>

          <h5 className="text-color fs-6 text-center text-md-start mt-3">{data.description}</h5>
        </div>

        <DevlogDetail data={data} onClose={handleClose} open={open}/>
      </>
  );
}
