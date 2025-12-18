import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Vue.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Azure', 'CI/CD', 'Webpack', 'Vite']
    },
    {
      category: 'Soft Skills',
      skills: ['Team Leadership', 'Communication', 'Problem Solving', 'Agile Methodology', 'Mentoring']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
