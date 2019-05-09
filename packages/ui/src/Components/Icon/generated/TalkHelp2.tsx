import React from "react";
import { IconProps } from '../index';
export default class SvgTalkHelp2 extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M21.632 21.632l-5.347-.594A9.964 9.964 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.964 9.964 0 0 1-.962 4.285l.594 5.347zm-2.264-2.264l-.384-3.452.138-.268a8 8 0 1 0-3.474 3.474l.268-.138 3.452.384zM11 18h2v-2h-2v2zm1-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>;
  }

}