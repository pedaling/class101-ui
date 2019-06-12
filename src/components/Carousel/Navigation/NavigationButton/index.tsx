import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { elevation1 } from '../../../../ElevationStyles';
import { Chevron } from '../../../../Icon';

const NAVIGATION_BUTTON_SIZE = 32;

export enum NavigationDirection {
  Next,
  Prev,
}

interface Props {
  direction: NavigationDirection;
  onClick: () => void;
}

export default class NavigationButton extends React.PureComponent<Props> {
  public render() {
    const { direction, onClick } = this.props;
    return (
      <Button
        onClick={onClick}
        direction={direction}
        className={`swiper-button-${direction === NavigationDirection.Next ? 'next' : 'prev'}`}
      >
        <ChevronIcon direction={direction} size={24} />
      </Button>
    );
  }
}

const navigationDirectionStyle: { [key in NavigationDirection]: FlattenSimpleInterpolation } = {
  [NavigationDirection.Next]: css`
    left: auto;
    right: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  `,
  [NavigationDirection.Prev]: css`
    left: auto;
    right: ${NAVIGATION_BUTTON_SIZE}px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  `,
};

const Button = styled.button<{ direction: NavigationDirection }>`
  ${elevation1};
  /* Reset swiper's default style */
  background: none;
  border: none;
  margin: 0;

  /* Customize navigation button  */
  position: absolute;
  top: 0;
  ${props => navigationDirectionStyle[props.direction]};
  width: ${NAVIGATION_BUTTON_SIZE}px;
  height: ${NAVIGATION_BUTTON_SIZE}px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
  &:active {
    opacity: 0.8;
  }
`;

const ChevronIcon = styled(Chevron)<{ direction: NavigationDirection }>`
  ${props =>
    props.direction === NavigationDirection.Prev
      ? `
          transform: rotate(180deg);
        `
      : ''};
`;
