import React from "react";
import { IconProps } from '../index';
export default class SvgDepositPassbook extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M21 13l1.69 6.757A1 1 0 0 1 21.72 21H2.28a1 1 0 0 1-.97-1.243L3 13V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9zm-2 0V5H5v8h14zM4.562 15l-1 4h16.876l-1-4H4.562zM7 7h10v2H7V7z" /></svg>;
  }

}