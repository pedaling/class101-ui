import React from 'react';
import styled from 'styled-components';

import { ChevronRight } from '../../../Icon';
import { ButtonColor, IconButton } from '../../Button';

const NAVIGATION_BUTTON_SIZE = 32;

export type NavigationDirection = 'right' | 'left';

export const DefaultNavigation = () => {
  return (
    <div className="swiper-default-navigation">
      <Button color={ButtonColor.WHITE} className="swiper-button-prev" direction="left" icon={<ChevronRight />} />
      <Button color={ButtonColor.WHITE} className="swiper-button-next" direction="right" icon={<ChevronRight />} />
    </div>
  );
};

const Button = styled(IconButton)<{ direction: 'right' | 'left' }>`
  background-image: none;
  margin: 0;
  position: absolute;
  top: 0;
  left: auto;
  ${props =>
    props.direction === 'right'
      ? `
      right: 0;
      `
      : `
      right: ${NAVIGATION_BUTTON_SIZE}px;
      svg {
        transform: rotate(180deg);
      }
  `};
  &:focus {
    outline: none;
  }
  &:active,
  &:disabled {
    opacity: 1;
    pointer-events: auto;
  }
`;
