import React from "react";
import { IconProps } from '../index';
export default class SvgLink extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5 19h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6v2H5v14zm16-9h-2V6.5L13.5 12 12 10.5 17.5 5H14V3h7v7z" /></svg>;
  }

}