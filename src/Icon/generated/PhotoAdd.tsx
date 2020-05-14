import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPhotoAdd extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
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
          d="M21 15h-2V4H4v15h11v2H3c-.552 0-1-.423-1-.944V2.944C2 2.423 2.448 2 3 2h17c.552 0 1 .423 1 .944V15zM9 12.5l2 2.5 3-4 3 4v2H5.5L9 12.5zM19 19v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
