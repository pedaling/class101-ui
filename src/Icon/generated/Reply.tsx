import * as React from 'react';
import { IconProps } from '../index';
export default class SvgReply extends React.PureComponent<IconProps> {
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
          d="M2.368 21.632l.594-5.347A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.965 9.965 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.383.268.137A7.96 7.96 0 0012 20a8 8 0 10-8-8c0 1.287.304 2.53.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
