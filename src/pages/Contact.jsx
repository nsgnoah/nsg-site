import { useState } from 'react'
import { motion } from 'motion/react'
import SEO from '../components/SEO'

// Replace with your Formspree form ID after creating one at https://formspree.io
const FORMSPREE_ID = 'xlgwzyop'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          type: form.type,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', type: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-transition">
      <SEO
        title="Contact"
        description="Get in touch with NSG for your next technology project. Web development, custom applications, automation, training, and more. Response within one business day."
        path="/contact"
      />
      <section className="contact-page section">
        <div className="container">
          <div className="contact-header">
            <h1>Start a Conversation</h1>
            <p>
              Send a note. We'll take it from there.
            </p>
          </div>

          <div className="contact-layout">
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ paddingTop: '2rem' }}
              >
                <h2 style={{ marginBottom: '0.5rem' }}>Got it.</h2>
                <p>You'll hear back within one business day.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">What kind of work?</label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select one</option>
                    <option value="Websites">Websites</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI Training">AI Training</option>
                    <option value="Automation">Automation</option>
                    <option value="Internal Tools">Internal Tools</option>
                    <option value="Something Else">Something Else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's the problem you're trying to solve?"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: 'var(--red)', fontSize: '0.9rem' }}>
                    Something went wrong. Try again, or email noah@nsgsolutions.co directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                  {status !== 'sending' && <span>&rarr;</span>}
                </button>
              </form>
            )}

            <div className="contact-info">
              <div className="contact-info-block">
                <h2>Email</h2>
                <p>
                  <a href="mailto:noah@nsgsolutions.co">noah@nsgsolutions.co</a>
                </p>
              </div>
              <div className="contact-info-block">
                <h2>Response Time</h2>
                <p>
                  Every message gets a reply within one business day. If timing
                  is tight, say so.
                </p>
              </div>
<div className="contact-info-block">
                <h2>What Happens Next</h2>
                <p>
                  We meet — in person if possible — to talk through what you're
                  dealing with and what a solution needs to do. From there, you
                  get a plain-language proposal: scope, timeline, price. No
                  commitment until you're ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
