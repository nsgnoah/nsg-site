import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-wordmark">NSG</Link>
        <span className="footer-text">
          &copy; {new Date().getFullYear()} NSG. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
