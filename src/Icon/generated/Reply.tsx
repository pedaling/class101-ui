import React from "react";
import { IconProps } from '../index';
export default class SvgReply extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M2.368 21.632l.594-5.347A9.964 9.964 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.964 9.964 0 0 1-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.138a8 8 0 1 0-3.474-3.474l.138.268-.384 3.452zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>;
  }

}