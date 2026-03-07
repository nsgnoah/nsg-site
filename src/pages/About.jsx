import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const principles = [
  {
    id: '01',
    title: 'Honesty',
    desc: "I'm upfront about whether I can help — and if I can't, I'll point you to someone who can.",
  },
  {
    id: '02',
    title: 'Humanity',
    desc: 'I prefer working with people in person, getting to know each other, and building a relationship that has value beyond a transaction.',
  },
  {
    id: '03',
    title: 'Humility',
    desc: 'I ask questions until I understand the issue. If I screw up, I own it and do my best to make it right.',
  },
  {
    id: '04',
    title: 'Non-Evangelism',
    desc: "Technology is great at some things and bad at others. My job is to put it to use where it helps — not to push it where it doesn't.",
  },
]

export default function About() {
  return (
    <div className="page-transition">
      <SEO
        title="About"
        description="NSG is a solo technology consultancy focused on closing the gap between modern tools and business operations. Transparent, honest, and built to hand off."
        path="/about"
      />
      <section className="about-page section">
        <div className="container">
          <div className="about-header">
            <h1>About</h1>
            <p>
              A solo consultancy built on a simple idea:
              leverage technology to help people.
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                NSG is a one-person consulting practice focused on building
                software, automating processes, and training teams. I work
                directly with clients — no layers of abstraction, no game of
                telephone between you and the person doing the work.
              </p>
              <p>
                I started NSG because the gap between what modern technology
                can do and what most businesses are actually using is growing
                fast. Small and mid-sized companies, public entities, and
                lean teams often don't have the resources to keep up with every
                new tool and platform that comes out. But they shouldn't have
                to, and that's what I'm here for.
              </p>
              <p>
                Every project is scoped honestly, priced clearly, and delivered
                with the goal that you won't need me again unless you want to
                build something new. If the work doesn't meet the standard we
                agreed on, I'll make it right.
              </p>
              <p>
                Whether it's a custom application, an internal tool for your operations
                team, or training your staff to use the systems they already
                have — the approach is the same: understand the problem, build
                the solution, hand it over clean.
              </p>
            </div>

            <div className="about-principles stagger-in">
              {principles.map((p) => (
                <div className="principle" key={p.id}>
                  <div className="principle-number">Principle {p.id}</div>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="value-props-header" style={{ marginTop: 'var(--space-2xl)', borderTop: '1px solid var(--gray-200)', paddingTop: 'var(--space-2xl)' }}>
            <h2>Have a project in mind?</h2>
            <p>Let's talk through what you need and figure out the right approach.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
