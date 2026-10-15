import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, UtensilsCrossed } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { menu } from '../data/siteData'

// "Mutton Qorma" -> /images/menu/mutton-qorma.jpg
const slugify = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function DishImage({ name }) {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return (
            <div className="dish-ph">
                <UtensilsCrossed size={36} strokeWidth={1.3} />
            </div>
        )
    }

    return (
        <img
            className="dish-img"
            src={`/images/menu/${slugify(name)}.jpg`}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    )
}

export default function Menu() {
    const categories = Object.keys(menu)
    const [active, setActive] = useState(categories[0])

    return (
        <>
            <PageHeader
                title="Our Menu"
                subtitle="A refined selection of traditional and contemporary dishes, prepared fresh for your guests."
            />

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Exquisite Cuisine</span>
                        <h2>A Feast Worth Remembering</h2>
                        <hr className="divider" />
                        <p>Explore a sample of our dishes. Menus can be fully customised to your preferences.</p>
                    </div>

                    <div className="tabs">
                        {categories.map((c) => (
                            <button
                                key={c}
                                className={`tab ${active === c ? 'active' : ''}`}
                                onClick={() => setActive(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="dish-grid" key={active}>
                        {menu[active].map((d) => (
                            <div className="dish fade-up" key={d.name}>
                                <div className="dish-media">
                                    <DishImage name={d.name} />
                                    {d.special && (
                                        <span className="chef-tag">
                                            <Star size={12} fill="currentColor" /> Chef's Special
                                        </span>
                                    )}
                                </div>
                                <div className="dish-body">
                                    <h3>{d.name}</h3>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="menu-note">
                        Final menu is selected according to your chosen package. Dietary and custom requests are welcome.
                    </p>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="cta">
                        <h2>Want a Custom Menu?</h2>
                        <p>Share your preferences and our chefs will design a menu just for your event.</p>
                        <Link to="/contact" className="btn">Talk to Our Team</Link>
                    </div>
                </div>
            </section>
        </>
    )
}