import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPhotoOutline extends React.PureComponent<IconProps> {
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
          d="M4 3h16c.552 0 1 .423 1 .944v16.112c0 .521-.448.944-1 .944H4c-.552 0-1-.423-1-.944V3.944C3 3.423 3.448 3 4 3zm1 2v14h14V5H5zm4 8l2.03 2.71L14 12l4 5H6l3-4z"
        />
      </svg>
    );
  }
}
