import React from "react";
import { IconProps } from '../index';
export default class SvgChevronLeft extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} fill="none" style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M15.5 5.5l-6 6.5 6 6.5L14 20l-7.5-8L14 4l1.5 1.5z" fill={this.props.fillColor} /></svg>;
  }

}