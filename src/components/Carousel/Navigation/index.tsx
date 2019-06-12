import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { media } from '../../../BreakPoints';
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
}

export default class Navigation extends React.PureComponent<Props> {
  public static readonly defaultProps: Partial<Props> = {
    position: CarouselNavigationPosition.TopRightOut,
  };

  public render() {
    const { position, goNext, goPrev } = this.props;
    return (
      <Container position={position}>
        <NavigationButton direction={NavigationDirection.Prev} onClick={goPrev} />
        <NavigationButton direction={NavigationDirection.Next} onClick={goNext} />
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
}>`
  position: absolute;
  ${props => navigationPositionStyle[props.position]};
  left: 50%;
  z-index: 1;
  width: 100%;
  /* 여백 계산: 960 + ( 16 * 2) */
  max-width: 992px;
  ${media.sm`
    display: none;
  `};
`;
