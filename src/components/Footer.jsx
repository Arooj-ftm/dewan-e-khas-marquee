import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <div className="footer-logo">Dewan-e-Khas</div>
                    <p className="footer-sub">MARQUEE</p>
                    <p className="footer-text">
                        Where every wedding becomes a royal celebration. A magnificent
                        venue, exquisite cuisine and unmatched hospitality.
                    </p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>

                <div>
                    <h4>Contact</h4>
                    <div className="contact-row"><MapPin size={16} /> Rawalpindi, Punjab</div>
                    <div className="contact-row"><Phone size={16} /> +92 300 0000000</div>
                    <div className="contact-row"><Mail size={16} /> info@dewanekhas.pk</div>
                    <div className="contact-row"><Clock size={16} /> Daily 10:00 AM – 11:00 PM</div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Dewan-e-Khas Marquee. All rights reserved.
            </div>
        </footer>
    )
}