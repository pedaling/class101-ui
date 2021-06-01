import React from 'react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Keyboard,
  Lazy,
  Navigation,
  Pagination,
  Virtual,
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
    getSwiperInstance?: (swiperInstance: SwiperInstance) => void;
  }>;

export const Swiper = React.memo<SwiperProps>((props) => {
  const {
    children,
    navigation = { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' },
    navigationChildren = <DefaultNavigation />,
    pagination = { el: '.swiper-pagination', type: 'bullets', clickable: true },
    paginationChildren = <div className="swiper-pagination" />,
    speed = 400,
    threshold = 10,
    observer = true,
    getSwiperInstance,
    ...restProps
  } = props;

  return (
    <OriginalSwiper
      navigation={navigation}
      pagination={pagination}
      speed={speed}
      threshold={threshold}
      observer={observer}
      onSwiper={getSwiperInstance}
      {...restProps}
    >
      {children}
      {navigationChildren}
      {paginationChildren}
    </OriginalSwiper>
  );
});
