import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const empty = {
    name: '',
    phone: '',
    email: '',
    date: '',
    event: '',
    guests: '',
    message: '',
}

export default function Contact() {
    const [form, setForm] = useState(empty)
    const [sent, setSent] = useState(false)

    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const submit = (e) => {
        e.preventDefault()
        // Backend baad mein yahan connect hoga
        console.log('Inquiry:', form)
        setSent(true)
        setForm(empty)
    }

    const info = [
        { icon: MapPin, title: 'Address', text: 'Dewan-e-Khas Marquee, Rawalpindi, Punjab' },
        { icon: Phone, title: 'Phone', text: '+92 300 0000000' },
        { icon: Mail, title: 'Email', text: 'info@dewanekhas.pk' },
        { icon: Clock, title: 'Opening Hours', text: 'Daily, 10:00 AM – 11:00 PM' },
    ]

    return (
        <>
            <PageHeader
                title="Contact & Booking"
                subtitle="Share your date and details, and our team will get back to you shortly."
            />

            <section className="section">
                <div className="container contact-layout">
                    <div className="card form-card">
                        <h3>Send an Inquiry</h3>

                        {sent ? (
                            <div className="success">
                                <CheckCircle2 size={44} strokeWidth={1.5} />
                                <h4>Thank you!</h4>
                                <p>Your inquiry has been received. Our team will contact you soon.</p>
                                <button className="btn" onClick={() => setSent(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={submit}>
                                <div className="form-grid">
                                    <label>
                                        Full Name *
                                        <input name="name" value={form.name} onChange={update} placeholder="Your name" required />
                                    </label>
                                    <label>
                                        Phone Number *
                                        <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+92 300 0000000" required />
                                    </label>
                                    <label>
                                        Email
                                        <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
                                    </label>
                                    <label>
                                        Event Date *
                                        <input name="date" type="date" value={form.date} onChange={update} required />
                                    </label>
                                    <label>
                                        Event Type *
                                        <select name="event" value={form.event} onChange={update} required>
                                            <option value="">Select event</option>
                                            <option>Barat</option>
                                            <option>Walima</option>
                                            <option>Mehndi</option>
                                            <option>Engagement</option>
                                            <option>Other</option>
                                        </select>
                                    </label>
                                    <label>
                                        Number of Guests
                                        <input name="guests" type="number" min="1" value={form.guests} onChange={update} placeholder="e.g. 500" />
                                    </label>
                                </div>
                                <label className="full">
                                    Message
                                    <textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us about your event..." />
                                </label>
                                <button type="submit" className="btn">Send Inquiry</button>
                            </form>
                        )}
                    </div>

                    <div className="info-col">
                        {info.map((i) => (
                            <div className="info-card" key={i.title}>
                                <div className="icon-wrap"><i.icon size={22} strokeWidth={1.5} /></div>
                                <div>
                                    <h4>{i.title}</h4>
                                    <p>{i.text}</p>
                                </div>
                            </div>
                        ))}
                        <div className="map-box">
                            <MapPin size={28} />
                            <span>Google Map will be added here</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}