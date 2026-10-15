import { Link } from 'react-router-dom'

export default function PackageCard({ pkg }) {
    return (
        <div className={`card pkg ${pkg.popular ? 'popular' : ''}`}>
            {pkg.popular && <div className="badge">MOST POPULAR</div>}
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price}</div>
            <small>per head</small>
            <ul>
                {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
            <Link to="/contact" className="btn">Select Package</Link>
        </div>
    )
}