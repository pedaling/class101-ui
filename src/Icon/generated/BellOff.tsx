import React from "react";
import { IconProps } from '../index';
export default class SvgBellOff extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4.5 19H4v-2l1-.5V11a7.003 7.003 0 015.5-6.839V3.5a1.5 1.5 0 013 0v.661a6.993 6.993 0 013.693 2.146L19.5 4 21 5.5l-2.619 2.619C18.78 8.997 19 9.973 19 11v5.5l1 .5v2H7.5l-3 3L3 20.5 4.5 19zm5-2H17v-6c0-.458-.062-.902-.177-1.323L9.5 17zM7 16.5l8.777-8.777A5 5 0 007 11v5.5zm3 3.5h4a2 2 0 11-4 0z" /></svg>;
  }

}