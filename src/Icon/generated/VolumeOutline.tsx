import * as React from 'react';
import { IconProps } from '../index';
export default class SvgVolumeOutline extends React.PureComponent<IconProps> {
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
          d="M15.02 3.804a1 1 0 011.176-.784C19.901 3.76 23 7.186 23 12s-3.1 8.24-6.804 8.98a1 1 0 11-.392-1.96C18.611 18.458 21 15.818 21 12c0-3.817-2.389-6.458-5.196-7.02a1 1 0 01-.784-1.176zm.148 3.641a1 1 0 011.387-.277C18.225 8.282 19 9.987 19 12c0 2.014-.775 3.719-2.445 4.832a1 1 0 11-1.11-1.664C16.515 14.456 17 13.387 17 12c0-1.386-.486-2.455-1.555-3.168a1 1 0 01-.277-1.387z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.633 15L11 18.073V5.927L6.633 9H3v6h3.633zm4.812-11.832L6 7H2a1 1 0 00-1 1v8a1 1 0 001 1h4l5.445 3.832A1 1 0 0013 20V4a1 1 0 00-1.555-.832z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
