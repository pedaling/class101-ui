import React from "react";
import { IconProps } from '../index';
export default class SvgToggleOn extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><defs><path id="toggle-on_svg__a" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" /></defs><g fill="none" fillRule="evenodd"><mask id="toggle-on_svg__b" fill="#fff"><use xlinkHref="#toggle-on_svg__a" /></mask><use fill={this.props.fillColor} xlinkHref="#toggle-on_svg__a" /><circle cx={12} cy={12} r={4} fill="#FFF" mask="url(#toggle-on_svg__b)" /></g></svg>;
  }

}