import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SEO from '../components/SEO'

const valueProps = [
  {
    number: '01',
    title: 'Fast Delivery',
    desc: 'Projects scoped tightly and delivered on clear timelines. No endless back-and-forth, no mystery deadlines. You get working software, fast.',
  },
  {
    number: '02',
    title: 'Quality Results',
    desc: 'Done right, tested before delivery, and built to last. Everything we build is something your team can rely on and grow with.',
  },
  {
    number: '03',
    title: 'Transparent Pricing',
    desc: "You know exactly what you're paying and what you're getting. No hidden fees and no surprise line items.",
  },
]

export default function Home() {
  return (
    <div className="page-transition">
      <SEO
        title="Home"
        description="NSG is a technology consulting firm helping businesses close the gap between modern tools and everyday operations. Web development, custom applications, automation, training, and systems build-out."
        path="/"
      />
      {/* Hero */}
      <section className="hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-label">Consulting &amp; Development</span>
            <h1 className="hero-title">
              NSG<span className="accent">.</span>
              <span className="sr-only"> - Technology Consulting</span>
            </h1>
            <p className="hero-tagline">Software for people</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
                <span className="hero-arrow">&rarr;</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props section">
        <div className="container">
          <div className="value-props-header">
            <h2>Why NSG</h2>
            <p>Simple commitments, consistently delivered.</p>
          </div>
          <div className="value-grid stagger-in">
            {valueProps.map((v) => (
              <div className="value-card" key={v.number}>
                <div className="value-number">{v.number}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
