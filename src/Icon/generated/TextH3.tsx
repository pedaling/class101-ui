import * as React from 'react';
import { IconProps } from '../index';
export default class SvgTextH3 extends React.PureComponent<IconProps> {
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
          d="M2.5 2h2v9h9V2h2v20h-2v-9h-9v9h-2V2zM20.25 13.5c-1 0-1.496.56-1.5 1.254l-1.5-.008c.009-1.52 1.25-2.746 3-2.746s3 1.232 3 2.751c0 1-.25 1.766-1 2.249.75.483 1 1.25 1 2.249 0 1.52-1.25 2.751-3 2.751s-2.991-1.227-3-2.746l1.5-.008c.004.694.5 1.254 1.5 1.254.85 0 1.5-.5 1.5-1.45 0-.8-.68-1.3-1.25-1.3H19v-1.5h1.5c.57 0 1.25-.5 1.25-1.3 0-.95-.65-1.45-1.5-1.45z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
