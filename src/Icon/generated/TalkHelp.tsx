import React from "react";
import { IconProps } from '../index';
export default class SvgTalkHelp extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M2.368 21.632l.594-5.347A9.964 9.964 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.964 9.964 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.138a8 8 0 10-3.474-3.474l.138.268-.384 3.452zM11 18h2v-2h-2v2zm1-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>;
  }

}