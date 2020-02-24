import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSheild extends React.PureComponent<IconProps> {
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
          d="M12 18c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zm.073-16.5h-.146C9.729 3.337 6.549 4.5 3 4.5V12c0 7.524 9 10.5 9 10.5s9-3 9-10.5V4.5c-3.549 0-6.729-1.163-8.927-3zm.426 10.754l.251 1.996h-1.5l.25-1.996a1.124 1.124 0 01-.625-1.004 1.125 1.125 0 012.25 0c0 .441-.257.818-.626 1.004zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
