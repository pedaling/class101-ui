import { css } from 'styled-components';

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
const swiperStyle = css`
  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height, -webkit-transform;
    transition-property: height, -webkit-transform;
    -o-transition-property: transform, height;
    transition-property: transform, height;
    transition-property: transform, height, -webkit-transform;
  }
  /* IE10 Windows Phone 8 Fixes */
  .swiper-container-wp8-horizontal,
  .swiper-container-wp8-horizontal > .swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .swiper-container-wp8-vertical,
  .swiper-container-wp8-vertical > .swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-lock {
    display: none;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
    pointer-events: none;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    -webkit-transform: scale(0.66);
    -ms-transform: scale(0.66);
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    -webkit-transform: scale(0.66);
    -ms-transform: scale(0.66);
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    -webkit-transform: scale(0.33);
    -ms-transform: scale(0.33);
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    pointer-events: auto;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0px, -50%, 0);
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 6px 0;
    display: block;
  }
  .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 8px;
  }
  .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    -webkit-transition: 200ms top, 200ms -webkit-transform;
    transition: 200ms top, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms top;
    transition: 200ms transform, 200ms top;
    transition: 200ms transform, 200ms top, 200ms -webkit-transform;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    -webkit-transition: 200ms left, 200ms -webkit-transform;
    transition: 200ms left, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms left;
    transition: 200ms transform, 200ms left;
    transition: 200ms transform, 200ms left, 200ms -webkit-transform;
  }
  .swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transition: 200ms right, 200ms -webkit-transform;
    transition: 200ms right, 200ms -webkit-transform;
    -o-transition: 200ms transform, 200ms right;
    transition: 200ms transform, 200ms right;
    transition: 200ms transform, 200ms right, 200ms -webkit-transform;
  }
  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000000;
  }
  .swiper-pagination-lock {
    display: none;
  }

  /* a11y */
  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
  }
  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-fade .swiper-slide-active,
  .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-coverflow .swiper-wrapper {
    /* Windows 8 IE 10 fix */
    -ms-perspective: 1200px;
  }
`;

export default swiperStyle;
