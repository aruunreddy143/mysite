import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'LTI Mindtree',
      position: 'Senior React Developer',
      duration: 'Dec 2024 - Present',
      type: 'Current',
      description: [
        'Developing cross-platform React Native and React web applications',
        'Implementing modern UI/UX with responsive design patterns',
        'Collaborating with product and design teams for feature development'
      ]
    },
    {
      id: 2,
      company: 'JP Morgan Chase',
      position: 'Senior Software Engineer (Team Lead)',
      duration: 'Feb 2019 - Dec 2024',
      type: 'Team Lead',
      description: [
        'Managing a team of 10+ developers with focus on delivery excellence',
        'Leading architectural decisions for Executive Dashboard & Roadmap applications',
        'Implementing CI/CD pipelines using Jenkins and AWS/Azure cloud platforms',
        'Optimizing application performance and security across microservices',
        'Mentoring junior developers and conducting technical interviews'
      ]
    },
    {
      id: 3,
      company: 'Cognizant Technology Solutions',
      position: 'Senior Software Engineer',
      duration: 'Sept 2016 - Feb 2019',
      type: 'Full-time',
      description: [
        'Developed and maintained React-based web applications for Verizon telecommunications platform',
        'Implemented Redux state management for complex data flows',
        'Created reusable component libraries and design systems',
        'Collaborated with backend teams on API integration and optimization'
      ]
    }
   
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <p className="section-subtitle">{new Date().getFullYear() - 2008}+ years of building high-performance applications</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < experiences.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="experience-card">
              <div className="card-header">
                <div className="header-left">
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="header-right">
                  <span className="badge badge-primary">{exp.type}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="description">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
