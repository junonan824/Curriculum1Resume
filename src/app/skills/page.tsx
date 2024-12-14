import styles from './page.module.css';

// Define skill categories and their respective skills
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 }
    ]
  },
  {
    category: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    category: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'Django', level: 70 }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 70 }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 85 }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className={styles.skillsContainer}>
      <h1>My Skills</h1>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h2>{category.category}</h2>
            <div className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillBarFill} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 