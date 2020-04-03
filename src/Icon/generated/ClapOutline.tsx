import * as React from 'react';
import { IconProps } from '../index';
export default class SvgClapOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.415 4.004a1 1 0 01.792.289l5.298 5.298.119-.415A3 3 0 0119.509 7H22v8a3 3 0 01-.879 2.121l-5 5a3 3 0 01-4.238.005L4.409 14.81a2 2 0 01-.235-2.582l5.509-7.805a1 1 0 01.732-.42zm.217 2.543L5.808 13.38l7.485 7.326a1 1 0 001.414 0l5-5A1 1 0 0020 15V9h-.491a1 1 0 00-.962.725l-.585 2.05-1.67.432-5.66-5.66z"
          fill={this.props.fillColor}
        />
        <path
          d="M18.5 5.5V4h-2.797a1 1 0 00-.94.662L14.5 5.5l1.418 1.418L16.5 5.5h2zM8.83 2.006a2 2 0 00-2.994.385l-5 7a2 2 0 00.25 2.523l.483.483 7.26-10.391z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
