import { Link } from 'react-router-dom'
import { Snowflake, Car, Lightbulb, Users, ShieldCheck, Armchair } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/siteData'

const included = [
    { icon: Snowflake, title: 'Air-Conditioned Hall', text: 'Comfortable in every season.' },
    { icon: Car, title: 'Ample Parking', text: 'Safe space for all your guests.' },
    { icon: Lightbulb, title: 'Ambient Lighting', text: 'Warm, elegant lighting throughout.' },
    { icon: Armchair, title: 'Seating & Tables', text: 'Neatly arranged for every guest.' },
    { icon: Users, title: 'Trained Staff', text: 'Courteous service from start to finish.' },
    { icon: ShieldCheck, title: 'Security', text: 'Dedicated security for the event.' },
]

export default function Packages() {
    return (
        <>
            <PageHeader
                title="Wedding Packages"
                subtitle="Transparent options designed around your guest count and budget."
            />

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Our Packages</span>
                        <h2>Choose What Fits You Best</h2>
                        <hr className="divider" />
                        <p>Prices are per head. Every package can be tailored to your needs.</p>
                    </div>
                    <div className="grid">
                        {packages.map((p) => (
                            <PackageCard key={p.name} pkg={p} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Every Booking Includes</span>
                        <h2>The Essentials, Always Covered</h2>
                        <hr className="divider" />
                    </div>
                    <div className="grid">
                        {included.map((i) => (
                            <div className="card center-card" key={i.title}>
                                <div className="icon-wrap"><i.icon size={26} strokeWidth={1.5} /></div>
                                <h3>{i.title}</h3>
                                <p>{i.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cta">
                        <h2>Need a Custom Package?</h2>
                        <p>Tell us about your event and we will prepare a quote that suits you.</p>
                        <Link to="/contact" className="btn">Request a Quote</Link>
                    </div>
                </div>
            </section>
        </>
    )
}