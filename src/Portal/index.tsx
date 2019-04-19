import React from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
  container?: HTMLElement;
}

export default class Portal extends React.Component<Props> {
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

  public render() {
    const { children } = this.props;
    return ReactDom.createPortal(children, this.containerEl);
  }

  public componentWillUnmount() {
    if (!this.props.container) {
      document.body.removeChild(this.containerEl);
    }
  }
}
