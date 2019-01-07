import React from "react";
import { IconProps } from '../index';
export default class SvgCompass extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M10.65 13.35l3.601.901-.9-3.602-2.702 2.702zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.596-4.132a1 1 0 0 1-1.213.728L9 15 7.404 8.617a1 1 0 0 1 1.213-1.213L15 9l1.596 6.383a1 1 0 0 1 0 .485z" /></svg>;
  }

}