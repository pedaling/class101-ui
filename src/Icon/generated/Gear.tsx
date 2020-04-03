import * as React from 'react';
import { IconProps } from '../index';
export default class SvgGear extends React.PureComponent<IconProps> {
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
          d="M20.873 18.68l-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.566-.81-.34-2.838.78-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.791 2.839.334.81L23 10.447v3.136l-2.567 1.448-.34.813.78 2.837zM12 16a4 4 0 110-8 4 4 0 010 8z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
