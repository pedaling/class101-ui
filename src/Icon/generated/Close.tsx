import React from "react";
import { IconProps } from '../index';
export default class SvgClose extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><defs><path id="close_svg__a" d="M17.59 5L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></defs><use fill={this.props.fillColor} fillRule="evenodd" xlinkHref="#close_svg__a" /></svg>;
  }

}