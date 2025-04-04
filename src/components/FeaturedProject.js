import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';

const StyledProject = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 10px;
  margin-bottom: 100px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      
      @media (max-width: ${theme.tablet}) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
    }
    
    .project-tech-list {
      justify-content: flex-end;
      
      @media (max-width: ${theme.tablet}) {
        justify-content: flex-start;
      }
      
      li {
        margin: 0 0 5px 20px;
        
        @media (max-width: ${theme.tablet}) {
          margin: 0 10px 5px 0;
        }
      }
    }
    
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      
      @media (max-width: ${theme.tablet}) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    
    .project-image {
      grid-column: 1 / 8;
      
      @media (max-width: ${theme.tablet}) {
        grid-column: 1 / -1;
      }
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  z-index: 2;
  
  @media (max-width: ${theme.tablet}) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  }
`;

const ProjectOverline = styled.p`
  margin: 10px 0;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.xs};
  font-weight: 400;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 20px;
  color: ${theme.colors.lightText};
  font-size: clamp(24px, 5vw, 28px);
  
  @media (max-width: ${theme.tablet}) {
    margin: 0 0 10px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const ProjectDescription = styled.div`
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.lightBackground};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
  
  @media (max-width: ${theme.tablet}) {
    padding: 20px 0;
    background-color: transparent;
  }
  
  p {
    margin: 0;
  }
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;
  
  li {
    margin: 0 20px 5px 0;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.xs};
    white-space: nowrap;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  
  a {
    padding: 10px;
    color: ${theme.colors.lightText};
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const ProjectImage = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.tablet}) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }
  
  a {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    vertical-align: middle;
    
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      
      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }
    
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: ${theme.transitions.standard};
      background-color: ${theme.colors.background};
      mix-blend-mode: screen;
    }
  }
  
  .img {
    border-radius: ${theme.borderRadius};
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media (max-width: ${theme.tablet}) {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }
`;

const FeaturedProject = ({ project }) => {
  const { title, external, tech, github, cover, description } = project;

  return (
    <StyledProject
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <ProjectContent className="project-content">
        <ProjectOverline>Featured Project</ProjectOverline>
        <ProjectTitle>
          <a href={external || github || '#'} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: description }} />
        
        {tech.length && (
          <ProjectTechList className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ProjectTechList>
        )}
        
        <ProjectLinks className="project-links">
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
      </ProjectContent>
      
      <ProjectImage className="project-image">
        <a href={external || github || '#'} target="_blank" rel="noopener noreferrer">
          <img src={cover} alt={title} className="img" />
        </a>
      </ProjectImage>
    </StyledProject>
  );
};

export default FeaturedProject;