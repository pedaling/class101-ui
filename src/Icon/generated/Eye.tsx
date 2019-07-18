import React from "react";
import { IconProps } from '../index';
export default class SvgEye extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} fill="none" style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M4 12c2 4.001 4.667 6.002 8 6.002S18 16 20 12c-2-4-4.667-6-8-6s-6 2-8 6zm-1.789.894a2 2 0 010-1.788C4.524 6.48 7.831 4 12 4c4.17 0 7.476 2.48 9.789 7.106a2 2 0 010 1.788c-2.313 4.627-5.62 7.107-9.789 7.107-4.17 0-7.476-2.48-9.789-7.107zM12 8a1 1 0 110 2 2 2 0 102 2 1 1 0 112 0 4 4 0 11-4-4z" fill={this.props.fillColor} /></svg>;
  }

}