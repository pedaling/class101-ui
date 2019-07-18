import React from "react";
import { IconProps } from '../index';
export default class SvgPlayFast extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M11 14.667l-6.445 4.297A1 1 0 013 18.13V5.87a1 1 0 011.555-.833L11 9.333V5.87a1 1 0 011.555-.833l9.197 6.132a1 1 0 010 1.664l-9.197 6.132A1 1 0 0111 18.13v-3.464z" /></svg>;
  }

}