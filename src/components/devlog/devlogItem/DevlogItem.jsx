import {useState} from "react";
import "./DevlogItem.css";
import DevlogDetail from "../devlogDetail/DevlogDetail";
import DevlogTag from "../devlogTag/DevlogTag.jsx";

export default function DevlogItem({data, anyOpen, setAny}) {
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
                className="devlog-item mx-auto d-flex flex-column rounded px-3 py-2 shadow-custom"
                onClick={handleOpen}
            >
                <div>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center my-2">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <h2 className="text-color text-center text-md-start fs-5 fs-md-4 m-0">{data.title}</h2>
                            <DevlogTag tags={data.tags}/>
                        </div>
                        <p className="text-color text-center text-md-end fs-6 m-0 mt-2 mt-md-0">{data.date}</p>
                    </div>
                </div>

                <h5 className="text-color text-center text-md-start fs-6 mt-3">{data.description}</h5>
            </div>

            <DevlogDetail data={data} onClose={handleClose} open={open}/>
        </>
    );
}
