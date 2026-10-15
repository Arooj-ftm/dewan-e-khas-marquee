import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { services } from '../data/siteData'

export default function Services() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="Complete wedding solutions, handled by one dedicated team."
            />

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">What We Offer</span>
                        <h2>Everything for Your Big Day</h2>
                        <hr className="divider" />
                        <p>From the first plate to the last dance, we take care of every detail.</p>
                    </div>
                    <div className="grid">
                        {services.map((s) => (
                            <div className="card" key={s.title}>
                                <div className="icon-wrap"><s.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="cta">
                        <h2>Let's Plan Your Perfect Wedding</h2>
                        <p>Tell us your date and guest count, and we will take care of the rest.</p>
                        <Link to="/contact" className="btn">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    )
}