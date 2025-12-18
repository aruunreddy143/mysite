import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc',
      position: 'Senior React Developer',
      duration: '2021 - Present',
      description: [
        'Led development of multiple React applications with 10K+ daily users',
        'Implemented state management using Redux and Context API',
        'Optimized application performance, reducing load time by 40%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd',
      position: 'Full Stack Developer',
      duration: '2019 - 2021',
      description: [
        'Developed full-stack web applications using React and Node.js',
        'Designed and implemented RESTful APIs',
        'Collaborated with UX/UI team to implement responsive designs',
        'Managed database design and optimization with MongoDB and PostgreSQL'
      ]
    },
    {
      id: 3,
      company: 'StartUp Technologies',
      position: 'Junior Developer',
      duration: '2018 - 2019',
      description: [
        'Built responsive web pages using HTML5, CSS3, and JavaScript',
        'Fixed bugs and improved code quality',
        'Participated in agile development cycles',
        'Assisted in deployment and maintenance of web applications'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <span className="duration">{exp.duration}</span>
            </div>
            <ul className="description">
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
