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
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2h18c.552 0 1 .423 1 .944v18.112c0 .521-.448.944-1 .944H3c-.552 0-1-.423-1-.944V2.944C2 2.423 2.448 2 3 2zm1 2v16h16V4H4zm5 9.5l2 2.5 3-4 4.5 6h-13L9 13.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
