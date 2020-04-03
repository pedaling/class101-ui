import * as React from 'react';
import { IconProps } from '../index';
export default class SvgGearOutline extends React.PureComponent<IconProps> {
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
          d="M20.873 18.68l-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.566-.81-.34-2.838.78-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.791 2.839.334.81L23 10.447v3.136l-2.567 1.448-.34.813.78 2.837zm-2.892-2.972l.872-2.082L21 12.414v-.804l-2.147-1.22-.859-2.083.662-2.375-.569-.568-2.383.655-2.08-.872L12.413 3h-.804l-1.22 2.147-2.083.859-2.376-.663-.566.566.655 2.383-.872 2.08L3 11.582v.805l2.145 1.222.859 2.083-.662 2.376.567.567 2.383-.655 2.08.872 1.21 2.146h.805l1.222-2.145 2.083-.859 2.376.662.568-.568-.655-2.381zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
