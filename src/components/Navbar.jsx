import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/menu', label: 'Menu' },
    { to: '/packages', label: 'Packages' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <Link to="/" className="logo" onClick={() => setOpen(false)}>
                    Dewan-e-Khas
                    <small>MARQUEE</small>
                </Link>

                <nav className={`nav-links ${open ? 'open' : ''}`}>
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === '/'}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn nav-cta" onClick={() => setOpen(false)}>
                        Book Now
                    </Link>
                </nav>

                <div className="nav-actions">
                    <ThemeToggle />
                    <button
                        className="burger"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    )
}