import React from "react";
import { IconProps } from '../index';
export default class SvgAdd extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>;
  }

}