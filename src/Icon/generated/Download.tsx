import React from "react";
import { IconProps } from '../index';
export default class SvgDownload extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19 19v-6h2v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h2v6h14zm-6-7.827l3.586-3.587L18 9l-6 6.001L6 9l1.414-1.414L11 11.173V3h2v8.173z" /></svg>;
  }

}