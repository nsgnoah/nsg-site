import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SEO from '../components/SEO'
import { posts } from '../data/posts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const valueProps = [
  {
    number: '01',
    title: 'Service',
    desc: "Busy work isn't the same as good work. The goal is fit — the right solution for what's actually needed.",
  },
  {
    number: '02',
    title: 'Integrity',
    desc: "Technology isn't always the answer. When it's not, that gets said.",
  },
  {
    number: '03',
    title: 'Openness',
    desc: "The gap between what's possible today and what most businesses are using is real. Closing it is the work.",
  },
]

export default function Home() {
  return (
    <div className="page-transition">
      <SEO
        title="Home"
        description="NSG is a technology consultancy focused on work that actually matters — web development, custom applications, automation, and AI training for teams that want to use what's current."
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
            <p className="hero-tagline">Principled software</p>
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
            <p>Rooted in what matters</p>
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

      {/* From the Blog */}
      <section className="value-props section">
        <div className="container">
          <h2>From the Blog</h2>
          <div className="blog-list stagger-in">
            {[...posts]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 2)
              .map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-read">Read →</span>
                </Link>
              ))}
          </div>
          <Link to="/blog" className="blog-card-read" style={{ marginTop: 'var(--space-md)', display: 'inline-block' }}>View all posts →</Link>
        </div>
      </section>
    </div>
  )
}
