import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';

const StyledProjectCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.lightBackground};
  transition: ${theme.transitions.standard};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 35px;
`;

const FolderIcon = styled.div`
  color: ${theme.colors.primary};
  font-size: 40px;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  
  a {
    padding: 5px 10px;
    color: ${theme.colors.lightText};
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  color: ${theme.colors.lightText};
  font-size: ${theme.fontSizes.xl};
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const ProjectDescription = styled.div`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  
  li {
    margin-right: 15px;
    margin-bottom: 5px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.xs};
    white-space: nowrap;
  }
`;

const ProjectCard = ({ project }) => {
  const { title, description, tech, github, external } = project;

  return (
    <StyledProjectCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <ProjectTop>
        <FolderIcon>📁</FolderIcon>
        <ProjectLinks>
          {github && (
            <a href={github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {external && (
            <a href={external} aria-label="External Link" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </ProjectLinks>
      </ProjectTop>

      <ProjectTitle>
        <a href={external || github || '#'} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </ProjectTitle>

      <ProjectDescription>{description}</ProjectDescription>

      {tech && (
        <TechList>
          {tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </TechList>
      )}
    </StyledProjectCard>
  );
};

export default ProjectCard;