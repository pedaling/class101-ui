/* eslint-disable arrow-body-style */
import React, { ForwardedRef, forwardRef } from 'react';
import SwiperCore, {
  Autoplay, EffectFade, Keyboard, Lazy, Navigation, Pagination, Virtual,
} from 'swiper';
import { Swiper as OriginalSwiper } from 'swiper/react';
import { DefaultNavigation } from './DefaultNavigation';

SwiperCore.use([Autoplay, EffectFade, Keyboard, Lazy, Navigation, Pagination, Virtual]);

export type SwiperInstance = SwiperCore;

export type SwiperProps = OriginalSwiper &
  React.PropsWithChildren<{
    className?: string;
    navigationChildren?: React.ReactNode;
    paginationChildren?: React.ReactNode;
    forwarededRef: ForwardedRef<SwiperInstance>;
  }>;

const SwiperElement = React.memo<SwiperProps>((props: SwiperProps) => {
  const {
    children,
    navigation = { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' },
    navigationChildren = <DefaultNavigation />,
    pagination = { el: '.swiper-pagination', type: 'bullets', clickable: true },
    paginationChildren = <div className="swiper-pagination" />,
    speed = 400,
    threshold = 10,
    observer = true,
    forwarededRef,
    ...restProps
  } = props;
  return (
    <OriginalSwiper
      navigation={navigation}
      pagination={pagination}
      speed={speed}
      threshold={threshold}
      observer={observer}
      onSwiper={(swiper) => {
        if (!forwarededRef) {
          return;
        }
        if (swiper) {
          if (typeof forwarededRef === 'function') {
            forwarededRef(swiper);
          } else {
            forwarededRef.current = swiper;
          }
        }
      }}
      {...restProps}
    >
      {children}
      {navigationChildren}
      {paginationChildren}
    </OriginalSwiper>
  );
});

export const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  return <SwiperElement {...props} forwarededRef={ref} />;
});
