import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSorting extends React.PureComponent<IconProps> {
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
        <mask id="sorting_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 17a1 1 0 100 2h9a1 1 0 100-2H3zM3 13a1 1 0 100 2h12a1 1 0 100-2H3zM3 5a1 1 0 100 2h18a1 1 0 100-2H3zM3 9a1 1 0 000 2h15a1 1 0 100-2H3z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17a1 1 0 100 2h9a1 1 0 100-2H3zM3 13a1 1 0 100 2h12a1 1 0 100-2H3zM3 5a1 1 0 100 2h18a1 1 0 100-2H3zM3 9a1 1 0 000 2h15a1 1 0 100-2H3z"
          fill={this.props.fillColor}
        />
        <path
          d="M4 18a1 1 0 01-1 1v-4a3 3 0 00-3 3h4zm-1-1a1 1 0 011 1H0a3 3 0 003 3v-4zm9 0H3v4h9v-4zm-1 1a1 1 0 011-1v4a3 3 0 003-3h-4zm1 1a1 1 0 01-1-1h4a3 3 0 00-3-3v4zm-9 0h9v-4H3v4zm1-5a1 1 0 01-1 1v-4a3 3 0 00-3 3h4zm-1-1a1 1 0 011 1H0a3 3 0 003 3v-4zm12 0H3v4h12v-4zm-1 1a1 1 0 011-1v4a3 3 0 003-3h-4zm1 1a1 1 0 01-1-1h4a3 3 0 00-3-3v4zM3 15h12v-4H3v4zm1-9a1 1 0 01-1 1V3a3 3 0 00-3 3h4zM3 5a1 1 0 011 1H0a3 3 0 003 3V5zm18 0H3v4h18V5zm-1 1a1 1 0 011-1v4a3 3 0 003-3h-4zm1 1a1 1 0 01-1-1h4a3 3 0 00-3-3v4zM3 7h18V3H3v4zm1 3a1 1 0 01-1 1V7a3 3 0 00-3 3h4zM3 9a1 1 0 011 1H0a3 3 0 003 3V9zm15 0H3v4h15V9zm-1 1a1 1 0 011-1v4a3 3 0 003-3h-4zm1 1a1 1 0 01-1-1h4a3 3 0 00-3-3v4zM3 11h15V7H3v4z"
          fill={this.props.fillColor}
          mask="url(#sorting_svg__a)"
        />
      </svg>
    );
  }
}
