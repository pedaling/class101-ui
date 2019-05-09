import React from "react";
import { IconProps } from '../index';
export default class SvgGift extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M11 10H4v2h7v-2zm2 0v2h7v-2h-7zm-2 4H5v6h6v-6zm2 0v6h6v-6h-6zM5.535 8A4 4 0 0 1 12 3.354 4 4 0 0 1 18.465 8H20c1.219 0 2 .781 2 2v2c0 .843-.374 1.477-1.008 1.788.005.069.008.14.008.212v6c0 1.219-.781 2-2 2H5c-1.219 0-2-.781-2-2v-6c0-.072.003-.143.008-.212C2.374 13.478 2 12.843 2 12v-2c0-1.219.781-2 2-2h1.535zM15 8a2 2 0 1 0-2-2v2h2zm-4-2a2 2 0 1 0-2 2h2V6z" /></svg>;
  }

}