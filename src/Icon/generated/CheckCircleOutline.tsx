import React from "react";
import { IconProps } from '../index';
export default class SvgCheckCircleOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 18C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.5-6L17 9.5 15.5 8l-5 5-2-2L7 12.5l3.5 3.5z" /></svg>;
  }

}