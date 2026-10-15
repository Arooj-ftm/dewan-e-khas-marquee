import { useState, useEffect } from 'react'

const colors = [
    ['#6b1d33', '#2b0a14'],
    ['#8a6a2c', '#33230a'],
    ['#2f3f3d', '#0f1a19'],
    ['#5a2f5e', '#220f26'],
    ['#7a2434', '#33101a'],
    ['#45452a', '#16160d'],
]

export default function Img({ src, alt = '', label = 'Photo Placeholder', n = 0, height = 260, position = 'center' }) {
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        setFailed(false)
    }, [src])

    if (src && !failed) {
        return (
            <img
                className="img"
                src={src}
                alt={alt}
                loading="lazy"
                style={{ height, objectPosition: position }}
                onError={() => setFailed(true)}
            />
        )
    }

    const [c1, c2] = colors[n % colors.length]
    return (
        <div className="img ph" style={{ height, background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
            <span>{label}</span>
        </div>
    )
}