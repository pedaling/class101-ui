import React from 'react';
import { SwiperSlide } from 'swiper/react';

type SlideProps = {
  className?: string;
};

const Slide = ({ className }: SlideProps): JSX.Element => <SwiperSlide className={className} />;

export default Slide;
