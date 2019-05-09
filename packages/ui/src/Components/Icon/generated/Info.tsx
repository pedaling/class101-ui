import React from "react";
import { IconProps } from '../index';
export default class SvgInfo extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19.071 19.071C17.118 21.024 14.761 22 12 22s-5.118-.976-7.071-2.929C2.976 17.118 2 14.761 2 12s.976-5.118 2.929-7.071C6.882 2.976 9.239 2 12 2s5.118.976 7.071 2.929C21.024 6.882 22 9.239 22 12s-.976 5.118-2.929 7.071zM11 11v6h2v-6h-2zm0-4v2h2V7h-2z" /></svg>;
  }

}