import * as React from 'react';
import { IconProps } from '../index';
export default class SvgDropDown extends React.PureComponent<IconProps> {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M17 10l-5 5-5-5h10z" fill={this.props.fillColor} />
      </svg>
    );
  }
}
