import classNames from 'classnames';
import { omit } from 'lodash';
import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { SwiperOptions } from 'swiper';
import { Autoplay, Navigation, Pagination, Swiper as OriginalSwiper } from 'swiper/dist/js/swiper.esm.js';

import { isServer } from '../../utils';
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
  nextButton?: ReactNode;
  prevButton?: ReactNode;
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
    const { className, children, nextButton, prevButton, navigationChildren, paginationChildren, id } = this.props;

    if (isServer() && !id) {
      throw Error('Set `id` when SSR');
    }

    const generatedId = id || this.generatedId;

    if (nextButton && prevButton) {
      return (
        <Container className={className}>
          <div id={generatedId} className="swiper-container">
            <div className="swiper-wrapper">{children}</div>
            {paginationChildren}
          </div>
          <div className="swiper-default-navigation">
            {prevButton &&
              React.cloneElement(prevButton as React.ReactElement<any>, {
                className: `swiper-button-prev ${generatedId}-prev`,
              })}
            {nextButton &&
              React.cloneElement(nextButton as React.ReactElement<any>, {
                className: `swiper-button-next ${generatedId}-next`,
              })}
          </div>
        </Container>
      );
    }

    return (
      <div id={generatedId} className={classNames('swiper-container', className)}>
        <div className="swiper-wrapper">{children}</div>
        {navigationChildren}
        {paginationChildren}
      </div>
    );
  }

  private buildSwiper() {
    const { id, prevButton, nextButton } = this.props;

    if (this.swiperInstance) {
      return;
    }

    const generatedId = id || this.generatedId;

    this.swiperInstance = new OriginalSwiper(`#${id || this.generatedId}`, {
      ...omit(this.props, ['getSwiperInstance', 'className', 'children', 'navigationChildren', 'paginationChildren']),
      navigation: {
        ...(prevButton && nextButton
          ? {
              nextEl: `.swiper-button-next.${generatedId}-next`,
              prevEl: `.swiper-button-prev.${generatedId}-prev`,
            }
          : this.props.navigation),
      },
    });

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

const Container = styled.div`
  position: relative;
`;
