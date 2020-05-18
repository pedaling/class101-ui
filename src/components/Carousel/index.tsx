import React, { PureComponent } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { media, SIZES } from '../../core/BreakPoints';
import { gray700, white } from '../../core/Colors';
import { Swiper, SwiperInstance, SwiperProps } from '../Swiper';
import ViewAllButton from './ViewAllButton';

type SlidesPerView = 'auto' | 1 | 2 | 3 | 4 | 6;

type SwiperPropsForCaorusel = Partial<
  Pick<
    SwiperProps,
    | 'freeMode'
    | 'autoplay'
    | 'loop'
    | 'children'
    | 'slideToClickedSlide'
    | 'speed'
    | 'getSwiperInstance'
    | 'observer'
    | 'centeredSlides'
    | 'paginationChildren'
    | 'navigationChildren'
  >
>;

export interface CarouselProps {
  swiperProps?: SwiperPropsForCaorusel;
  className?: string;
  lgSlidesPerView: SlidesPerView;
  smSlidesPerView: SlidesPerView;
  lgSpaceBetween?: boolean;
  smSpaceBetween?: boolean;
  lgSlidesSideOffset: number;
  smSlidesSideOffset: number;
  activeIndex?: number;
  onChangeSlide?: (index: number) => void;
  onTransitionEnd?: () => void;
  onInit?: () => void;
  paginationTheme?: CarouselPaginationTheme;
  navigationPosition?: CarouselNavigationPosition;
  transparentPagination?: boolean;
  containerContentMaxWidth?: number;
  pagination?: boolean;
  navigation?: boolean;
}

export enum CarouselNavigationPosition {
  TopRightOut = 'TopRightOut',
  BottomRightOut = 'BottomRightOut',
  BottomRightIn = 'BottomRightIn',
}

export enum CarouselPaginationTheme {
  Dark = 'Dark',
  Light = 'Light',
}
export class Carousel extends PureComponent<CarouselProps> {
  public static ViewAllButton = ViewAllButton;
  public static defaultProps = {
    lgSlidesPerView: 1,
    smSlidesPerView: 1,
    lgSlidesSideOffset: 0,
    smSlidesSideOffset: 0,
    navigation: true,
    navigationPosition: CarouselNavigationPosition.TopRightOut,
    pagination: false,
    paginationTheme: CarouselPaginationTheme.Dark,
  };

  private swiper?: SwiperInstance;

  public componentDidUpdate(prevProps: CarouselProps) {
    const { activeIndex } = this.props;
    if (
      activeIndex !== undefined &&
      activeIndex !== prevProps.activeIndex &&
      this.swiper &&
      activeIndex !== this.swiper.realIndex
    ) {
      this.goToSlides(activeIndex);
    }
  }
  public render() {
    const {
      className,
      children,
      navigation,
      pagination,
      navigationPosition,
      transparentPagination,
      containerContentMaxWidth,
      paginationTheme,
      lgSlidesSideOffset,
      smSlidesSideOffset,
    } = this.props;

    const swiperParams = this.getSwiperParams();

    return (
      <StyledSwiper
        className={className}
        hasNavigation={navigation}
        hasPagination={pagination}
        navigationPosition={navigationPosition}
        transparentPagination={transparentPagination}
        containerContentMaxWidth={containerContentMaxWidth}
        paginationTheme={paginationTheme}
        lgSlidesSideOffset={lgSlidesSideOffset}
        smSlidesSideOffset={smSlidesSideOffset}
        {...swiperParams}
      >
        {children}
      </StyledSwiper>
    );
  }

  private handleGetSwiperInstance = (swiper: SwiperInstance) => {
    this.swiper = swiper;
  };

  private goToSlides = (index: number) => {
    if (this.swiper) {
      if (this.props.swiperProps && this.props.swiperProps.loop) {
        return this.swiper.slideToLoop(index);
      }
      this.swiper.slideTo(index);
    }
  };

  private handelChangeSlide = () => {
    const { onChangeSlide } = this.props;
    if (this.swiper && onChangeSlide) {
      onChangeSlide(this.swiper.realIndex);
    }
  };

  private handleTransitionEnd = () => {
    const { onTransitionEnd } = this.props;
    if (this.swiper && onTransitionEnd) {
      onTransitionEnd();
    }
  };

  private handleInit = () => {
    const { onInit } = this.props;
    if (this.swiper && onInit) {
      onInit();
    }
  };

