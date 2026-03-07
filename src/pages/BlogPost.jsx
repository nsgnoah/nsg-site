import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import SEO from '../components/SEO'
import { posts } from '../data/posts'

function readingTime(post) {
  if (post.body) {
    const words = post.body.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }
  const totalItems = (post.sections || []).reduce((sum, s) => sum + s.items.length, 0)
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

function renderSections(sections) {
  return sections.map((section) => (
    <div key={section.heading} className="post-section">
      <h2 className="post-section-heading">{section.heading}</h2>
      <ul className="post-resource-list">
        {section.items.map((item) => (
          <li key={item.label}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="post-resource-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="page-transition">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <section className="blog-post-page section">
        <div className="container">
          <div className="blog-post-back">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
          </div>
          <article className="blog-post">
            <header className="blog-post-header">
              <span className="blog-post-date">{formatDate(post.date)} · {readingTime(post)}</span>
              <h1 className="blog-post-title">{post.title}</h1>
            </header>
            <div className="blog-post-body">
              {post.type === 'list'
                ? renderSections(post.sections)
                : <ReactMarkdown components={{ p: ({children}) => <p className="post-paragraph">{children}</p> }}>{post.body}</ReactMarkdown>}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
