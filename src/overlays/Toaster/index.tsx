import Position from 'core/Position';
import { Toast, ToasterPosition, ToastProps } from 'overlays/Toast';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Portal from 'overlays/Portal';
import { Component, createRef } from 'react';

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

export class Toaster extends Component<Props, State> implements ToasterInterface {
  public static async create(container = document.body): Promise<Toaster> {
    const containerElement = document.createElement('div');
    containerElement.className = 'class101-ui-toaster';
    container.appendChild(containerElement);

    const toasterRef = createRef<Toaster>();

    await ReactDOM.render<Props>(
      <Toaster container={containerElement} ref={toasterRef} />,
      containerElement,
    );

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

  public componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.props.container);
  }

  public show(props: ToastProps): string {
    if (props.key) {
      this.setState((prevState) => {
        const toastIndex = prevState.toasts.findIndex((toast) => toast.key === props.key);
        prevState.toasts[toastIndex] = { ...prevState.toasts[toastIndex], ...props };
        return prevState;
      });
      return props.key;
    }
    const key = this.generateHash();
    this.setState((prevState) => ({
      toasts: [...prevState.toasts, { ...props, key }],
    }));

    return key;
  }

  public dismiss(key: string) {
    this.setState((prevState) => ({
      toasts: prevState.toasts.filter((toast) => toast.key !== key),
    }));
  }

  private generateHash() {
    return (
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
  }

  private renderToasts(toasts: ToastData[], position: ToasterPosition) {
    return toasts
      .filter((toast) => (toast.position ? toast.position === position : ToasterDefaultPosition === position))
      .map((toast) => {
        const dismiss = () => {
          this.dismiss(toast.key);
        };
        return <Toast {...toast} dismiss={dismiss} />;
      })
      .reverse();
  }

  public render() {
    const { toasts } = this.state;

    return (
      <Portal>
        <ToasterContainer>
          <TopToastsContainer>{this.renderToasts(toasts, Position.TOP)}</TopToastsContainer>
          <TopLeftToastsContainer>
            {this.renderToasts(toasts, Position.TOP_LEFT)}
          </TopLeftToastsContainer>
          <TopRightToastsContainer>
            {this.renderToasts(toasts, Position.TOP_RIGHT)}
          </TopRightToastsContainer>
          <BottomToastsContainer>
            {this.renderToasts(toasts, Position.BOTTOM)}
          </BottomToastsContainer>
          <BottomLeftToastsContainer>
            {this.renderToasts(toasts, Position.BOTTOM_LEFT)}
          </BottomLeftToastsContainer>
          <BottomRightToastsContainer>
            {this.renderToasts(toasts, Position.BOTTOM_RIGHT)}
          </BottomRightToastsContainer>
        </ToasterContainer>
      </Portal>
    );
  }
}

const ToasterContainer = styled.div``;

const TopToastsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: auto;
  transform: translateX(-50%);
  z-index: 10000;
`;

const TopLeftToastsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  left: 50%;
  width: auto;
  transform: translateX(-50%);
  flex-direction: column-reverse;
  z-index: 10000;
`;

const BottomLeftToastsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
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
