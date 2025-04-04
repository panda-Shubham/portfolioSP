import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (max-width: ${theme.tablet}) {
    padding: 80px 0;
  }

  @media (max-width: ${theme.mobileL}) {
    padding: 60px 0;
  }
`;

const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, ${theme.fontSizes.h2});
  white-space: nowrap;

  &:after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${theme.colors.lightestBackground};

    @media (max-width: ${theme.tablet}) {
      width: 200px;
    }

    @media (max-width: ${theme.mobileL}) {
      width: 100%;
    }
  }
`;

const NumberHeading = styled.span`
  margin-right: 10px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.mono};
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
`;

const Section = ({ children, title, number, id }) => {
  return (
    <StyledSection id={id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title && (
          <SectionHeading>
            {number && <NumberHeading>{number}.</NumberHeading>}
            {title}
          </SectionHeading>
        )}
        {children}
      </motion.div>
    </StyledSection>
  );
};

export default Section;