import React from 'react';
import { IconProps } from '../index';
export default class SvgVideoOutline extends React.PureComponent<IconProps> {
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
          d="M4.846 5c-.917 0-1.142.043-1.368.164a.727.727 0 00-.314.314c-.12.226-.164.45-.164 1.368v10.308c0 .918.043 1.142.164 1.368.075.14.174.239.314.314.226.12.45.164 1.368.164h14.308c.918 0 1.142-.043 1.368-.164a.728.728 0 00.314-.314c.12-.226.164-.45.164-1.368V6.846c0-.917-.043-1.142-.164-1.368a.728.728 0 00-.314-.314c-.226-.12-.45-.164-1.368-.164H4.846zm0-2h14.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v10.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 01-1.135 1.134c-.489.262-.974.401-2.31.401H4.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 011.4 19.464c-.262-.489-.401-.974-.401-2.31V6.844c0-1.336.14-1.821.4-2.31A2.726 2.726 0 012.536 3.4C3.024 3.139 3.509 3 4.845 3zm8.21 9L11 10.766v2.468L13.056 12zM9 15V9a1 1 0 011.514-.857l5 3a1 1 0 010 1.714l-5 3A1 1 0 019 15z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
