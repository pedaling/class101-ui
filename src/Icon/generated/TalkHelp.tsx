import * as React from 'react';
import { IconProps } from '../index';
export default class SvgTalkHelp extends React.PureComponent<IconProps> {
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
          d="M23 12c0 2.224-.66 4.294-1.795 6.025L22 22l-3.975-.795A10.949 10.949 0 0112 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-10 6v-2h-2v2h2zM12 6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.323-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.705-1.712 1.432-2.347l.009-.008C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
