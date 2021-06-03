/* eslint-disable max-len */
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
  }>;
type SwiperElementProps = SwiperProps & {
  forwarededRef: ForwardedRef<SwiperInstance>;
};

const SwiperElement = (props: SwiperElementProps) => {
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
      {React.Children.map(children, (c) => {
        if (React.isValidElement(c)) {
          const SlideElement = () => React.cloneElement(c, {
            ...props,
          });
          SlideElement.displayName = 'SwiperSlide';
          return <SlideElement />;
        }
        return c;
      })}
      {navigationChildren}
      {paginationChildren}
    </OriginalSwiper>
  );
};

export const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => (
  <SwiperElement {...props} forwarededRef={ref} />
));
