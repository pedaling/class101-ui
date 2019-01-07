import React from "react";
import { IconProps } from '../index';
export default class SvgPlaySpeedX1 extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M18.5 18.5H16V7.88L13 8.9V6.7L18 5h.5v13.5zm-9-5.5l-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1z" /></svg>;
  }

}