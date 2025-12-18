import React from 'react'
import './Skills.css'

interface SkillCategory {
  category: string
  icon: string
  skills: string[]
  color: string
}

function Skills(){
  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'React Native', 'Redux', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
      color: '#667eea'
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', "Python", 'Java', 'Spring Boot', 'RESTful APIs', 'Microservices'],
      color: '#764ba2'
    },
    {
      category: 'Testing',
      icon: '✅',
      skills: ['Jest', 'React Testing Library', 'Cypress', 'JUnit', 'Mockito'],
      color: '#f093fb'
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'Jenkins', 'Kubernetes', 'CI/CD', 'Docker'],
      color: '#f5576c'
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
      color: '#00b4d8'
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'JIRA', 'Webpack', 'Vite', 'NPM', 'Maven', 'Linux'],
      color: '#00d4aa'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p className="section-subtitle">Expertise in modern web technologies and cloud platforms</p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category" 
            style={{ '--accent-color': category.color } as React.CSSProperties}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
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
