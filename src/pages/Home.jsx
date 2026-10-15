import { Link } from 'react-router-dom'
import { stats } from '../data/siteData'

const heroImage = '/images/lawn.jpg'

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section
                className="hero hero-full"
                style={heroImage ? { backgroundImage: `linear-gradient(rgba(35,8,16,.45), rgba(20,5,10,.72)), url(${heroImage})`, backgroundPosition: 'center 65%' } : undefined}
            >
                <div className="container hero-inner fade-up">
                    <span className="hero-tag">Rawalpindi's Finest Wedding Venue</span>
                    <h1>Dewan-e-Khas<br />Marquee</h1>
                    <div className="hero-orn">✦ &nbsp; ✦ &nbsp; ✦</div>
                    <p>
                        Where every wedding becomes a royal celebration. A magnificent
                        venue, exquisite cuisine and unmatched hospitality.
                    </p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn">Book Your Date</Link>
                        <Link to="/gallery" className="btn btn-outline">View Gallery</Link>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats">
                <div className="container stats-grid">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <b>{s.value}</b>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta">
                        <h2>Reserve Your Wedding Date Today</h2>
                        <p>Our team is ready to help you plan every detail.</p>
                        <Link to="/contact" className="btn">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}