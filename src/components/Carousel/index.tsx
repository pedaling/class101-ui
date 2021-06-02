/* eslint-disable max-len */
import React, {
  useCallback, useEffect, useMemo, useRef,
} from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { media, SIZES } from '../../core/BreakPoints';
import { gray700, white } from '../../core/Colors';
import { Swiper, SwiperInstance, SwiperProps } from '../Swiper';

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
    | 'observer'
    | 'centeredSlides'
    | 'paginationChildren'
    | 'navigationChildren'
  >
>;

export type CarouselProps = React.PropsWithChildren<{
  swiperProps?: SwiperPropsForCaorusel;
  className?: string;
  lgSlidesPerView?: SlidesPerView;
  smSlidesPerView?: SlidesPerView;
  lgSpaceBetween?: boolean;
  smSpaceBetween?: boolean;
  lgSlidesSideOffset?: number;
  smSlidesSideOffset?: number;
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
  'data-element-name'?: string;
}>;

export enum CarouselNavigationPosition {
  TopRightOut = 'TopRightOut',
  BottomRightOut = 'BottomRightOut',
  BottomRightIn = 'BottomRightIn',
}

export enum CarouselPaginationTheme {
  Dark = 'Dark',
  Light = 'Light',
}

export const Carousel = React.memo<CarouselProps>((props: CarouselProps) => {
  const {
    className,
    children,
    navigation = true,
    pagination = false,
    navigationPosition = CarouselNavigationPosition.TopRightOut,
    transparentPagination,
    containerContentMaxWidth,
    paginationTheme = CarouselPaginationTheme.Dark,
    lgSlidesSideOffset = 0,
    smSlidesSideOffset = 0,
    'data-element-name': dataElementName,
    swiperProps,
    onChangeSlide,
    onTransitionEnd,
    onInit,
    lgSlidesPerView = 1,
    smSlidesPerView = 1,
    lgSpaceBetween,
    smSpaceBetween,
    activeIndex,
  } = props;

  const swiperRef = useRef<SwiperInstance>(null);

  const goToSlides = useCallback(
    (index: number) => {
      if (!swiperRef.current) {
        return;
      }

      if (swiperProps?.loop) {
        swiperRef.current.slideToLoop(index);
        return;
      }

      swiperRef.current.slideTo(index);
    },
    [swiperProps?.loop],
  );

  const handelChangeSlide = useCallback(() => {
    if (!swiperRef.current) {
      return;
    }

    onChangeSlide?.(swiperRef.current.realIndex);
  }, [onChangeSlide]);

  const handleTransitionEnd = useCallback(() => {
    if (!swiperRef.current) {
      return;
    }

    onTransitionEnd?.();
  }, [onTransitionEnd]);

  const handleInit = useCallback(() => {
    if (!swiperRef.current) {
      return;
    }

    onInit?.();
  }, [onInit]);

  useEffect(() => {
    if (!swiperRef.current) {
      return;
    }

    if (activeIndex === undefined || activeIndex === swiperRef.current.realIndex) {
      return;
    }

    goToSlides(activeIndex);
  }, [activeIndex, goToSlides]);

  const swiperParams = useMemo<Partial<SwiperProps>>(
    () => ({
      ...swiperProps,
      on: {
        init: handleInit,
        transitionEnd: handleTransitionEnd,
      },
      slidesPerView: smSlidesPerView,
      spaceBetween: smSpaceBetween || typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1 ? 16 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: lgSlidesPerView,
          spaceBetween: lgSpaceBetween || typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1 ? 24 : 0,
        },
      },
    }),
    [handleInit, handleTransitionEnd, swiperProps, lgSlidesPerView, smSlidesPerView, lgSpaceBetween, smSpaceBetween],
  );

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
      data-element-name={dataElementName}
      onSlideChange={handelChangeSlide}
      ref={swiperRef}
      {...swiperParams}
    >
      {children}
    </StyledSwiper>
  );
});

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
  &.swiper-container {
    ${(props) => `
        padding-left: ${props.lgSlidesSideOffset}px;
        padding-right: ${props.lgSlidesSideOffset}px;
      `};

    ${(props) => props.smSlidesSideOffset !== undefined
      && css`
        ${media.sm`
          padding-left: ${props.smSlidesSideOffset}px;
          padding-right: ${props.smSlidesSideOffset}px;
        `};
      `};

    ${(props) => ((props.hasNavigation && props.navigationPosition === CarouselNavigationPosition.BottomRightOut)
      || (props.hasNavigation
        && props.hasPagination
        && props.navigationPosition === CarouselNavigationPosition.TopRightOut)
    ? 'padding-bottom: 48px;'
    : '')};

    ${(props) => props.hasNavigation
      && props.navigationPosition === CarouselNavigationPosition.TopRightOut
      && 'padding-top: 48px; margin-top: -48px;'};
  }

  .swiper-default-navigation {
    position: absolute;
    ${(props) => (props.navigationPosition ? navigationPositionStyle[props.navigationPosition] : '')}
    left: 50%;
    z-index: 1;
    width: ${(props) => (props.containerContentMaxWidth ? `calc(100% - ${32 * 2}px)` : '100%')};
    ${(props) => props.containerContentMaxWidth && `max-width: ${props.containerContentMaxWidth + 32 * 2}px`};
    ${media.sm`
      display: none;
    `};
  }

  ${(props) => (!props.hasPagination
    ? css`
          .swiper-pagination {
            display: none !important;
          }
        `
    : '')};

  ${(props) => (!props.hasNavigation
    ? css`
          .swiper-default-naviation,
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        `
    : '')};

  ${(props) => (props.transparentPagination
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
    : '')}
  &.swiper-container .swiper-pagination {
    ${(props) => props.navigationPosition && paginationPositionStyle[props.navigationPosition]};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    margin: 0 8px;
    border-radius: 3px;
    background-color: ${(props) => (props.paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
    opacity: 0.56;
  }
  .swiper-pagination-bullet-active {
    width: 24px;
    background-color: ${(props) => (props.paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
    opacity: 1;
  }
`;
