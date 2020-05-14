import * as React from 'react';
import { IconProps } from '../index';
export default class SvgEarybird extends React.PureComponent<IconProps> {
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
          d="M3 5.315h2.14c1.557-1.218 3.043-1.59 4.456-1.116 2.12.712 2.603 2.118 2.58 3.801v.896a9.543 9.543 0 008.058-4.056s3.58 8.057-4.477 11.638C17.601 17.73 19.773 18.088 22 18c-2 1-4 2-7 2C9 20 4 15.577 4 9c0-.667.064-1.257.19-1.77A61.901 61.901 0 013 5.315z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
