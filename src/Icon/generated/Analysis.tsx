import * as React from 'react';
import { IconProps } from '../index';
export default class SvgAnalysis extends React.PureComponent<IconProps> {
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
          d="M16.707 10.707a1 1 0 00-1.414-1.414L12 12.586l-1.293-1.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L10 13.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4a1 1 0 00-1 1v13a1 1 0 100 2h20a1 1 0 100-2V5a1 1 0 00-1-1H3zm17 2v12H4V6h16z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
