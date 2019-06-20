import { isEqual } from 'lodash-es';
import React, { PureComponent } from 'react';
import Swiper, { ReactIdSwiperProps, SwiperInstance } from 'react-id-swiper';
import { SwiperModules } from 'react-id-swiper/lib/types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { AutoplayOptions, PaginationOptions, SwiperEvent } from 'swiper';
import { Autoplay, Lazy, LazyOptions, Pagination } from 'swiper/dist/js/swiper.esm';

import { media, SIZES } from '../../BreakPoints';
import { gray700, white } from '../../Colors';
import Navigation, { CarouselNavigationPosition } from './Navigation';
import ViewAllButton from './ViewAllButton';

type SlidesPerView = 'auto' | 1 | 2 | 3 | 4 | 6;

export enum CarouselPaginationTheme {
  Dark,
  Light,
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
  freeMode: boolean;
  lgSpaceBetween?: boolean;
  smSpaceBetween?: boolean;
  autoplay?: AutoplayOptions | boolean;
  lazy?: LazyOptions | boolean;
  on?: { [key in SwiperEvent]?: () => void };
  loop: boolean;
  shouldSwiperUpdate: boolean;
  className?: string;
  children: React.ReactNode;
}

const DEFAULT_PARAMS = {
  threshold: 10,
};

const DEFAULT_PAGINATION_PARAMS: { [key in string]: PaginationOptions } = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

interface State {
  readonly isBeginning: boolean;
  readonly isEnd: boolean;
}
export default class Carousel extends PureComponent<CarouselProps, State> {
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
    shouldSwiperUpdate: false,
    freeMode: true,
    loop: false,
  };
  public readonly state = {
    isBeginning: true,
    isEnd: false,
  };

  private swiper: SwiperInstance = null;

  public componentDidUpdate(prevProps: Readonly<CarouselProps>) {
    if (this.props.shouldSwiperUpdate && this.shouldSwiperUpdate(prevProps) && this.swiper) {
      this.swiper.update();
    }
  }

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
    const { isBeginning, isEnd } = this.state;

    const sliderCount = React.Children.count(children);
    const shouldHideNavigation = typeof lgSlidesPerView === 'number' && sliderCount <= lgSlidesPerView;
    const swiperParams = this.getSwiperParams();
    return (
      <Container className={className}>
        <Inner>
          {sliderCount > 0 && (
            <SwiperWrapper
              navigation={navigation}
              navigationPosition={navigationPosition}
              pagination={pagination}
              paginationTheme={paginationTheme}
              lgSlidesSideOffset={lgSlidesSideOffset}
              smSlidesSideOffset={smSlidesSideOffset}
            >
              <Swiper {...swiperParams} getSwiper={this.getSwiper}>
                {children}
              </Swiper>
            </SwiperWrapper>
          )}
          {navigation && !shouldHideNavigation && (
            <Navigation
              lgSlidesSideOffset={lgSlidesSideOffset}
              position={navigationPosition}
              goNext={this.goNext}
              goPrev={this.goPrev}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          )}
        </Inner>
      </Container>
    );
  }

  private shouldSwiperUpdate = (prevProps: Readonly<CarouselProps>) => {
    const prevKeys = this.getKeysFromChildren(prevProps.children);
    const currentKeys = this.getKeysFromChildren(this.props.children);
    return !isEqual(prevKeys, currentKeys);
  };

  private getKeysFromChildren = (children?: React.ReactNode) => {
    if (children === undefined || children === null) {
      return [];
    }

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return undefined;
      }
      return child.key;
    });
  };

  private getSwiper = (swiper: SwiperInstance) => {
    this.swiper = swiper;
  };

  private goNext = () => {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  };

  private goPrev = () => {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  };

  private progress = () => {
    if (!this.swiper) return;
    if (this.props.loop) {
      return this.setState({
        isEnd: false,
        isBeginning: false,
      });
    }
    if (this.swiper.isEnd) {
      return this.setState({ isEnd: true, isBeginning: false });
    }
    if (this.swiper.isBeginning) {
      return this.setState({ isBeginning: true, isEnd: false });
    }
    this.setState({
      isEnd: false,
      isBeginning: false,
    });
  };

  private getSwiperParams = (): Partial<ReactIdSwiperProps> => {
    const {
      pagination,
      lgSlidesPerView,
      smSlidesPerView,
      lgSpaceBetween,
      smSpaceBetween,
      on,
      loop,
      autoplay,
      lazy,
      freeMode,
      shouldSwiperUpdate,
    } = this.props;
    let params: Partial<ReactIdSwiperProps> = {
      ...DEFAULT_PARAMS,
      shouldSwiperUpdate,
      loop,
      freeMode,
      on: {
        ...on,
        progress: this.progress,
      },
      slidesPerView: lgSlidesPerView,
      spaceBetween: lgSpaceBetween || (typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1) ? 24 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: smSlidesPerView,
          spaceBetween: smSpaceBetween || (typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1) ? 16 : 0,
        },
      },
      modules: [],
    };
    if (autoplay) {
      params = {
        ...params,
        autoplay,
        modules: [...(params.modules as SwiperModules), Autoplay],
      };
    }
    if (lazy) {
      params = {
        ...params,
        lazy,
        preloadImages: false,
        modules: [...(params.modules as SwiperModules), Lazy],
      };
    }
    if (pagination) {
      params = {
        ...params,
        ...DEFAULT_PAGINATION_PARAMS,
        modules: [...(params.modules as SwiperModules), Pagination],
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
