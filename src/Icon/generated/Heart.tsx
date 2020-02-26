import * as React from 'react';
import { IconProps } from '../index';
export default class SvgHeart extends React.PureComponent<IconProps> {
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
          d="M5 16.235c-1.911-2.023-3.5-4.195-3.5-7.411C1.5 5.607 3.962 3 7 3c2.5 0 4 1.588 5 2.647C13 4.588 14.5 3 17 3c3.038 0 5.5 2.607 5.5 5.824 0 3.216-1.589 5.388-3.5 7.411-1.333 1.412-3.667 3-7 4.765-3.333-1.765-5.667-3.353-7-4.765z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
