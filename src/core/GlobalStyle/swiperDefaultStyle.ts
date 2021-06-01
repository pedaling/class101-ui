import { css } from 'styled-components';

/**
 * Swiper 6.7.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 31, 2021
 */
const swiperStyle = css`
  :root {
    --swiper-theme-color: #007aff;
  }
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-container-pointer-events {
    touch-action: pan-y;
  }
  .swiper-container-pointer-events.swiper-container-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
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
    align-items: flex-start;
    transition-property: transform, height;
  }
  /* 3D Effects */
  .swiper-container-3d {
    perspective: 1200px;
  }
  .swiper-container-3d .swiper-wrapper,
  .swiper-container-3d .swiper-slide,
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom,
  .swiper-container-3d .swiper-cube-shadow {
    transform-style: preserve-3d;
  }
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-container-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  /* CSS Mode */
  .swiper-container-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  :root {
    --swiper-navigation-size: 44px;
    /*
    --swiper-navigation-color: var(--swiper-theme-color);
    */
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }
  .swiper-button-prev.swiper-button-white,
  .swiper-button-next.swiper-button-white {
    --swiper-navigation-color: #ffffff;
  }
  .swiper-button-prev.swiper-button-black,
  .swiper-button-next.swiper-button-black {
    --swiper-navigation-color: #000000;
  }
  .swiper-button-lock {
    display: none;
  }
  :root {
    /*
    --swiper-pagination-color: var(--swiper-theme-color);
    */
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
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
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    background: #000;
    opacity: 0.2;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 6px 0;
    display: block;
  }
  .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
  .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    transition: 200ms transform, 200ms top;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition: 200ms transform, 200ms left;
  }
  .swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }
  /* Progress */
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top;
  }
  .swiper-container-horizontal > .swiper-pagination-progressbar,
  .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .swiper-container-vertical > .swiper-pagination-progressbar,
  .swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
  .swiper-pagination-white {
    --swiper-pagination-color: #ffffff;
  }
  .swiper-pagination-black {
    --swiper-pagination-color: #000000;
  }
  .swiper-pagination-lock {
    display: none;
  }
  /* Scrollbar */
  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, 0.1);
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
  }
  .swiper-container-vertical > .swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
  }
  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }
  .swiper-scrollbar-lock {
    display: none;
  }
  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .swiper-zoom-container > img,
  .swiper-zoom-container > svg,
  .swiper-zoom-container > canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .swiper-slide-zoomed {
    cursor: move;
  }
  /* Preloader */
  :root {
    /*
    --swiper-preloader-color: var(--swiper-theme-color);
    */
  }
  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    animation: swiper-preloader-spin 1s infinite linear;
    box-sizing: border-box;
    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
    border-radius: 50%;
    border-top-color: transparent;
  }
  .swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff;
  }
  .swiper-lazy-preloader-black {
    --swiper-preloader-color: #000;
  }
  @keyframes swiper-preloader-spin {
    100% {
      transform: rotate(360deg);
    }
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
    transition-timing-function: ease-out;
  }
  .swiper-container-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
  }
  .swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-fade .swiper-slide-active,
  .swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube {
    overflow: visible;
  }
  .swiper-container-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
  }
  .swiper-container-cube .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-cube.swiper-container-rtl .swiper-slide {
    transform-origin: 100% 0;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-cube .swiper-slide-active,
  .swiper-container-cube .swiper-slide-next,
  .swiper-container-cube .swiper-slide-prev,
  .swiper-container-cube .swiper-slide-next + .swiper-slide {
    pointer-events: auto;
    visibility: visible;
  }
  .swiper-container-cube .swiper-slide-shadow-top,
  .swiper-container-cube .swiper-slide-shadow-bottom,
  .swiper-container-cube .swiper-slide-shadow-left,
  .swiper-container-cube .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 0;
  }
  .swiper-container-cube .swiper-cube-shadow:before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(50px);
  }
  .swiper-container-flip {
    overflow: visible;
  }
  .swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
  }
  .swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-container-flip .swiper-slide-active,
  .swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-container-flip .swiper-slide-shadow-top,
  .swiper-container-flip .swiper-slide-shadow-bottom,
  .swiper-container-flip .swiper-slide-shadow-left,
  .swiper-container-flip .swiper-slide-shadow-right {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

export default swiperStyle;
