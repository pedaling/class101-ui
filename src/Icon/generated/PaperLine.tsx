import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPaperLine extends React.PureComponent<IconProps> {
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
          d="M6 3a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6zm12 2H6v14h12V5z"
          fill={this.props.fillColor}
        />
        <path
          d="M9 7h6a1 1 0 110 2H9a1 1 0 010-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2zm0 4h6a1 1 0 110 2H9a1 1 0 110-2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
