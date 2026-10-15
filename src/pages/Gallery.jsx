import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'

// Har photo ka path khud ban jata hai: /images/gallery/<file>.jpg
// Photo na ho to placeholder dikhta hai.
const items = [
    { id: 1, cat: 'Outdoor Lawn', label: 'Grand Lawn', file: 'grand-lawn' },
    { id: 2, cat: 'Indoor Hall', label: 'Main Hall', file: 'main-hall' },
    { id: 3, cat: 'Outdoor Lawn', label: 'Pergola Walkway', file: 'pergola-walkway' },
    { id: 4, cat: 'Decor', label: 'Stage Decor', file: 'stage-decor' },
    { id: 5, cat: 'Dining', label: 'Dining Area', file: 'dining-area' },
    { id: 6, cat: 'Outdoor Lawn', label: 'Floral Entrance', file: 'floral-entrance' },
    { id: 7, cat: 'Decor', label: 'Evening Lights', file: 'evening-lights' },
    { id: 8, cat: 'Indoor Hall', label: 'Hall Seating', file: 'hall-seating' },
    { id: 9, cat: 'Dining', label: 'Live Counters', file: 'live-counters' },
].map((i) => ({ ...i, src: i.src || (i.file ? `/images/gallery/${i.file}.jpg` : undefined) }))
const categories = ['All', 'Outdoor Lawn', 'Indoor Hall', 'Decor', 'Dining']

export default function Gallery() {
    const [filter, setFilter] = useState('All')
    const [current, setCurrent] = useState(null)

    const visible = filter === 'All' ? items : items.filter((i) => i.cat === filter)

    const close = () => setCurrent(null)
    const next = () => setCurrent((c) => (c + 1) % visible.length)
    const prev = () => setCurrent((c) => (c - 1 + visible.length) % visible.length)

    useEffect(() => {
        if (current === null) return
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prev()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [current, visible.length])

    const active = current !== null ? visible[current] : null

    return (
        <>
            <PageHeader
                title="Gallery"
                subtitle="A glimpse of the moments and spaces that make Dewan-e-Khas special."
            />

            <section className="section">
                <div className="container">
                    <div className="tabs">
                        {categories.map((c) => (
                            <button
                                key={c}
                                className={`tab ${filter === c ? 'active' : ''}`}
                                onClick={() => setFilter(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="gallery-grid" key={filter}>
                        {visible.map((item, idx) => (
                            <button
                                key={item.id}
                                className="gallery-item fade-up"
                                onClick={() => setCurrent(idx)}
                                aria-label={`View ${item.label}`}
                            >
                                <Img src={item.src} alt={item.label} label={item.label} n={item.id} height={280} position={item.pos} />
                                <div className="gallery-cap">
                                    <ZoomIn size={20} />
                                    <span>{item.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="cta">
                        <h2>Visit Us in Person</h2>
                        <p>Photos are lovely, but nothing beats seeing the venue yourself.</p>
                        <Link to="/contact" className="btn">Book a Visit</Link>
                    </div>
                </div>
            </section>

            {active && (
                <div className="lightbox" onClick={close}>
                    <button className="lb-close" onClick={close} aria-label="Close"><X size={26} /></button>
                    <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">
                        <ChevronLeft size={30} />
                    </button>
                    <div className="lb-body" onClick={(e) => e.stopPropagation()}>
                        <Img src={active.src} alt={active.label} label={active.label} n={active.id} height="70vh" position={active.pos} />
                        <p className="lb-caption">{active.label}</p>
                    </div>
                    <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">
                        <ChevronRight size={30} />
                    </button>
                </div>
            )}
        </>
    )
}