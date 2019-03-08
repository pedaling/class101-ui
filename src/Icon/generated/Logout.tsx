import React from "react";
import { IconProps } from '../index';
export default class SvgLogout extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5 19h5v-3h2v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4h-2V5H5v14zm12.173-8l-3.587-3.586L15 6l6.001 6L15 18l-1.414-1.414L17.173 13H9v-2h8.173z" /></svg>;
  }

}