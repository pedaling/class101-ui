import * as React from 'react';
import { IconProps } from '../index';
export default class SvgVolume extends React.PureComponent<IconProps> {
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
          d="M6 17H2a1 1 0 01-1-1V8a1 1 0 011-1h4l5.445-3.832A1 1 0 0113 4v16a1 1 0 01-1.555.832L6 17zM15.02 3.804a1 1 0 011.176-.785C19.901 3.76 23 7.186 23 12c0 4.815-3.1 8.24-6.804 8.981a1 1 0 01-.392-1.96C18.61 18.457 21 15.816 21 12c0-3.818-2.389-6.458-5.196-7.02a1 1 0 01-.785-1.176zm.148 3.641a1 1 0 011.387-.277C18.225 8.28 19 9.987 19 12s-.775 3.719-2.445 4.832a1 1 0 11-1.11-1.664C16.515 14.455 17 13.387 17 12c0-1.387-.486-2.455-1.555-3.168a1 1 0 01-.277-1.387z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
