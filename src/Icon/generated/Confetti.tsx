import React from 'react';
import { IconProps } from '../index';
export default class SvgConfetti extends React.PureComponent<IconProps> {
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
          d="M20.5 14.998a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 4.999a1 1 0 110-2 1 1 0 010 2zM3.387 21.92c-.824.344-1.65-.483-1.307-1.307l5-11.999a1 1 0 011.629-.322l6.999 6.999a1 1 0 01-.322 1.63l-11.999 5zm12.32-11.214a1 1 0 01-1.413-1.414l2-2a1 1 0 011.6.26l.38.759 1.02-1.02a1 1 0 111.413 1.415l-2 2a1 1 0 01-1.6-.26l-.38-.76-1.02 1.02zm-3.706-4.707v1a1 1 0 01-2 0v-2a1 1 0 011-1h1V3a1 1 0 112 0v2a1 1 0 01-1 1h-1z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