  private getSwiperParams = (): Partial<SwiperProps> => {
    const { swiperProps, lgSlidesPerView, smSlidesPerView, lgSpaceBetween, smSpaceBetween, activeIndex } = this.props;

    const params: Partial<SwiperProps> = {
      ...swiperProps,
      on: {
        init: this.handleInit,
        slideChange: this.handelChangeSlide,
        transitionEnd: this.handleTransitionEnd,
      },
      slidesPerView: lgSlidesPerView,
      spaceBetween: lgSpaceBetween || typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1 ? 24 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: smSlidesPerView,
          spaceBetween: smSpaceBetween || typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1 ? 16 : 0,
        },
      },
      getSwiperInstance: this.handleGetSwiperInstance,
    };
    return params;
  };
}

type StyledSwiperProps = Partial<
  Pick<
    CarouselProps,
    | 'navigationPosition'
    | 'transparentPagination'
    | 'containerContentMaxWidth'
    | 'paginationTheme'
    | 'lgSlidesSideOffset'
    | 'smSlidesSideOffset'
  >
> & { hasPagination?: boolean; hasNavigation?: boolean };

const paginationPositionStyle: { [key in CarouselNavigationPosition]: FlattenSimpleInterpolation } = {
  [CarouselNavigationPosition.TopRightOut]: css`
    bottom: 16px;
  `,
  [CarouselNavigationPosition.BottomRightOut]: css`
    bottom: 8px;
  `,
  [CarouselNavigationPosition.BottomRightIn]: css`
    bottom: 16px;
  `,
};

const navigationPositionStyle: { [key in CarouselNavigationPosition]: FlattenSimpleInterpolation } = {
  [CarouselNavigationPosition.TopRightOut]: css`
    top: 0;
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
    transform: translateX(calc(-50% - 31px));
  `,
};

const StyledSwiper = styled(Swiper)<StyledSwiperProps>`
  ${props =>
    props.lgSlidesSideOffset
      ? css`
          padding-left: ${props.lgSlidesSideOffset}px;
          padding-right: ${props.lgSlidesSideOffset}px;
        `
      : ''};
  ${props =>
    props.smSlidesSideOffset
      ? css`
          ${media.sm`
            padding-left: ${props.smSlidesSideOffset}px;
            padding-right: ${props.smSlidesSideOffset}px;
          `};
        `
      : ''};

  .swiper-default-navigation {
    position: absolute;
    ${props => (props.navigationPosition ? navigationPositionStyle[props.navigationPosition] : '')}
    left: 50%;
    z-index: 1;
    width: ${props => (props.containerContentMaxWidth ? `calc(100% - ${32 * 2}px)` : '100%')};
    ${props => props.containerContentMaxWidth && `max-width: ${props.containerContentMaxWidth + 32 * 2}px`};
    ${media.sm`
      display: none;
    `};
  }

  ${props =>
    !props.hasPagination
      ? css`
          .swiper-pagination {
            display: none !important;
          }
        `
      : ''};

  ${props =>
    !props.hasNavigation
      ? css`
          .swiper-default-naviation,
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        `
      : ''};

  ${props =>
    (props.hasNavigation && props.navigationPosition === CarouselNavigationPosition.BottomRightOut) ||
    (props.hasNavigation && props.hasPagination && props.navigationPosition === CarouselNavigationPosition.TopRightOut)
      ? css`
          padding-bottom: 48px;
        `
      : ''};

  ${props =>
    props.hasNavigation && props.navigationPosition === CarouselNavigationPosition.TopRightOut
      ? css`
          padding-top: 48px;
          margin-top: -48px;
        `
      : ''};

  ${props =>
    props.transparentPagination
      ? css`
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 0 !important;
            transition: opacity 0.2s !important;
          }
          &:hover {
            .swiper-button-next,
            .swiper-button-prev {
              opacity: 1 !important;
            }
          }
          @media (max-width: 632px) {
            .swiper-button-next,
            .swiper-button-prev {
              opacity: 0 !important;
            }
          }
        `
      : ''}
  &.swiper-container .swiper-pagination {
    ${props => props.navigationPosition && paginationPositionStyle[props.navigationPosition]};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    margin: 0 8px;
    border-radius: 3px;
    background-color: ${props => (props.paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
    opacity: 0.56;
  }
  .swiper-pagination-bullet-active {
    width: 24px;
    background-color: ${props => (props.paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
    opacity: 1;
  }
`;
