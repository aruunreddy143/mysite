import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      institution: 'Tech University',
      degree: 'Bachelor of Science in Computer Science',
      year: '2014 - 2018',
      details: 'Graduated with Honors, GPA: 3.8/4.0'
    },
    {
      id: 2,
      institution: 'Professional Development',
      degree: 'Advanced React Development Certification',
      year: '2020',
      details: 'Specialized in state management and performance optimization'
    },
    {
      id: 3,
      institution: 'Cloud Platform Certification',
      degree: 'AWS Solutions Architect Associate',
      year: '2021',
      details: 'Certified in designing and deploying scalable cloud solutions'
    }
  ]

  return (
    <section id="education" className="education">
      <h2>Education & Certifications</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="institution">{edu.institution}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
