import React from 'react';
import styled from 'styled-components';
import { elevation1 } from '../../../core/ElevationStyles';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../Icon';
import { ButtonColor, IconButton } from '../../Button';

const NAVIGATION_BUTTON_SIZE = 32;

export type NavigationDirection = 'right' | 'left';

export const DefaultNavigation = React.memo(() => {
  return (
    <div className="swiper-default-navigation">
      <Button color={ButtonColor.WHITE} className="swiper-button-prev" icon={<ChevronLeftIcon />} />
      <Button color={ButtonColor.WHITE} className="swiper-button-next" icon={<ChevronRightIcon />} />
    </div>
  );
});

const Button = styled(IconButton)`
  &.swiper-button-prev,
  &.swiper-button-next {
    ${elevation1};
    width: 32px;
    height: 32px;
    background-image: none;
    margin: 0;
    position: absolute;
    top: 0;
    left: auto;
    &:focus {
      outline: none;
    }
    &:not(.swiper-button-disabled):active {
      opacity: 1;
      pointer-events: auto;
    }
    &.swiper-button-disabled {
      pointer-events: auto;
      cursor: not-allowed;
    }
  }

  &.swiper-button-prev {
    right: ${NAVIGATION_BUTTON_SIZE}px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.swiper-button-next {
    right: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
