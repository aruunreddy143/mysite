import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-avatar">
            <div className="avatar-circle">AR</div>
          </div>
          <div className="profile-info">
            <h1 className="name">Arun Kumar Reddy Nakka</h1>
            <p className="title">Senior Software Engineer & Team Lead</p>
            <p className="bio">{new Date().getFullYear() - 2008}+ years of expertise in React, Node.js, and Cloud Architecture | Building high-performance applications</p>
            <div className="contact-quick">
              <a href="mailto:arun.kumar.reddy.nakka@gmail.com" className="contact-item">📧 Email</a>
              <a href="tel:+447405542771" className="contact-item">📱 +44 7405 542771</a>
              <a href="https://www.linkedin.com/in/arun-kumar-reddy-nakka-44ba7553/" target="_blank" rel="noopener noreferrer" className="contact-item">🔗 LinkedIn</a>
              <span className="contact-item">📍 UK</span>
            </div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
      <div className="header-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </header>
  )
}

export default Header
