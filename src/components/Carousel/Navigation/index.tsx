import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { media } from '../../../core/BreakPoints';
import NavigationButton, { NavigationDirection } from './NavigationButton';

export enum CarouselNavigationPosition {
  TopRightOut,
  BottomRightOut,
  BottomRightIn,
}

interface Props {
  position: CarouselNavigationPosition;
  goNext: () => void;
  goPrev: () => void;
  isBeginning: boolean;
  isEnd: boolean;
  lgSlidesSideOffset: number;
  navigationContainerMaxWidth?: number;
}

const generateClassNames = (direction: NavigationDirection, disabled: boolean): string => {
  let className = `swiper-button-${direction === NavigationDirection.Next ? 'next' : 'prev'}`;
  if (disabled) {
    className = `${className} swiper-button-disabled`;
  }
  return className;
};
export default class Navigation extends React.PureComponent<Props> {
  public static readonly defaultProps: Partial<Props> = {
    position: CarouselNavigationPosition.TopRightOut,
  };

  public render() {
    const {
      position,
      goNext,
      goPrev,
      isBeginning,
      isEnd,
      lgSlidesSideOffset,
      navigationContainerMaxWidth,
    } = this.props;
    return (
      <Container position={position} lgSlidesSideOffset={lgSlidesSideOffset} maxWidth={navigationContainerMaxWidth}>
        <NavigationButton
          direction={NavigationDirection.Prev}
          onClick={goPrev}
          disabled={isBeginning}
          className={generateClassNames(NavigationDirection.Prev, isBeginning)}
        />
        <NavigationButton
          direction={NavigationDirection.Next}
          onClick={goNext}
          disabled={isEnd}
          className={generateClassNames(NavigationDirection.Next, isEnd)}
        />
      </Container>
    );
  }
}

// Button의 box-shadow가 잘리지 않도록 영역에서 1px 가감합니다.
const navigationPositionStyle: { [key in CarouselNavigationPosition]: FlattenSimpleInterpolation } = {
  [CarouselNavigationPosition.TopRightOut]: css`
    top: -48px;
    transform: translateX(calc(-50% - 1px));
  `,
  [CarouselNavigationPosition.BottomRightOut]: css`
    top: auto;
    bottom: 33px;
    transform: translateX(calc(-50% - 1px));
  `,
  [CarouselNavigationPosition.BottomRightIn]: css`
    top: auto;
    bottom: 47px;
    transform: translateX(calc(-50% - 15px));
  `,
};

const Container = styled.div<{
  position: CarouselNavigationPosition;
  lgSlidesSideOffset: number;
  maxWidth?: number;
}>`
  position: absolute;
  ${props => navigationPositionStyle[props.position]};
  left: 50%;
  z-index: 1;
  width: ${props => (props.lgSlidesSideOffset ? `calc(100% - ${props.lgSlidesSideOffset * 2}px)` : '100%')};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}px`};
  ${media.sm`
    display: none;
  `};
`;
