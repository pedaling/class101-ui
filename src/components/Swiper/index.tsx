import classNames from 'classnames';
import { omit } from 'lodash';
import React, { PureComponent, ReactNode } from 'react';
import { SwiperOptions } from 'swiper';
import { Autoplay, Navigation, Pagination, Swiper as OriginalSwiper } from 'swiper/dist/js/swiper.esm.js';
import { isServer } from 'utils';

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
  id?: string;
}

const generateId = createUniqIDGenerator('swiper-');

export class Swiper extends PureComponent<SwiperProps> {
  public static defaultProps = {
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
  };

  private swiperInstance?: OriginalSwiper;

  private generatedId = generateId();

  public componentDidMount() {
    this.buildSwiper();
  }

  public componentWillUnmount() {
    this.destorySwiper();
  }

  public render() {
    const { className, children, navigationChildren, paginationChildren, id } = this.props;

    if (isServer() && !id) {
      throw Error('Set `id` when SSR');
    }

    return (
      <div id={id || this.generatedId} className={classNames('swiper-container', className)}>
        <div className="swiper-wrapper">{children}</div>
        {navigationChildren}
        {paginationChildren}
      </div>
    );
  }

  private buildSwiper() {
    const { id } = this.props;

    if (this.swiperInstance) {
      return;
    }

    this.swiperInstance = new OriginalSwiper(
      `#${id || this.generatedId}`,
      omit(this.props, ['getSwiperInstance', 'className', 'children', 'navigationChildren', 'paginationChildren'])
    );

    if (this.props.getSwiperInstance) {
      this.props.getSwiperInstance(this.swiperInstance);
    }
  }

  private destorySwiper() {
    if (!this.swiperInstance) {
      return;
    }
    this.swiperInstance.destroy(true, true);
  }
}
