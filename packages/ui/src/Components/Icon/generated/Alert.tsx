import React from "react";
import { IconProps } from '../index';
export default class SvgAlert extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M21.872 19.51A1 1 0 0 1 21 21H3a1 1 0 0 1-.872-1.49l9-16a1 1 0 0 1 1.744 0l9 16zM13 15V9h-2v6h2zm0 3v-2h-2v2h2z" /></svg>;
  }

}