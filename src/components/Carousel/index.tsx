import React, { PureComponent } from 'react';
import Swiper from 'react-id-swiper/lib/custom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { media, SIZES } from '../../BreakPoints';
import { gray700, white } from '../../Colors';
import Navigation, { CarouselNavigationPosition } from './Navigation';
import ViewAllButton from './ViewAllButton';

type SlidesPerView = 'auto' | 1 | 2 | 3 | 4 | 6;

export enum CarouselPaginationTheme {
  Dark,
  Light,
}

interface AutoplayParameterType {
  delay?: number;
  stopOnLastSlide?: boolean;
  disableOnInteraction?: boolean;
  reverseDirection?: boolean;
  waitForTransition?: boolean;
}

interface SwiperOnParameterType {
  touchMove?: (event: any) => void;
  touchEnd?: (event: any) => void;
  slideChange?: () => void;
  transitionEnd?: () => void;
  reachEnd?: () => void;
}

interface SwiperParameterType {
  autoplay?: boolean | AutoplayParameterType;
  slideToClickedSlide?: boolean;
  shouldSwiperUpdate?: boolean;
  slidesPerView?: SlidesPerView;
  spaceBetween?: number;
  slidesOffsetBefore?: number;
  slidesOffsetAfter?: number;
  pagination?: {
    el: string;
    clickable: boolean;
    type: string;
  };
  navigation?: {
    nextEl: string;
    prevEl: string;
  };
  breakpoints?: {
    [key: number]: {
      slidesPerView?: SlidesPerView;
      spaceBetween?: number;
      slidesOffsetBefore?: number;
      slidesOffsetAfter?: number;
    };
  };
  on?: SwiperOnParameterType;
  loop?: boolean;
  threshold?: number;
}

interface SwiperType {
  swiper: {
    isEnd: boolean;
    activeIndex: number;
    realIndex: number;
    slideNext: () => void;
    slidePrev: () => void;
  };
}

export interface CarouselProps {
  navigation: boolean;
  navigationPosition: CarouselNavigationPosition;
  pagination: boolean;
  paginationTheme: CarouselPaginationTheme;
  lgSlidesPerView: SlidesPerView;
  smSlidesPerView: SlidesPerView;
  lgSlidesSideOffset: number;
  smSlidesSideOffset: number;
  loop: boolean;
  autoplay: boolean | AutoplayParameterType;
  on?: SwiperOnParameterType;
  className?: string;
  children: React.ReactNode;
}

const DEFAULT_PARAMS = {
  slideToClickedSlide: true,
  shouldSwiperUpdate: true,
  threshold: 10,
};

const DEFAULT_PAGINATION_PARAMS = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

export default class Carousel extends PureComponent<CarouselProps> {
  public static ViewAllButton = ViewAllButton;
  public static defaultProps = {
    navigation: true,
    navigationPosition: CarouselNavigationPosition.TopRightOut,
    pagination: false,
    paginationTheme: CarouselPaginationTheme.Dark,
    lgSlidesPerView: 1,
    smSlidesPerView: 1,
    lgSlidesSideOffset: 0,
    smSlidesSideOffset: 0,
    loop: false,
    autoplay: false,
  };
  private swiper = React.createRef<SwiperType>();

  public render() {
    const {
      children,
      lgSlidesPerView,
      className,
      navigation,
      navigationPosition,
      paginationTheme,
      pagination,
      lgSlidesSideOffset,
      smSlidesSideOffset,
    } = this.props;

    const sliderCount = React.Children.count(children);
    const shouldHideNavigation = typeof lgSlidesPerView === 'number' && sliderCount <= lgSlidesPerView;
    return (
      <Container className={className}>
        <Inner>
          <SwiperWrapper
            navigation={navigation}
            navigationPosition={navigationPosition}
            pagination={pagination}
            paginationTheme={paginationTheme}
            lgSlidesSideOffset={lgSlidesSideOffset}
            smSlidesSideOffset={smSlidesSideOffset}
          >
            <Swiper {...this.getSwiperParams()} ref={this.swiper}>
              {children}
            </Swiper>
          </SwiperWrapper>
          {navigation && !shouldHideNavigation && (
            <Navigation position={navigationPosition} goNext={this.goNext} goPrev={this.goPrev} />
          )}
        </Inner>
      </Container>
    );
  }

  private goNext = () => {
    if (this.swiper.current) {
      this.swiper.current.swiper.slideNext();
    }
  };

  private goPrev = () => {
    if (this.swiper.current) {
      this.swiper.current.swiper.slidePrev();
    }
  };

  private getSwiperParams = (): Partial<SwiperParameterType> => {
    const { pagination, lgSlidesPerView, smSlidesPerView, on, loop, autoplay } = this.props;
    let params: Partial<SwiperParameterType> = {
      ...DEFAULT_PARAMS,
      loop,
      autoplay,
      on,
      slidesPerView: lgSlidesPerView,
      spaceBetween: typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1 ? 24 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: smSlidesPerView,
          spaceBetween: typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1 ? 16 : 0,
        },
      },
    };
    if (pagination) {
      params = {
        ...params,
        ...DEFAULT_PAGINATION_PARAMS,
      };
    }
    return params;
  };
}

const Container = styled.div``;

const paginationStyleByNavigationPosition: { [key in CarouselNavigationPosition]: FlattenSimpleInterpolation } = {
  [CarouselNavigationPosition.TopRightOut]: css`
    bottom: -24px;
  `,
  [CarouselNavigationPosition.BottomRightOut]: css`
    bottom: -24px;
  `,
  [CarouselNavigationPosition.BottomRightIn]: css`
    bottom: 16px;
  `,
};

const Inner = styled.div`
  position: relative;
`;

interface SwiperWrapperProps {
  navigation: boolean;
  navigationPosition: CarouselNavigationPosition;
  pagination: boolean;
  paginationTheme: CarouselPaginationTheme;
  lgSlidesSideOffset: number;
  smSlidesSideOffset: number;
}

const SwiperWrapper = styled.div<SwiperWrapperProps>`
  overflow: hidden;

  ${props =>
    props.navigation &&
    props.navigationPosition === CarouselNavigationPosition.BottomRightOut &&
    css`
      padding-bottom: 48px;
    `};
  ${props =>
    props.pagination &&
    props.navigationPosition !== CarouselNavigationPosition.BottomRightIn &&
    css`
      padding-bottom: 48px;
    `};
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

  .swiper-container {
    overflow: visible;
  }

  /* swiper pagination */
  .swiper-pagination {
    ${props => paginationStyleByNavigationPosition[props.navigationPosition]};
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
