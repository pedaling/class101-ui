import React from "react";
import { IconProps } from '../index';
export default class SvgUndo extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M6.829 10l3.587 3.586L9 15 3 9l6.001-6 1.415 1.414L6.829 8H15A6 6 0 0 1 15 20h-3v-2h3a4 4 0 0 0 0-8H6.829z" /></svg>;
  }

}