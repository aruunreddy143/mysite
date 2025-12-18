import './Contact.css'

function Contact() {
  const currentYear = new Date().getFullYear()

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
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Arun Kumar Reddy Nakka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
