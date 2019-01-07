import React from "react";
import { IconProps } from '../index';
export default class SvgConfetti extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M25.168 16.555L24 14.803l-1.168 1.752a1 1 0 1 1-1.664-1.11l2-3a1 1 0 0 1 1.664 0L26 14.197l1.168-1.752a1 1 0 1 1 1.664 1.11l-2 3a1 1 0 0 1-1.664 0zM16 9v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h3V4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-3zm12 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM25 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1.707 4.293l10 10a1 1 0 0 1-.356 1.643l-16 6c-.804.302-1.589-.483-1.287-1.287l6-16a1 1 0 0 1 1.643-.356z" /></svg>;
  }

}