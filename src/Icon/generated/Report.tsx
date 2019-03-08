import React from "react";
import { IconProps } from '../index';
export default class SvgReport extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M7 15h8v2H6v2h12v-2h-1v-4a5 5 0 0 0-10 0v2zm12 0h1v6H4v-6h1v-2a7 7 0 1 1 14 0v2zM12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm9.192 3.808a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm-18.384 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L2.808 5.222a1 1 0 0 1 0-1.414z" /></svg>;
  }

}