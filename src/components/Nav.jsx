import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

function MobileMenu({ onClose }) {
  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <motion.div
      className="mobile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <motion.div
        className="mobile-overlay-backdrop"
        onClick={onClose}
      />

      <motion.div
        className="mobile-overlay-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mobile-overlay-header">
          <Link to="/" onClick={onClose} className="nav-wordmark">NSG</Link>
          <button
            className="nav-toggle open"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-overlay-nav">
          <ul>
            {navItems.map((item, i) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{
                  duration: 0.35,
                  delay: 0.12 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="mobile-overlay-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/contact" onClick={onClose} className="nav-cta mobile-cta">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const toggleRef = useRef(null)

  // Close on route change
  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Body scroll lock (iOS Safari compatible)
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
    } else {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      if (top) {
        window.scrollTo(0, parseInt(top, 10) * -1)
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    requestAnimationFrame(() => toggleRef.current?.focus())
  }

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link to="/" className="nav-wordmark">NSG</Link>

          <button
            ref={toggleRef}
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Desktop links — hidden on mobile via CSS */}
          <ul className="nav-links-desktop">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <Link to="/contact" className="nav-cta">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile overlay — portaled to body to escape nav stacking context */}
      {createPortal(
        <AnimatePresence>
          {open && <MobileMenu onClose={handleClose} />}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
