import * as React from 'react';
import { IconProps } from '../index';
export default class SvgAlertCircleOutline extends React.PureComponent<IconProps> {
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
          d="M13 13.5v-6h-2v6h2zm0 3v-2h-2v2h2z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
