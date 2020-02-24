import * as React from 'react';
import { IconProps } from '../index';
export default class SvgLeaf extends React.PureComponent<IconProps> {
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
        <path
          fill="#D7CAA4"
          d="M7.22 20.985a3.63 3.63 0 01-.053-.005 18.575 18.575 0 01-2.443 1.467.5.5 0 11-.447-.894c.578-.29 1.14-.611 1.688-.966C5.21 20.121 4.722 19.258 4.5 18c-.347-1.97-.014-3.636 1-5 1.653.697 2.653 2.03 3 4 .096.543.14 1.037.132 1.483a21.532 21.532 0 002.08-2.279c-.92-.231-1.639-.865-2.157-1.9-.666-1.333-.666-3.333 0-6 2 .8 3.334 2.119 4 3.957.093.255.166.5.22.737.384-.785.677-1.568.88-2.35C12.218 9.912 11.5 8.696 11.5 7c0-2 1-4 3-6 2 2 3 4 3 6 0 1.964-.964 3.285-2.893 3.963-.172.647-.4 1.293-.685 1.938a5.71 5.71 0 01.563-.322c1.333-.666 3.333-.666 6 0-.735 2.816-2.068 4.483-4 5-1.786.479-3.297.029-4.532-1.35a23.568 23.568 0 01-1.872 2.222c.105-.005.213-.007.323-.007 1.768 0 3.32.38 4.652 1.141-.908 1.981-2.362 2.971-4.362 2.971-1.786 0-2.944-.523-3.474-1.571z"
        />
      </svg>
    );
  }
}
