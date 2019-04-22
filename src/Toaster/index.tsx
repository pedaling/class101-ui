import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Portal from '../Portal';
import { Position } from '../Position';
import { default as Toast, Props as ToastProps } from '../Toast';

export type ToasterPosition =
  | typeof Position.TOP
  | typeof Position.TOP_LEFT
  | typeof Position.TOP_RIGHT
  | typeof Position.BOTTOM
  | typeof Position.BOTTOM_LEFT
  | typeof Position.BOTTOM_RIGHT;

export const ToasterDefaultPosition = Position.TOP;

type ToastData = ToastProps & { key: string };

interface Props {
  container: HTMLDivElement;
}

interface State {
  toasts: ToastData[];
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

  constructor(props: Props) {
    super(props);

    this.state = {
      toasts: [],
    };
    this.show = this.show.bind(this);
  }

  public render() {
    const { toasts } = this.state;

    return (
      <Portal>
        <ToasterContainer>
          <TopToastsContainer>{this.drawToasts(toasts, Position.TOP)}</TopToastsContainer>
          <TopLeftToastsContainer>{this.drawToasts(toasts, Position.TOP_LEFT)}</TopLeftToastsContainer>
          <TopRightToastsContainer>{this.drawToasts(toasts, Position.TOP_RIGHT)}</TopRightToastsContainer>
          <BottomToastsContainer>{this.drawToasts(toasts, Position.BOTTOM)}</BottomToastsContainer>
          <BottomLeftToastsContainer>{this.drawToasts(toasts, Position.BOTTOM_LEFT)}</BottomLeftToastsContainer>
          <BottomRightToastsContainer>{this.drawToasts(toasts, Position.BOTTOM_RIGHT)}</BottomRightToastsContainer>
        </ToasterContainer>
      </Portal>
    );
  }

  public componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.props.container);
  }

  public show(props: ToastProps) {
    const key = this.generateHash();
    this.setState(prevState => ({
      toasts: [...prevState.toasts, { ...props, key }],
    }));

    if (props.timeout === 0) {
      return;
    }
  }

  private generateHash() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  private drawToasts(toasts: ToastData[], position: ToasterPosition) {
    return toasts
      .filter(toast => (toast.position ? toast.position === position : ToasterDefaultPosition === position))
      .map(toast => {
        const dismiss = () => {
          this.dismiss(toast.key);
        };
        return <Toast key={toast.key} {...toast} dismiss={dismiss} />;
      })
      .reverse();
  }

  private dismiss(key: string) {
    this.setState(prevState => ({
      toasts: prevState.toasts.filter(toast => toast.key !== key),
    }));
  }
}

const ToasterContainer = styled.div``;

const TopToastsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 312px;
  z-index: 10000;
`;

const TopLeftToastsContainer = styled.div`
  position: fixed;
  top: 0;
  margin-left: 20px;
  z-index: 10000;
`;

const TopRightToastsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 20px;
  z-index: 10000;
`;

const BottomToastsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 312px;
  display: flex;
  flex-direction: column-reverse;
  z-index: 10000;
`;

const BottomLeftToastsContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 20px;
  display: flex;
  flex-direction: column-reverse;
  z-index: 10000;
`;

const BottomRightToastsContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  display: flex;
  flex-direction: column-reverse;
  z-index: 10000;
`;
