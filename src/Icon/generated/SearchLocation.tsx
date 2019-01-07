import React from "react";
import { IconProps } from '../index';
export default class SvgSearchLocation extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4.537 12.75a7.502 7.502 0 0 0 6.713 6.713V17h1.5v2.463a7.502 7.502 0 0 0 6.713-6.713H17v-1.5h2.463a7.502 7.502 0 0 0-6.713-6.713V7h-1.5V4.537a7.502 7.502 0 0 0-6.713 6.713H7v1.5H4.537zM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" /></svg>;
  }

}