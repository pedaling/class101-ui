import React, { ReactNode, useEffect, useMemo, useRef } from 'react';
import { SwiperOptions } from 'swiper';
import { Autoplay, Navigation, Pagination, Swiper as OriginalSwiper } from 'swiper/dist/js/swiper.esm.js';

import { createUniqIDGenerator } from '../../utils/createUniqIDGenerator';
import { DefaultNavigation } from './DefaultNavigation';

OriginalSwiper.use([Navigation, Pagination, Autoplay]);

export type SwiperInstance = OriginalSwiper;

export interface SwiperProps extends SwiperOptions {
  children?: ReactNode;
  navigationChildren?: ReactNode;
  paginationChildren?: ReactNode;
  getSwiperInstance?: (swiperInstance: OriginalSwiper) => void;
  className?: string;
}

const generateId = createUniqIDGenerator('swiper-');

export const Swiper = (props: SwiperProps) => {
  const swiperRef: React.MutableRefObject<OriginalSwiper | null> = useRef<OriginalSwiper>(null);
  const containerId = useMemo(() => generateId(), []);

  /* eslint-disable */
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
  /* eslint-enable */

  return (
    <div id={containerId} className={`swiper-container ${props.className}`}>
      <div className="swiper-wrapper">{props.children}</div>
      {props.navigationChildren}
      {props.paginationChildren}
    </div>
  );
};

Swiper.defaultProps = {
  paginationChildren: <div className="swiper-pagination" />,
  navigationChildren: <DefaultNavigation />,
  loop: false,
  slideToClickedSlide: false,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  threshold: 10,
  speed: 400,
  className: '',
} as Partial<SwiperProps>;
