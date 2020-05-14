import * as React from 'react';
import { IconProps } from '../index';
export default class SvgPhotoDoubleOutline extends React.PureComponent<IconProps> {
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
          d="M18 22c.552 0 1-.423 1-.944V20H4V5H3c-.552 0-1 .423-1 .944v15.112c0 .521.448.944 1 .944h15z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 2h14c.552 0 1 .423 1 .944v14.112c0 .521-.448.944-1 .944H7c-.552 0-1-.423-1-.944V2.944C6 2.423 6.448 2 7 2zm1 2v12h12V4H8zm4 7l1 1 2-2.5 3.5 4.5h-9l2.5-3z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
