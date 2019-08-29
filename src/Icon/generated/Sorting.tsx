import React from "react";
import { IconProps } from '../index';
export default class SvgSorting extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} fill="none" style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M10 11h11V9H10v2zm2 4h9v-2h-9v2zm2 4h7v-2h-7v2z" fill={this.props.fillColor} /><path d="M21 7H10V5h11v2zM5 5h2v13H5z" fill={this.props.fillColor} /><path fillRule="evenodd" clipRule="evenodd" d="M9 16l-3 4-3-4h6z" fill={this.props.fillColor} /></svg>;
  }

}