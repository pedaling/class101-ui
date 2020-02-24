import * as React from 'react';
import { IconProps } from '../index';
export default class SvgVideo extends React.PureComponent<IconProps> {
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
          d="M1.218 4.092C1 4.52 1 5.08 1 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C2.52 21 3.08 21 4.2 21h15.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C23 19.48 23 18.92 23 17.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C21.48 3 20.92 3 19.8 3H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874zm9.296 11.765A1 1 0 019 15V9a1 1 0 011.514-.858l5 3a1 1 0 010 1.716l-5 3z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
