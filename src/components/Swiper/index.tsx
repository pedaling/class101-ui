import classNames from 'classnames';
import React, { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import { SwiperOptions } from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Swiper as OriginalSwiper,
  Virtual,
  Lazy,
  Keyboard,
} from 'swiper/dist/js/swiper.esm.js';

import { createUniqIDGenerator } from '../../utils/createUniqIDGenerator';
import { DefaultNavigation } from './DefaultNavigation';

OriginalSwiper.use([Navigation, Pagination, Autoplay, Virtual, Lazy, Keyboard]);

export type SwiperInstance = OriginalSwiper;

export interface SwiperProps extends SwiperOptions {
  children?: ReactNode;
  navigationChildren?: ReactNode;
  paginationChildren?: ReactNode;
  getSwiperInstance?: (swiperInstance: OriginalSwiper) => void;
  className?: string;
}

const generateId = createUniqIDGenerator('swiper-');

export const Swiper: FC<SwiperProps> = ({
  getSwiperInstance,
  className,
  children,
  navigationChildren,
  paginationChildren,
  ...swiperOptions
}) => {
  const swiperRef: MutableRefObject<OriginalSwiper | null> = useRef(null);
  const swiperOptionsRef: MutableRefObject<SwiperOptions> = useRef(swiperOptions);
  const [containerId, setContainerId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setContainerId(generateId());
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  useEffect(() => {
    if (containerId) {
      swiperRef.current = new OriginalSwiper(`#${containerId}`, swiperOptionsRef.current);
    }
  }, [containerId, swiperRef, swiperOptionsRef]);

  useEffect(() => {
    if (containerId && getSwiperInstance && swiperRef.current) {
      getSwiperInstance(swiperRef.current);
    }
  }, [containerId, getSwiperInstance, swiperRef]);

  return (
    <div id={containerId} className={classNames('swiper-container', className)}>
      <div className="swiper-wrapper">{children}</div>
      {navigationChildren}
      {paginationChildren}
    </div>
  );
};

Swiper.defaultProps = {
  paginationChildren: <div className="swiper-pagination" />,
  navigationChildren: <DefaultNavigation />,
  freeMode: false,
  observer: true,
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
