import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'Marketing sites, dashboards, internal tools, customer portals - built with modern technology and ready to go. Fast load times, clean design, and a website you can feel good about.',
    tags: ['Websites', 'Landing Pages', 'Dashboards'],
  },
  {
    id: '02',
    title: 'Custom Applications',
    desc: "Software your business actually uses - scheduling systems, client portals, booking platforms, inventory trackers. If your business runs on spreadsheets or clunky off-the-shelf tools, this is the upgrade. Works on any device, no app store required.",
    tags: ['Custom Software', 'Portals', 'Any Device'],
  },
  {
    id: '03',
    title: 'Technical Education & Training',
    desc: "AI is changing how work gets done, and your team doesn't need to be technical to take advantage of it. We train people across your entire business - finance, marketing, operations, leadership - to use modern tools in ways that actually make their day-to-day easier. Practical, hands-on, no hype.",
    tags: ['All Teams', 'AI Training', 'Workshops', 'Hands-On'],
  },
  {
    id: '04',
    title: 'Process Automation',
    desc: "Identify the repetitive work that's eating your team's time, then eliminate it. Automated workflows, data pipelines, and system integrations that run reliably and save real hours every week.",
    tags: ['Workflows', 'Integrations', 'Data Pipelines', 'Efficiency'],
  },
  {
    id: '05',
    title: 'Tool & Systems Build-Out',
    desc: 'Custom internal tools built for how your business actually operates. From contract management systems to financial dashboards, project trackers to operations platforms - designed for the people who use them, across every department.',
    tags: ['All Departments', 'Custom Tools', 'Internal Platforms'],
  },
]

export default function Services() {
  return (
    <div className="page-transition">
      <SEO
        title="Services"
        description="Web development, custom applications, process automation, technical training, and tool build-outs. Practical technology consulting scoped to deliver measurable outcomes."
        path="/services"
      />
      <section className="services-page section">
        <div className="container">
          <div className="services-header">
            <h1>Services</h1>
            <p>
              Practical solutions for businesses that need things built.
              Every engagement is scoped to deliver a specific, measurable outcome.
            </p>
          </div>

          <div className="services-grid stagger-in">
            {services.map((s) => (
              <div className="service-card" key={s.id}>
                <span className="service-card-number">Service {s.id}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((tag) => (
                    <span className="service-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
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
