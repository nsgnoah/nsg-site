import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const principles = [
  {
    id: '01',
    title: 'Straight talk',
    desc: "If the work isn't a good fit, that gets said up front — along with a better direction if one exists.",
  },
  {
    id: '02',
    title: 'In person',
    desc: 'Most projects start with a conversation, not a form. The relationship matters. So does understanding the problem before touching a keyboard.',
  },
  {
    id: '03',
    title: 'Accountability',
    desc: "Questions get asked until the problem is understood. If something falls short of what was agreed, it gets fixed.",
  },
  {
    id: '04',
    title: 'No agenda',
    desc: "Technology solves specific problems. It doesn't solve all of them. The goal is to use it where it helps and leave it alone where it doesn't.",
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
              One person. No subcontractors. The work gets done by whoever you talk to.
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <img src="/noah.jpg" alt="Noah Greensweig" className="about-photo" />
              <p>
                NSG is a solo practice. That means one person handles every
                conversation, every decision, and every line of work. Clients
                talk directly to whoever is building their thing — because that
                person is the same one who picked up the phone.
              </p>
              <p>
                Most clients aren't looking for a technology partner. They have
                a specific problem — a process that's slow, a system that doesn't
                talk to another system, a task that takes hours and shouldn't.
                The work is to understand that problem, build something that
                solves it, and leave them able to run it on their own.
              </p>
              <p>
                Projects are scoped and priced before anything is built. If the
                finished work falls short of what was agreed, it gets fixed at
                no additional cost. There's no ambiguity about what was promised.
              </p>
              <p>
                The measure of a good project isn't how impressive it looks —
                it's whether the people using it find it useful six months later.
                That's what's being aimed at.
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
            <h2>Something on your mind?</h2>
            <p>Reach out and describe the situation. No obligation, no pitch — just a conversation.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
              <Link to="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
