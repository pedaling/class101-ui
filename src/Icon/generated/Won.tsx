import * as React from 'react';
import { IconProps } from '../index';
export default class SvgWon extends React.PureComponent<IconProps> {
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
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fill={this.props.fillColor}
          fillRule="evenodd"
          d="M6.107 10.071L5.25 6.214h1.607l1.929 9 1.928-9h2.572l1.928 9 1.929-9h1.607l-.857 3.857h1.821v1.286h-2.107l-1.428 6.429H14.25L12 8.143l-2.25 9.643H7.821l-1.428-6.429H4.286v-1.286h1.821z"
        />
      </svg>
    );
  }
}
