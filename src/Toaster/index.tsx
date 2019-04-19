import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Portal from '../Portal';

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
  container: HTMLDivElement;
  position?: ToasterPosition;
}

interface State {
  toasts: string[];
}

interface ToastProps {
  message: string;
}

interface ToasterInterface {
  show(props: ToastProps): void;
}

export default class Toaster extends React.Component<Props, State> implements ToasterInterface {
  public static async create(container = document.body): Promise<Toaster> {
    const containerElement = document.createElement('div');
    containerElement.className = 'class101-ui-toaster';
    container.appendChild(containerElement);

    const toasterRef = React.createRef<Toaster>();

    await ReactDOM.render<Props>(<Toaster container={containerElement} ref={toasterRef} />, containerElement);

    if (toasterRef.current === null) {
      throw Error('toaster not created!!');
    }
    return toasterRef.current;
  }

  public static destroy(toaster: Toaster) {
    ReactDOM.unmountComponentAtNode(toaster.props.container);
  }

  constructor(props: Props) {
    super(props);

    this.show = this.show.bind(this.show);
  }

  public render() {
    return (
      <Portal>
        <ToasterContainer>I am Toaster</ToasterContainer>
      </Portal>
    );
  }

  public show(props: ToastProps) {
    alert(props.message);
  }
}

const ToasterContainer = styled.div``;
