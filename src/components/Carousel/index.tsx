import React, { PureComponent } from 'react';

import { SIZES } from '../../core/BreakPoints';
import { Swiper, SwiperInstance, SwiperNavigationPosition, SwiperPaginationTheme, SwiperProps } from '../Swiper';
import ViewAllButton from './ViewAllButton';

type SlidesPerView = 'auto' | 1 | 2 | 3 | 4 | 6;

type UsingSwiperProps = Pick<
  SwiperProps,
  | 'containerContentMaxWidth'
  | 'hasPagination'
  | 'hasNavigation'
  | 'paginationTheme'
  | 'freeMode'
  | 'autoplay'
  | 'loop'
  | 'customNavigation'
  | 'customPagination'
  | 'children'
  | 'slideToClickedSlide'
  | 'speed'
  | 'getSwiperInstance'
  | 'observer'
>;

export interface OwnCarouselProps {
  lgSlidesPerView: SlidesPerView;
  smSlidesPerView: SlidesPerView;
  lgSlidesSideOffset: number;
  smSlidesSideOffset: number;
  lgSpaceBetween?: boolean;
  smSpaceBetween?: boolean;
  className?: string;
  onChangeSlides?: (index: number) => void;
  activeSlideIndex?: number;
}

export type CarouselProps = UsingSwiperProps & OwnCarouselProps;
export type CarouselNavigationPosition = SwiperNavigationPosition;
export type CarouselPaginationTheme = SwiperPaginationTheme;

export class Carousel extends PureComponent<CarouselProps> {
  public static ViewAllButton = ViewAllButton;
  public static defaultProps = {
    lgSlidesPerView: 1,
    smSlidesPerView: 1,
    lgSlidesSideOffset: 0,
    smSlidesSideOffset: 0,
  };

  private swiper?: SwiperInstance;

  public componentDidUpdate(prevProps: CarouselProps) {
    const { activeSlideIndex } = this.props;
    if (
      activeSlideIndex !== undefined &&
      activeSlideIndex !== prevProps.activeSlideIndex &&
      this.swiper &&
      activeSlideIndex !== this.swiper.realIndex
    ) {
      this.goToSlides(activeSlideIndex);
    }
  }

  public render() {
    const { children } = this.props;
    const swiperParams = this.getSwiperParams();
    return <Swiper {...swiperParams}>{children}</Swiper>;
  }

  private handleGetSwiperInstance = (swiper: SwiperInstance) => {
    this.swiper = swiper;
    if (this.props.getSwiperInstance) {
      this.props.getSwiperInstance(swiper);
    }
  };

  private goToSlides = (index: number) => {
    if (this.swiper) {
      if (this.props.loop) {
        return this.swiper.slideToLoop(index);
      }
      this.swiper.slideTo(index);
    }
  };

  private onChange = () => {
    const { onChangeSlides } = this.props;
    if (this.swiper && onChangeSlides) {
      onChangeSlides(this.swiper.realIndex);
    }
  };

  private getSwiperParams = (): Partial<SwiperProps> => {
    const {
      lgSlidesPerView,
      smSlidesPerView,
      lgSlidesSideOffset,
      smSlidesSideOffset,
      lgSpaceBetween,
      smSpaceBetween,
      activeSlideIndex,
      ...props
    } = this.props;

    const params: Partial<SwiperProps> = {
      ...props,
      on: {
        slideChange: this.onChange,
      },
      slidesPerView: lgSlidesPerView,
      spaceBetween: lgSpaceBetween || (typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1) ? 24 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: smSlidesPerView,
          spaceBetween: smSpaceBetween || (typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1) ? 16 : 0,
        },
      },
      getSwiperInstance: this.handleGetSwiperInstance,
    };
    return params;
  };
}
