import React from "react";
import { IconProps } from '../index';
export default class SvgDropDown extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fillRule="evenodd" d="M17 10l-5 5-5-5z" /></svg>;
  }

}