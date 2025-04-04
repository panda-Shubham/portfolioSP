import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme'; // Added theme import

// Import your project images correctly
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #0a192f;
  
  @media (max-width: ${theme.mobileL}) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 2rem 1rem;
  }
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const FeaturedProject = styled(motion.div)`
  margin-bottom: 4rem;
  background-color: #112240;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  height: 400px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    background-color: #1a2f50;
    
    ${ProjectTitle} {
      color: #64ffda;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 3rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    margin-bottom: 2rem;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectImage = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: ${theme.mobileS}) {
    height: 200px;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    background-color: #1a2f50;
    
    h3 {
      color: #64ffda;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 1.25rem;
  }
`;

const ProjectDescription = styled.div`
  background-color: #112240;
  padding: 1.5rem;
  border-radius: 4px;
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  gap: 1rem;
  
  li {
    color: #64ffda;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin: 0.75rem 0;
    
    li {
      font-size: 0.85rem;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #ccd6f6;
    font-size: 1.2rem;
    
    &:hover {
      color: #64ffda;
    }
  }
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    
    a {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: ${theme.mobileS}) {
    a {
      font-size: 1rem;
    }
  }
`;

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Featured Project 1',
      description: 'Developed and fully deployed a personal portfolio website using React.js, Framer Motion, ES6+ JavaScript, and CSS3, showcasing projects and skills with smooth and responsive design.',
      image: project1, // Changed to use imported image
      technologies: ['React', 'Framer', 'ESS6+ JS', 'CSS3'],
      githubLink: 'https://github.com/panda-Shubham/portfolioSP',
      liveLink: 'https://panda-shubham.github.io/portfolioSP/'
    },
    {
      title: 'Featured Project 2',
      description: 'Developed a Scream Detection and Threat Analysis model using AI/ML techniques, leveraging YIN algorithm for pitch detection and neural networks for real-time audio classification.',
      image: project2, // Changed to use imported image
      technologies: ['Python', 'TensorFlow', 'Yin Algo', 'CNN'],
      githubLink: 'https://github.com/panda-Shubham/Scream_Detection_Threat_Analysis',
      liveLink: '#'
    },
    {
      title: 'Featured Project 3',
      description: 'An e-commerce platform with user authentication, product catalog, and payment processing. Built with MERN stack.',
      image: project3, // Changed to use imported image
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/panda-Shubham/e-commerce',
      liveLink: '#'
    }
  ];

  const otherProjects = [
    
    {
      title: 'Project 1',
      description: 'Designed and developed a 2D game titled Space Defence using Python and Pygame, featuring AI-integrated enemy behavior and dynamic gameplay mechanics.',
      technologies: ['Pygame', 'Python'],
      githubLink: 'https://github.com/panda-Shubham/1st_Py_Game',
      liveLink: '#'
    },
    {
      title: 'Project 2',
      description: 'Completed a series of Google Arcade Labs on AI and ML technologies',
      technologies: ['Generative AI', 'LLM'],
      githubLink: '#',
      liveLink: 'https://www.cloudskillsboost.google/public_profiles/b8edb6ea-a5a7-438a-8022-628588bbbe7e'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Some Things I've Built</SectionTitle>
          
          {/* Featured Projects */}
          {featuredProjects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <FeaturedProject
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectContent>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechList>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </ProjectLinks>
                </ProjectContent>
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
              </FeaturedProject>
            </React.Fragment>
          ))}
          
          <SectionTitle>Other Noteworthy Projects</SectionTitle>
          
          {/* Other Projects */}
          <ProjectsGrid>
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <p>{project.description}</p>
                <TechList>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </TechList>
                <ProjectLinks>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </ProjectLinks>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;