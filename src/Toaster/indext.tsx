import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const Position = {
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  LEFT: 'left',
  LEFT_BOTTOM: 'left-bottom',
  LEFT_TOP: 'left-top',
  RIGHT: 'right',
  RIGHT_BOTTOM: 'right-bottom',
  RIGHT_TOP: 'right-top',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
};

export type Position = typeof Position[keyof typeof Position];

export type ToasterPosition =
  | typeof Position.TOP
  | typeof Position.TOP_LEFT
  | typeof Position.TOP_RIGHT
  | typeof Position.BOTTOM
  | typeof Position.BOTTOM_LEFT
  | typeof Position.BOTTOM_RIGHT;

interface Props {
  position?: ToasterPosition;
}

export default class Toaster extends React.PureComponent<Props> {
  public static create(container = document.body) {
    const containerElement = document.createElement('div');
    containerElement.className = 'class101-ui-toaster';
    container.appendChild(containerElement);

    const toaster = ReactDOM.createPortal(<Toaster />, containerElement);

    return toaster;
  }

  public render() {
    return <ToasterContainer>I am Toaster</ToasterContainer>;
  }
}

const ToasterContainer = styled.div``;
