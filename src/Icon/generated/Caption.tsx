import * as React from 'react';
import { IconProps } from '../index';
export default class SvgCaption extends React.PureComponent<IconProps> {
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
        <path d="M18.5 2v4h-2V4h-5v16h2v2h-6v-2h2V4h-5v2h-2V2h16z" fill={this.props.fillColor} />
        <path d="M22 14v1.5h-2.75v5h1.25V22h-4v-1.5h1.25v-5H15V14h7z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
