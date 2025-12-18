
import './Education.css'

interface Education {
  id: number
  institution: string
  degree: string
  year: string
  details: string
  achievements?: string[]
}

interface Certification {
  id: number
  title: string
  issuer: string
  year: string
}

function Education() {
  const education: Education[] = [
    {
      id: 1,
      institution: 'Osmania University',
      degree: 'Bachelor of Education',
      year: '2008',
      details: 'Distinction Grade (74%)',
      achievements: ['Core focus on technology and education', 'Developed strong foundation in computer science']
    }
  ]

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      year: '2022'
    },
    {
      id: 2,
      title: 'Advanced React Development',
      issuer: 'Udemy',
      year: '2021'
    },
    {
      id: 3,
      title: 'Kubernetes & Docker',
      issuer: 'Linux Academy',
      year: '2020'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2>Education & Certifications</h2>
        <p className="section-subtitle">Continuous learning and professional development</p>
      </div>
      
      <div className="education-content">
        <div className="education-section">
          <h3 className="subsection-title">🎓 Degree</h3>
          <div className="education-list">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="education-header">
                  <div className="education-main">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                  </div>
                  <span className="year">{edu.year}</span>
                </div>
                <p className="details">{edu.details}</p>
                {edu.achievements && (
                  <ul className="achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="subsection-title">📜 Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">✓</div>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
