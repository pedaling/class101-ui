import React, { PureComponent } from 'react';
import { AutoplayOptions, SwiperEvent } from 'swiper';
import { Swiper as OriginalSwiper } from 'swiper/dist/js/swiper.esm.js';

import { SIZES } from '../../core/BreakPoints';
import { Swiper, SwiperNavigationPosition, SwiperPaginationTheme, SwiperProps } from '../Swiper';
import ViewAllButton from './ViewAllButton';

type SlidesPerView = 'auto' | 1 | 2 | 3 | 4 | 6;

export interface CarouselProps {
  navigationContainerMaxWidth?: number;
  hasNavigation?: boolean;
  navigationPosition?: SwiperNavigationPosition;
  hasPagination?: boolean;
  paginationTheme?: SwiperPaginationTheme;
  lgSlidesPerView: SlidesPerView;
  smSlidesPerView: SlidesPerView;
  lgSlidesSideOffset: number;
  smSlidesSideOffset: number;
  freeMode?: boolean;
  lgSpaceBetween?: boolean;
  smSpaceBetween?: boolean;
  autoplay?: AutoplayOptions | boolean;
  on?: { [key in SwiperEvent]?: () => void };
  loop: boolean;
  observer?: boolean;
  observeParents?: boolean;
  className?: string;
  slideToClickedSlide?: boolean;
  children: React.ReactNode;
  onChangeSlides?: (index: number) => void;
  activeSlideIndex?: number;
}

export class Carousel extends PureComponent<CarouselProps> {
  public static ViewAllButton = ViewAllButton;
  public static defaultProps = {
    hasNavigation: true,
    hasPagination: false,
    lgSlidesPerView: 1,
    smSlidesPerView: 1,
    lgSlidesSideOffset: 0,
    smSlidesSideOffset: 0,
  };

  private swiper?: OriginalSwiper;

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

  private getSwiper = (swiper: OriginalSwiper) => {
    this.swiper = swiper;
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
      lgSpaceBetween,
      smSpaceBetween,
      on,
      loop,
      autoplay,
      freeMode,
      observer,
      observeParents,
      slideToClickedSlide,
      hasNavigation,
      hasPagination,
    } = this.props;

    let params: Partial<SwiperProps> = {
      observer,
      observeParents,
      loop,
      autoplay,
      freeMode,
      slideToClickedSlide,
      hasNavigation,
      hasPagination,
      on: {
        ...on,
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
      getSwiperInstance: this.getSwiper,
    };
    return params;
  };
}
