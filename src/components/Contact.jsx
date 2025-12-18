import './Contact.css'

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:arun.nakka@example.com'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890'
  }

  return (
    <footer id="contact" className="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="contact-links">
          <a href="mailto:arun.nakka@example.com" className="contact-btn email">
            <span className="icon">✉</span>
            Email Me
          </a>
          <a href="tel:+1234567890" className="contact-btn phone">
            <span className="icon">📱</span>
            Call Me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
            <span className="icon">💼</span>
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn github">
            <span className="icon">⚙</span>
            GitHub
          </a>
        </div>

        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://portfolio.example.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Arun Kumar Reddy Nakka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
