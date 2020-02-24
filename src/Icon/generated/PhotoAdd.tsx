import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPhotoAdd extends React.PureComponent<IconProps> {
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
          d="M21 14h-2V5H5v13h10v2H4c-.552 0-1-.423-1-.944V3.944C3 3.423 3.448 3 4 3h16c.552 0 1 .423 1 .944V14zM9 12.5l2 2.01L14.5 10l2.5 3v3H6l3-3.5zM19 18v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
        />
      </svg>
    );
  }
}
