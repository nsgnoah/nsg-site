import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { posts } from '../data/posts'

function readingTime(post) {
  if (post.body) {
    const words = post.body.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }
  return `Quick read`
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function Blog() {
  return (
    <div className="page-transition">
      <SEO
        title="Blog"
        description="Insights on technology, business tools, automation, and practical strategies for small and mid-sized businesses. Written by NSG."
        path="/blog"
      />
      <section className="blog-page section">
        <div className="container">
          <div className="blog-header">
            <h1>Blog</h1>
            <p>
              Practical thinking on technology, tools, and how businesses
              can put them to work.
            </p>
          </div>

          <div className="blog-list stagger-in">
            {[...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{formatDate(post.date)} · {readingTime(post)}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-read">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
