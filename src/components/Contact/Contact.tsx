import './Contact.css'

function Contact(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

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
              </a>
          <a href="tel:+447405542771" className="contact-btn">
            <span className="btn-icon">📱</span>
            <span className="btn-text">Phone</span>
            </a>
          <a href="https://www.linkedin.com/in/arun-kumar-reddy-nakka-44ba7553/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <span className="btn-icon">💼</span>
            <span className="btn-text">LinkedIn</span>
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
