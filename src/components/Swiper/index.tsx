import classNames from 'classnames';
import { omit } from 'lodash';
import React, { createRef, PureComponent, ReactNode } from 'react';
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

export class Swiper extends PureComponent<SwiperProps> {
  public static defaultProps = {
    paginationChildren: <div className="swiper-pagination" />,
    navigationChildren: <DefaultNavigation />,
    freeMode: false,
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
  };

  private swiperInstance?: OriginalSwiper;

  private containerRef = createRef<HTMLDivElement>();

  private containerId = generateId();

  public componentDidMount() {
    this.swiperInstance = new OriginalSwiper(
      `#${this.containerId}`,
      omit(this.props, ['getSwiperInstance', 'className', 'children', 'navigationChildren', 'paginationChildren'])
    );
    if (this.props.getSwiperInstance) {
      this.props.getSwiperInstance(this.swiperInstance);
    }
  }

  public componentWillUnmount() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
    }
  }

  public render() {
    const { className, children, navigationChildren, paginationChildren } = this.props;

    return (
      <div id={this.containerId} className={classNames('swiper-container', className)} ref={this.containerRef}>
        <div className="swiper-wrapper">{children}</div>
        {navigationChildren}
        {paginationChildren}
      </div>
    );
  }
}
