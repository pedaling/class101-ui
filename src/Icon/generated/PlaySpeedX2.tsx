import React from "react";
import { IconProps } from '../index';
export default class SvgPlaySpeedX2 extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M20.953 18.5h-8.79v-1.744l4.148-4.421c.57-.623.99-1.166 1.264-1.63.273-.464.41-.904.41-1.32 0-.57-.144-1.018-.432-1.344-.288-.326-.699-.489-1.233-.489-.576 0-1.03.198-1.36.595-.333.396-.498.917-.498 1.563h-2.555c0-.78.187-1.494.56-2.14.372-.646.9-1.153 1.58-1.52.682-.367 1.454-.55 2.317-.55 1.321 0 2.347.317 3.078.951.731.634 1.097 1.53 1.097 2.687 0 .634-.165 1.28-.493 1.937-.33.658-.893 1.424-1.692 2.299l-2.915 3.074h5.514V18.5zM9.5 13l-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1z" /></svg>;
  }

}