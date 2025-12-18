import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-info">
          <h1>Arun Kumar Reddy Nakka</h1>
          <p className="tagline">Full Stack Developer | React Specialist | Cloud Engineer</p>
        </div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
