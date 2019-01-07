import React from "react";
import { IconProps } from '../index';
export default class SvgStopPlay extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M6 3h4v18H6V3zm8 0h4v18h-4V3z" /></svg>;
  }

}