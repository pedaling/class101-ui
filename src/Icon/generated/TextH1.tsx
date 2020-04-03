import * as React from 'react';
import { IconProps } from '../index';
export default class SvgTextH1 extends React.PureComponent<IconProps> {
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
        <path d="M2.5 3h2v8h9V3h2v18h-2v-8h-9v8h-2V3z" fill={this.props.fillColor} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.948 11.648a.75.75 0 01.302.602v7.25H23V21h-5v-1.5h1.75v-6.242l-1.535.46-.43-1.436 2.5-.75a.75.75 0 01.663.116z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
