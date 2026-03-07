import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="page-transition">
      <SEO
        title="404 Not Found"
        description="This page doesn't exist."
        path="/404"
      />
      <section className="section">
        <div className="container">
          <h1 style={{ fontSize: '8rem', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
          <p style={{ marginBottom: '2rem' }}>This page doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Go home</Link>
        </div>
      </section>
    </div>
  )
}
