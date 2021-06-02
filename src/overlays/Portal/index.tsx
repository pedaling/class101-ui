import React from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
  container?: HTMLElement;
}

class Portal extends React.Component<Props> {
  private containerEl: HTMLElement;

  constructor(props: Props) {
    super(props);

    if (props.container) {
      this.containerEl = props.container;
    } else {
      this.containerEl = document.createElement('div');
      document.body.appendChild(this.containerEl);
    }

    this.containerEl.className = 'class101-ui-portal';
  }

  public componentWillUnmount(): void {
    const { container } = this.props;
    if (!container) {
      document.body.removeChild(this.containerEl);
    }
  }

  public render(): JSX.Element {
    const { children } = this.props;
    return ReactDom.createPortal(children, this.containerEl);
  }
}

export default Portal;
