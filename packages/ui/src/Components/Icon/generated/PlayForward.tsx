import React from "react";
import { IconProps } from '../index';
export default class SvgPlayForward extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M18.553 4.447L21 2v6h-6l2.135-2.135a8 8 0 1 0 1.735 10.236l1.71 1.038A9.995 9.995 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c2.507 0 4.798.922 6.553 2.447zM11.96 16c-1.697 0-2.854-1.022-2.902-2.416h1.508c.092.648.665 1.08 1.405 1.08.838 0 1.416-.561 1.416-1.41 0-.86-.583-1.432-1.41-1.432-.606 0-1.065.264-1.335.702H9.18L9.571 8h4.902v1.357h-3.638l-.173 2.005h.097c.33-.476.882-.762 1.655-.762 1.48 0 2.53 1.086 2.53 2.616 0 1.654-1.195 2.784-2.985 2.784z" /></svg>;
  }

}