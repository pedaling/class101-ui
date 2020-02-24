import * as React from 'react';
import { IconProps } from '../index';
export default class SvgHeartOutline extends React.PureComponent<IconProps> {
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
          d="M18.586 15.086c2.07-2.07 2.914-3.572 2.914-5.586A3.5 3.5 0 0018 6c-1.074 0-1.92.392-2.829 1.19-.222.196-.396.363-.757.724L13 9.328l-1.414-1.414a14.862 14.862 0 00-.757-.724C9.919 6.392 9.074 6 8 6a3.5 3.5 0 00-3.5 3.5c0 2.014.844 3.516 2.914 5.586 1.038 1.037 2.91 2.277 5.586 3.67 2.677-1.393 4.548-2.633 5.586-3.67zM6 16.5c-1.911-1.911-3.5-3.962-3.5-7A5.5 5.5 0 018 4c2.5 0 4 1.5 5 2.5 1-1 2.5-2.5 5-2.5a5.5 5.5 0 015.5 5.5c0 3.038-1.589 5.089-3.5 7-1.333 1.333-3.667 2.833-7 4.5-3.333-1.667-5.667-3.167-7-4.5z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
