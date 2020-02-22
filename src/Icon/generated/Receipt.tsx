import * as React from 'react';
import { IconProps } from '../index';
export default class SvgReceipt extends React.PureComponent<IconProps> {
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
        <defs>
          <path
            id="receipt_svg__a"
            d="M19 2a1 1 0 011 1v18a1 1 0 01-1.555.832l-2.318-1.545-1.42 1.42A.993.993 0 0114 22a.993.993 0 01-.707-.293L12 20.414l-1.293 1.293a.999.999 0 01-1.414 0l-1.42-1.42-2.318 1.545A1 1 0 014 21V3a1 1 0 011-1h14zm-1 17.132V4H6v15.132l1.445-.964a1 1 0 011.262.125L10 19.586l1.293-1.293a.997.997 0 011.414 0L14 19.586l1.293-1.293a.998.998 0 011.262-.125l1.445.964zM9 6h6a1 1 0 010 2H9a1 1 0 110-2zm0 4h6a1 1 0 010 2H9a1 1 0 010-2zm0 4h6a1 1 0 010 2H9a1 1 0 010-2z"
          />
        </defs>
        <use fill={this.props.fillColor} fillRule="evenodd" xlinkHref="#receipt_svg__a" />
      </svg>
    );
  }
}
