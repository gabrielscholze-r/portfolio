// Inline SVG flags: emoji flags don't render on Windows (they show up as "BR"/"US")

export function BrazilFlag() {
    return (
        <svg viewBox="0 0 140 100" className="flag" aria-hidden="true">
            <rect width="140" height="100" fill="#009c3b" />
            <polygon points="70,10 130,50 70,90 10,50" fill="#ffdf00" />
            <circle cx="70" cy="50" r="21" fill="#002776" />
            <path d="M50 46 Q70 39 90 53" stroke="#fff" strokeWidth="4" fill="none" />
        </svg>
    )
}

export function UsaFlag() {
    const stripes = Array.from({ length: 6 }, (_, i) => i * 2 + 1)
    const stars = []
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            stars.push(<circle key={`${row}-${col}`} cx={12 + col * 18} cy={11 + row * 18} r="3.5" fill="#fff" />)
        }
    }

    return (
        <svg viewBox="0 0 190 130" className="flag" aria-hidden="true">
            <rect width="190" height="130" fill="#b22234" />
            {stripes.map(i => <rect key={i} y={i * 10} width="190" height="10" fill="#fff" />)}
            <rect width="76" height="60" fill="#3c3b6e" />
            {stars}
        </svg>
    )
}
