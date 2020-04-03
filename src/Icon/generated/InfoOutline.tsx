import * as React from 'react';
import { IconProps } from '../index';
export default class SvgInfoOutline extends React.PureComponent<IconProps> {
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
          d="M12 3c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9zm11 9c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zm-12-1v6h2v-6h-2zm0-4v2h2V7h-2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
