import React from 'react';
import styled from 'styled-components';

const SPINNER_TRACK = 'M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89';
const PATH_LENGTH = 280;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;

const SpinnerHead = styled.path`
  transform-origin: center;
  transition: stroke-dashoffset 2s cubic-bezier(.4, 1, 0.75, 0.9);
  stroke: black;
  stroke-linecap: round;
`;

const SpinnerTrack = styled.path``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: visible;
  vertical-align: middle;

  svg {
    display: block;
  }

  path {
    fill-opacity: 0;
  }

  ${SpinnerHead} {
    transform-origin: center;
    transition: stroke-dashoffset 2s cubic-bezier(.4, 1, 0.75, 0.9);
    stroke: gray;
    stroke-linecap: round;
  }

  ${SpinnerTrack} {
    stroke: black;
  }
`;

const SpinnerAnimation = styled.span`
  @keyframes pt-spinner-animation {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  animation: pt-spinner-animation 5s linear infinite;
`;

export default () => {
  const strokeWidth = Math.min((MIN_STROKE_WIDTH, STROKE_WIDTH * 100) / 50);
  const strokeOffset = PATH_LENGTH - (PATH_LENGTH * 0.25);

  return (
    <Container>
      <SpinnerAnimation>
        <svg height={ 50 } width={ 50 } viewBox="0 0 100 100" strokeWidth={ strokeWidth }>
          <SpinnerTrack d={ SPINNER_TRACK } />
          <SpinnerHead
            d={ SPINNER_TRACK }
            pathLength={ PATH_LENGTH }
            strokeDasharray={ `${PATH_LENGTH} ${PATH_LENGTH}` }
            strokeDashoffset={ strokeOffset }
          />
        </svg>
      </SpinnerAnimation>
    </Container>
  );
};
