import { keyframes } from 'styled-components';

export const fadeOutKeyFrames = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const slideDownKeyFrames = keyframes`
  0% {
    margin-top: 0px;
  }

  100% {
    margin-top: 20px;
  }
`;

export const slideUpKeyFrames = keyframes`
  0% {
    margin-bottom: 0px;
  }

  100% {
    margin-bottom: 20px;
  }
`;
