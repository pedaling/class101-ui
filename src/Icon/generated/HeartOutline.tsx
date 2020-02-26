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
          d="M17.586 14.738c2.07-2.192 2.914-3.782 2.914-5.914 0-2.047-1.567-3.706-3.5-3.706-1.074 0-1.92.414-2.829 1.26-.222.207-.396.384-.757.766L12 8.642l-1.414-1.498a15.28 15.28 0 00-.757-.766c-.91-.846-1.755-1.26-2.829-1.26-1.933 0-3.5 1.659-3.5 3.706 0 2.132.844 3.722 2.914 5.914 1.038 1.099 2.91 2.41 5.586 3.885 2.677-1.474 4.548-2.786 5.586-3.885zM5 16.235c-1.911-2.023-3.5-4.195-3.5-7.411C1.5 5.607 3.962 3 7 3c2.5 0 4 1.588 5 2.647C13 4.588 14.5 3 17 3c3.038 0 5.5 2.607 5.5 5.824 0 3.216-1.589 5.388-3.5 7.411-1.333 1.412-3.667 3-7 4.765-3.333-1.765-5.667-3.353-7-4.765z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
