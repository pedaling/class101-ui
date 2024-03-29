import React, {
  useCallback, useEffect, useMemo, useRef,
} from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Swiper as SwiperClass } from 'swiper';
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

  const handelChangeSlide = useCallback(
    (swiper: SwiperClass) => {
      onChangeSlide?.(swiper.realIndex);
    },
    [onChangeSlide],
  );

  const handleTransitionEnd = useCallback(() => {
    onTransitionEnd?.();
  }, [onTransitionEnd]);

  const handleInit = useCallback(() => {
    onInit?.();
  }, [onInit]);

  useEffect(() => {
    if (activeIndex !== undefined) {
      goToSlides(activeIndex);
    }
  }, [activeIndex, goToSlides]);

  const swiperParams = useMemo<Partial<SwiperProps>>(
    () => ({
      ...swiperProps,
      slidesPerView: smSlidesPerView,
      spaceBetween: smSpaceBetween || typeof smSlidesPerView !== 'number' || smSlidesPerView !== 1 ? 16 : 0,
      breakpoints: {
        [SIZES.sm.maxWidth]: {
          slidesPerView: lgSlidesPerView,
          spaceBetween: lgSpaceBetween || typeof lgSlidesPerView !== 'number' || lgSlidesPerView !== 1 ? 24 : 0,
        },
      },
    }),
    [swiperProps, lgSlidesPerView, smSlidesPerView, lgSpaceBetween, smSpaceBetween],
  );

  const styleName = css`
    &.swiper-container {
      padding-left: ${lgSlidesSideOffset}px;
      padding-right: ${lgSlidesSideOffset}px;

      ${() => smSlidesSideOffset !== undefined
        && css`
          ${media.sm`
          padding-left: ${smSlidesSideOffset}px;
          padding-right: ${smSlidesSideOffset}px;
          `};
        `};

      ${() => ((navigation && navigationPosition === CarouselNavigationPosition.BottomRightOut)
        || (navigation && pagination && navigationPosition === CarouselNavigationPosition.TopRightOut)
    ? 'padding-bottom: 48px;'
    : '')};

      ${() => navigation
        && navigationPosition === CarouselNavigationPosition.TopRightOut
        && 'padding-top: 48px; margin-top: -48px;'};
    }

    .swiper-default-navigation {
      position: absolute;
      ${() => (navigationPosition ? navigationPositionStyle[navigationPosition] : '')}
      left: 50%;
      z-index: 1;
      width: ${() => (containerContentMaxWidth ? `calc(100% - ${32 * 2}px)` : '100%')};
      ${() => containerContentMaxWidth && `max-width: ${containerContentMaxWidth + 32 * 2}px`};
      ${media.sm`
      display: none;
    `};
    }

    ${() => (!pagination
    ? css`
            .swiper-pagination {
              display: none !important;
            }
          `
    : '')};

    ${() => (!navigation
    ? css`
            .swiper-default-naviation,
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          `
    : '')};

    ${() => (transparentPagination
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
      ${() => navigationPosition && paginationPositionStyle[navigationPosition]};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0 8px;
      border-radius: 3px;
      background-color: ${() => (paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
      opacity: 0.56;
    }
    .swiper-pagination-bullet-active {
      width: 24px;
      background-color: ${() => (paginationTheme === CarouselPaginationTheme.Light ? white : gray700)};
      opacity: 1;
    }
  `;

  const StyledSwiper = styled(Swiper)`
    ${styleName}
  `;

  return (
    <StyledSwiper
      className={className}
      data-element-name={dataElementName}
      onSlideChange={handelChangeSlide}
      onInit={handleInit}
      onTransitionEnd={handleTransitionEnd}
      ref={swiperRef}
      {...swiperParams}
    >
      {children}
    </StyledSwiper>
  );
});

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
