import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { elevation1 } from '../../../../ElevationStyles';
import { ChevronRight } from '../../../../Icon';
import IconButton from '../../../Button/IconButton';
import { ButtonColor } from '../../../Button/interface';

const NAVIGATION_BUTTON_SIZE = 32;

export enum NavigationDirection {
  Next,
  Prev,
}

interface Props {
  direction: NavigationDirection;
  onClick: () => void;
  className?: string;
  disabled: boolean;
}

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

const navigationDirectionStyle: { [key in NavigationDirection]: FlattenSimpleInterpolation } = {
  [NavigationDirection.Next]: css`
    left: auto;
    right: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `,
  [NavigationDirection.Prev]: css`
    left: auto;
    right: ${NAVIGATION_BUTTON_SIZE}px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    svg {
      transform: rotate(180deg);
    }
  `,
};

const Button = styled(IconButton)<{ direction: NavigationDirection }>`
  ${elevation1};
  position: absolute;
  top: 0;
  ${props => navigationDirectionStyle[props.direction]};
`;
