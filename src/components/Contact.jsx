import './Contact.css'

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p className="contact-intro">Open to collaborations, consulting opportunities, or just a coffee chat!</p>
        </div>
        
        <div className="contact-links">
          <a href="mailto:arun.kumar.reddy.nakka@gmail.com" className="contact-btn">
            <span className="btn-icon">✉</span>
            <span className="btn-text">Email</span>
            <span className="btn-sub">arun.kumar.reddy.nakka@gmail.com</span>
          </a>
          <a href="tel:+447405542771" className="contact-btn">
            <span className="btn-icon">📱</span>
            <span className="btn-text">Phone</span>
            <span className="btn-sub">+44 7405 542771</span>
          </a>
          <a href="https://www.linkedin.com/in/arun-kumar-reddy-nakka-44ba7553/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <span className="btn-icon">💼</span>
            <span className="btn-text">LinkedIn</span>
            <span className="btn-sub">Connect with me</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <span className="btn-icon">⚙</span>
            <span className="btn-text">GitHub</span>
            <span className="btn-sub">View projects</span>
          </a>
        </div>

        <div className="social-section">
          <p className="social-label">Follow me on</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024-2025 Arun Kumar Reddy Nakka. All rights reserved.</p>
          <p className="footer-note">Crafted with <span className="heart">❤</span> using React & Modern Web Technologies</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
