import React from "react";
import { IconProps } from '../index';
export default class SvgEditBody extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M9 4.5v3h5v12h3v-12h5v-3H9zm-6 8h3v7h3v-7h3v-3H3v3z" /></svg>;
  }

}