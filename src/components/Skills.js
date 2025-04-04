import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme'; // Fixed import path

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #0a192f;
  
  @media (max-width: ${theme.mobileL}) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 2rem 1rem;
  }
`;

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 2px;
    background-color: #64ffda;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    gap: 1.2rem;
  }
`;

const CategoryTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
`;

const SkillCategory = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    background-color: #1a2f50;
    
    ${CategoryTitle} {
      color: #64ffda;
    }
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: #8892b0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '▹';
    color: #64ffda;
    margin-right: 0.5rem;
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Cloud Computing',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Microservices']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Webpack', 'Docker']
    }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Skills & Technologies</SectionTitle>
          
          <SkillsGrid>
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;