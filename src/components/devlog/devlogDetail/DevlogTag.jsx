import {getTagClass} from "../../../util/util.js";

export default function DevlogTag({tags}) {
    return (
        <div className="d-flex gap-2 flex-wrap my-2">
            {tags.map((tag, idx) => (
                <span key={idx} className={`badge ${getTagClass(tag)}`}>
          {tag}
        </span>
            ))}
        </div>
    );
}