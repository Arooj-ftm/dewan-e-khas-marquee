import { Link } from 'react-router-dom'
import { Landmark, ChefHat, Snowflake, Crown, HeartHandshake, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import { stats } from '../data/siteData'

const highlights = [
    { icon: Landmark, title: 'Grand Hall', text: 'A magnificent hall with space for up to 1500 guests.' },
    { icon: ChefHat, title: 'Expert Chefs', text: 'Freshly prepared, flavourful dishes served with care.' },
    { icon: Snowflake, title: 'Fully Air-Conditioned', text: 'A comfortable atmosphere in every season.' },
]

const values = [
    { icon: Crown, title: 'Royal Experience', text: 'Every guest is welcomed with warmth and treated like royalty.' },
    { icon: HeartHandshake, title: 'Personal Attention', text: 'Our team works closely with you to bring your vision to life.' },
    { icon: Sparkles, title: 'Attention to Detail', text: 'From décor to dining, no detail is left to chance.' },
]
const heroImage = '/images/lawn.jpg'

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="A venue where tradition meets modern luxury, made for the most important day of your life."
            />

            <section className="section">
                <div className="container two-col">
                    <Img src={heroImage} alt="Dewan-e-Khas Marquee lawn" height={440} position="85% center" />                    <div>
                        <span className="eyebrow-left">Our Story</span>
                        <h2 className="big-title">Crafting Celebrations Since 2010</h2>
                        <hr className="divider left" />
                        <p className="lead">
                            Dewan-e-Khas Marquee was created with one goal: to give every
                            family a wedding venue worthy of their dreams. From intimate
                            ceremonies to grand celebrations, we have hosted hundreds of
                            unforgettable events.
                        </p>
                        <p className="lead">
                            Our dedicated team handles everything from catering and décor to
                            lighting and guest service, so you can simply enjoy your special
                            day with your loved ones.
                        </p>
                        <Link to="/contact" className="btn">Book a Visit</Link>
                    </div>
                </div>
            </section>

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

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">The Venue</span>
                        <h2>What Makes Us Special</h2>
                        <hr className="divider" />
                    </div>
                    <div className="grid">
                        {highlights.map((h) => (
                            <div className="card center-card" key={h.title}>
                                <div className="icon-wrap"><h.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{h.title}</h3>
                                <p>{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Our Promise</span>
                        <h2>The Dewan-e-Khas Standard</h2>
                        <hr className="divider" />
                    </div>
                    <div className="grid">
                        {values.map((v) => (
                            <div className="card center-card" key={v.title}>
                                <div className="icon-wrap"><v.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}