import React from "react";
import { IconProps } from '../index';
export default class SvgCoupon extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M16.586 15l-1.293-1.293a1 1 0 0 1 1.414-1.414L18 13.586l3.086-3.086-1.82-1.82a3.002 3.002 0 0 1-3.788-3.788L13.5 2.914 10.414 6l1.293 1.293a1 1 0 1 1-1.414 1.414L9 7.414 2.914 13.5l1.978 1.978a3.002 3.002 0 0 1 3.787 3.787l1.821 1.82L16.586 15zM3.979 17.393L1.5 14.914a2 2 0 0 1 0-2.828L12.086 1.5a2 2 0 0 1 2.828 0l2.48 2.48a1 1 0 0 1 .113 1.278 1 1 0 0 0 1.392 1.392 1 1 0 0 1 1.279.114L22.5 9.086a2 2 0 0 1 0 2.828L11.914 22.5a2 2 0 0 1-2.828 0l-2.322-2.322a1 1 0 0 1-.114-1.28 1 1 0 0 0-1.392-1.391 1 1 0 0 1-1.279-.114zm8.314-6.686a1 1 0 1 1 1.414-1.414l1 1a1 1 0 0 1-1.414 1.414l-1-1z" /></svg>;
  }

}