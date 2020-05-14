import * as React from 'react';
import { IconProps } from '../index';
export default class SvgNaverTalk extends React.PureComponent<IconProps> {
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
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fill={this.props.fillColor}
          fillRule="evenodd"
          d="M4.983 3.5H17.38c.272 0 .535.093.747.263l2.43 1.958c.28.226.443.567.443.927v9.743a1.983 1.983 0 01-1.983 1.984h-8.41c-.837 0-1.64.33-2.235.92l-1.939 1.922a.992.992 0 01-1.324.065l-1.963-1.598A.397.397 0 013 19.376V5.483C3 4.388 3.888 3.5 4.983 3.5zm.304.694c-.877 0-1.587.71-1.587 1.587l.002 13.314a.198.198 0 00.343.136l1.246-1.324a5.365 5.365 0 013.908-1.69h7.714c.877 0 1.587-.71 1.587-1.586v-8.85c0-.877-.71-1.587-1.587-1.587H5.287zm2.463 3.67a.95.95 0 01.95.95v2.363a.95.95 0 11-1.9 0V8.813a.95.95 0 01.95-.95zm6.6 0a.95.95 0 01.95.95v2.363a.95.95 0 11-1.9 0V8.813a.95.95 0 01.95-.95z"
        />
      </svg>
    );
  }
}
