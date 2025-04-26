import {getTagClass} from "../../../util/util.js";

export default function DevlogTag({tags}) {
    return (
        <>
            {
                tags.map((tag, idx) => (
                    <span key={idx} className={`badge ${getTagClass(tag)}`}>
          {tag}
        </span>
                ))
            }
        </>
    );
}