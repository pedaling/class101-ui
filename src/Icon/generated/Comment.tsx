import React from "react";
import { IconProps } from '../index';
export default class SvgComment extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M8.948 4h6.104c1.782 0 2.9.278 3.879.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.097.801 3.879v1.104c0 1.782-.278 2.9-.801 3.879a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.097.801-3.879.801H14l-2 2-2-2H8.948c-1.782 0-2.9-.278-3.879-.801a5.452 5.452 0 0 1-2.268-2.268C2.278 14.953 2 13.834 2 12.052v-1.104c0-1.782.278-2.9.801-3.879A5.452 5.452 0 0 1 5.07 4.801C6.047 4.278 7.166 4 8.948 4zM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>;
  }

}