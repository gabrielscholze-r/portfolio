import './DevlogTag.css'

const tagStyles = {
    "Personal Projects": { color: "#3fb950", bg: "rgba(63,185,80,0.12)",   border: "rgba(63,185,80,0.3)"   },
    "Infrastructure":    { color: "#ffa657", bg: "rgba(255,166,87,0.12)",  border: "rgba(255,166,87,0.3)"  },
    "Academics":         { color: "#e3b341", bg: "rgba(227,179,65,0.12)",  border: "rgba(227,179,65,0.3)"  },
}

const lightTagStyles = {
    "Personal Projects": { color: "#1a7f37", bg: "rgba(26,127,55,0.1)",    border: "rgba(26,127,55,0.3)"   },
    "Infrastructure":    { color: "#bc4c00", bg: "rgba(188,76,0,0.1)",     border: "rgba(188,76,0,0.3)"    },
    "Academics":         { color: "#9a6700", bg: "rgba(154,103,0,0.1)",    border: "rgba(154,103,0,0.3)"   },
}

export default function DevlogTag({ tags }) {
    return (
        <div className="devlog-tags">
            {tags.map((tag, idx) => {
                const s = tagStyles[tag] || tagStyles["Portfolio"];
                return (
                    <span
                        key={idx}
                        className="devlog-tag"
                        style={{
                            '--tag-color': s.color,
                            '--tag-bg': s.bg,
                            '--tag-border': s.border,
                        }}
                    >
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}
