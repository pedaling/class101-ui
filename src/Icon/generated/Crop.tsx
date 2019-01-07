import React from "react";
import { IconProps } from '../index';
export default class SvgCrop extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M6 6V3a1 1 0 0 1 2 0v3h9a1 1 0 0 1 1 1v9.002L21 16a1 1 0 0 1 0 2l-14 .008a1 1 0 0 1-1-1V9h2v7.007l8-.004V8H3a1 1 0 0 1 0-2h3zm12 15a1 1 0 0 1-2 0v-2h2v2z" /></svg>;
  }

}