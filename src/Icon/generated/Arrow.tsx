import * as React from 'react';
import { IconProps } from '../index';
export default class SvgArrow extends React.PureComponent<IconProps> {
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
        <defs>
          <path id="arrow_svg__a" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </defs>
        <use fill={this.props.fillColor} fillRule="evenodd" xlinkHref="#arrow_svg__a" />
      </svg>
    );
  }
}
