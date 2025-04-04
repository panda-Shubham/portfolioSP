import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import theme from '../styles/Theme';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  z-index: 99;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  fill: none;
  stroke: ${theme.colors.primary};
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isMounted && (
        <LoaderContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => finishLoading()}
        >
          <LogoWrapper>
            <Logo
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Simple logo - you can replace with your own SVG path */}
              <motion.path
                d="M 50, 5
                   L 11, 27
                   L 11, 72
                   L 50, 95
                   L 89, 73
                   L 89, 28 z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.text
                x="50"
                y="55"
                textAnchor="middle"
                fill={theme.colors.primary}
                fontSize="24"
                fontFamily={theme.fonts.mono}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                YN
              </motion.text>
            </Logo>
          </LogoWrapper>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Loader;