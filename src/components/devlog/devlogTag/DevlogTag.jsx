import {getTagClass} from "../../../util/util.js";
import './DevlogTag.css'
export default function DevlogTag({tags}) {
    return (
        <div>
            {tags.map((tag, idx) => (
                <span key={idx} className={`badge ${getTagClass(tag)} d-inline-block align-self-center`}>
          {tag}
        </span>
            ))}
        </div>
    );
}