import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { elevation1 } from '../../../core/ElevationStyles';
import { ChevronRight } from '../../../Icon';
import { ButtonColor, IconButton } from '../../Button';

const NAVIGATION_BUTTON_SIZE = 32;

export const DefaultNavigation = () => {
  return (
    <div className="swiper-default-navigation">
      <Button color={ButtonColor.WHITE} className="swiper-button-prev" direction="left" icon={<ChevronRight />} />
      <Button color={ButtonColor.WHITE} className="swiper-button-next" direction="right" icon={<ChevronRight />} />
    </div>
  );
};

export default class NavigationButton extends React.PureComponent<Props> {
  public render() {
    const { direction, onClick, className, disabled } = this.props;
    return (
      <Button
        color={ButtonColor.WHITE}
        onClick={onClick}
        direction={direction}
        className={className}
        disabled={disabled}
        icon={<ChevronRight />}
      />
    );
  }
}

const navigationDirectionStyle = {
  right: css`
    left: auto;
    right: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `,
  left: css`
    left: auto;
    right: ${NAVIGATION_BUTTON_SIZE}px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    svg {
      transform: rotate(180deg);
    }
  `,
};

const Button = styled(IconButton)<{ direction: string }>`
  /* Reset swiper's default style */
  background-image: none;
  margin: 0;
  /* Customize navigation button  */
  ${elevation1}
  position: absolute;
  top: 0;
  ${props => navigationDirectionStyle[props.direction]};
  &:focus {
    outline: none;
  }
  &:active,
  &:disabled {
    opacity: 1;
    pointer-events: auto;
  }
`;
