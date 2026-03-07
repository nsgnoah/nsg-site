import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  {
    id: '01',
    title: 'Websites',
    desc: 'A site that says what you do and works when someone lands on it. Marketing pages, staff portals, booking pages, dashboards — built to last and easy to hand off.',
    tags: ['Marketing Sites', 'Portals', 'Dashboards'],
  },
  {
    id: '02',
    title: 'Custom Software',
    desc: 'When the off-the-shelf tool almost works but never quite does. Scheduling systems, intake forms, client portals, inventory trackers — built around the way your operation actually runs, not the other way around.',
    tags: ['Scheduling', 'Intake Forms', 'Inventory', 'Portals'],
  },
  {
    id: '03',
    title: 'AI Training',
    desc: 'Practical sessions for people who want to use AI tools in their daily work — writing, research, operations, communications. No tech background required. No hype included.',
    tags: ['Workshops', 'All Roles', 'Daily Tools'],
  },
  {
    id: '04',
    title: 'Automation',
    desc: 'Repetitive tasks that happen every day are good candidates to stop doing by hand. Data entry, report generation, file routing, notifications — connected up and running on their own.',
    tags: ['Workflows', 'Integrations', 'Notifications'],
  },
  {
    id: '05',
    title: 'Internal Tools',
    desc: 'The spreadsheet that runs your business deserves to be something better. Contract trackers, project boards, finance dashboards, operations logs — built for the people who open them every morning.',
    tags: ['Operations', 'Finance', 'Project Tracking'],
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
              Things get built, handed over, and used.
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
            <h2>Something specific in mind?</h2>
            <p>Describe what you're dealing with and we'll go from there.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
