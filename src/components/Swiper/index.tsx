// eslint-disable-next-line prettier/prettier
import classNames from 'classnames';
import React, { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import type { SwiperOptions } from 'swiper';
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Lazy,
  Navigation,
  Pagination,
  Swiper as OriginalSwiper,
  Virtual,
} from 'swiper/dist/js/swiper.esm.js';
import { createUniqIDGenerator } from '../../utils/createUniqIDGenerator';
import { DefaultNavigation } from './DefaultNavigation';

OriginalSwiper.use([Navigation, Pagination, Autoplay, Virtual, Lazy, Keyboard, EffectFade]);

export type SwiperInstance = OriginalSwiper;

export interface SwiperProps extends SwiperOptions {
  children?: ReactNode;
  navigationChildren?: ReactNode;
  paginationChildren?: ReactNode;
  getSwiperInstance?: (swiperInstance: OriginalSwiper) => void;
  className?: string;
  'data-element-name'?: string;
}

const generateId = createUniqIDGenerator('swiper-');

export const Swiper: FC<SwiperProps> = ({
  getSwiperInstance,
  className = '',
  children,
  navigationChildren = <DefaultNavigation />,
  paginationChildren = <div className="swiper-pagination" />,
  'data-element-name': dataElementName,
  pagination = {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed = 400,
  threshold = 10,
  observer = true,
  ...swiperOptions
}) => {
  const swiperRef: MutableRefObject<OriginalSwiper | null> = useRef(null);
  const swiperOptionsRef: MutableRefObject<SwiperOptions> = useRef({
    ...swiperOptions,
    pagination,
    navigation,
    speed,
    threshold,
    observer,
  });
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
    <div id={containerId} data-element-name={dataElementName} className={classNames('swiper-container', className)}>
      <div className="swiper-wrapper">{children}</div>
      {navigationChildren}
      {paginationChildren}
    </div>
  );
};
