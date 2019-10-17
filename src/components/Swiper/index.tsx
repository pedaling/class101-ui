import React, { ReactNode, useEffect, useRef } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { SwiperOptions } from 'swiper';
import { Autoplay, Navigation, Pagination, Swiper as OriginalSwiper } from 'swiper/dist/js/swiper.esm.js';

import { media } from '../../core/BreakPoints';
import { gray700, white } from '../../core/Colors';
import { createUniqIDGenerator } from '../../utils/createUniqIDGenerator';
import { DefaultNavigation } from './DefaultNavigation';

OriginalSwiper.use([Navigation, Pagination, Autoplay]);

export enum SwiperNavigationPosition {
  TopRightOut,
  BottomRightOut,
  BottomRightIn,
}

export enum SwiperPaginationTheme {
  Dark,
  Light,
}

export interface SwiperProps extends SwiperOptions {
  children: React.ReactNode;
  customNavigation: ReactNode;
  customPagination: ReactNode;
  paginationTheme: SwiperPaginationTheme;
  navigationPosition: SwiperNavigationPosition;
  transparentPagination: boolean;
  containerContentMaxWidth?: number;
  hasPagination: boolean;
  hasNavigation: boolean;
  getSwiperInstance?: (swiperInstance: OriginalSwiper) => void;
}

const generateId = createUniqIDGenerator('swiper-');

export const Swiper = (props: SwiperProps) => {
  const containerId = generateId();
  const swiperRef: React.MutableRefObject<OriginalSwiper | null> = useRef<OriginalSwiper>(null);
  useEffect(() => {
    swiperRef.current = new OriginalSwiper(`#${containerId}`, props);
    if (props.getSwiperInstance) {
      props.getSwiperInstance(swiperRef.current);
    }
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <SwiperContainer
      id={containerId}
      className="swiper-container"
      navigation={props.hasNavigation}
      pagination={props.hasPagination}
      paginationTheme={props.paginationTheme}
      navigationPosition={props.navigationPosition}
      transparentPagination={props.transparentPagination}
      containerContentMaxWidth={props.containerContentMaxWidth}
    >
      <SwiperWrapper className="swiper-wrapper">{props.children}</SwiperWrapper>
      {props.customNavigation}
      {props.customPagination}
    </SwiperContainer>
  );
};

Swiper.defaultProps = {
  loop: false,
  slideToClickedSlide: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  customNavigation: <DefaultNavigation />,
  customPagination: <div className="swiper-pagination" />,
  navigationPosition: SwiperNavigationPosition.TopRightOut,
  paginationTheme: SwiperPaginationTheme.Dark,
  transparentPagination: false,
  threshold: 10,
  speed: 400,
  spaceBetween: 16,
  slidesOffsetAfter: 16,
  slidesOffsetBefore: 16,
  hasNavigation: true,
  hasPagination: false,
} as Partial<SwiperProps>;

const paginationPositionStyle: { [key in SwiperNavigationPosition]: FlattenSimpleInterpolation } = {
  [SwiperNavigationPosition.TopRightOut]: css`
    bottom: 16px;
  `,
  [SwiperNavigationPosition.BottomRightOut]: css`
    bottom: 8px;
  `,
  [SwiperNavigationPosition.BottomRightIn]: css`
    bottom: 16px;
  `,
};

// box-shadow가 잘리지 않도록 영역에서 1px 가감합니다.
const navigationPositionStyle: { [key in SwiperNavigationPosition]: FlattenSimpleInterpolation } = {
  [SwiperNavigationPosition.TopRightOut]: css`
    top: 0;
    transform: translateX(calc(-50% - 1px));
  `,
  [SwiperNavigationPosition.BottomRightOut]: css`
    top: auto;
    bottom: 33px;
    transform: translateX(calc(-50% - 1px));
  `,
  [SwiperNavigationPosition.BottomRightIn]: css`
    top: auto;
    bottom: 47px;
    transform: translateX(calc(-50% - 31px));
  `,
};

interface SwiperContainerProps {
  navigation: boolean;
  navigationPosition: SwiperNavigationPosition;
  paginationTheme: SwiperPaginationTheme;
  pagination: boolean;
  transparentPagination: boolean;
  containerContentMaxWidth?: number;
}

const SwiperContainer = styled.div<SwiperContainerProps>`
  .swiper-default-navigation {
    position: absolute;
    ${props => navigationPositionStyle[props.navigationPosition]};
    left: 50%;
    z-index: 1;
    width: ${props =>
      props.containerContentMaxWidth ? `calc(100% - ${props.containerContentMaxWidth * 2}px)` : '100%'};
    ${props => props.containerContentMaxWidth && `max-width: ${props.containerContentMaxWidth + 32 * 2}px`};
    ${media.sm`
      display: none;
    `};
  }

  ${props =>
    !props.pagination &&
    css`
      .swiper-pagination {
        display: none;
      }
    `};

  ${props =>
    !props.navigation &&
    css`
      .swiper-default-naviation,
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
    `};

  ${props =>
    props.navigation &&
    props.navigationPosition === SwiperNavigationPosition.BottomRightOut &&
    css`
      padding-bottom: 48px;
    `};

  ${props =>
    props.navigation &&
    props.navigationPosition === SwiperNavigationPosition.TopRightOut &&
    css`
      padding-top: 48px;
      margin-top: -48px;
    `};

  ${props =>
    props.pagination &&
    props.navigationPosition !== SwiperNavigationPosition.BottomRightIn &&
    props.navigationPosition !== SwiperNavigationPosition.TopRightOut &&
    css`
      padding-bottom: 48px;
    `};

  ${props =>
    props.transparentPagination &&
    css`
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
    `}
  .swiper-pagination {
    ${props => paginationPositionStyle[props.navigationPosition]};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    margin: 0 8px;
    border-radius: 3px;
    background-color: ${props => (props.paginationTheme === SwiperPaginationTheme.Light ? white : gray700)};
    opacity: 0.56;
  }
  .swiper-pagination-bullet-active {
    width: 24px;
    background-color: ${props => (props.paginationTheme === SwiperPaginationTheme.Light ? white : gray700)};
    opacity: 1;
  }
`;

const SwiperWrapper = styled.div``;
