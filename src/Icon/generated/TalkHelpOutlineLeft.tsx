import * as React from 'react';
import { IconProps } from '../index';
export default class SvgTalkHelpOutlineLeft extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
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
          d="M6.387 19.083l.685.45A8.948 8.948 0 0012 21a9 9 0 10-9-9c0 1.823.54 3.513 1.467 4.928l.45.685-.367 1.838 1.837-.368zM2 22l.795-3.975A10.949 10.949 0 011 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11c-2.224 0-4.294-.66-6.025-1.795L2 22z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 18v-2h-2v2h2zM12 6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.323-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.705-1.712 1.432-2.347l.009-.008C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
