export default function PageHeader({ title, subtitle }) {
    return (
        <section className="page-header">
            <div className="container fade-up">
                <span className="hero-tag">Dewan-e-Khas Marquee</span>
                <h1>{title}</h1>
                <div className="hero-orn">✦ &nbsp; ✦ &nbsp; ✦</div>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    )
}