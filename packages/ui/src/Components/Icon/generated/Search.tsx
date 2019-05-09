import React from "react";
import { IconProps } from '../index';
export default class SvgSearch extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M15.593 14.54L20.5 19 19 20.5l-4.46-4.907a6.5 6.5 0 1 1 1.054-1.054zM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" /></svg>;
  }

}