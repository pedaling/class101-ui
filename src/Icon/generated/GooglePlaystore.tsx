import React from "react";
import { IconProps } from '../index';
export default class SvgGooglePlaystore extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4.033 21.26A1.016 1.016 0 014 21V3c0-.09.012-.178.033-.26l9.26 9.26-9.26 9.26zm.708.706L14 12.707l2.802 2.802L5.49 21.872a.986.986 0 01-.75.094zM16.8 8.491L14 11.293l-9.26-9.26a.986.986 0 01.75.095l11.312 6.363zm.906.51l3.783 2.127a1 1 0 010 1.744L17.707 15l-3-3 3-3z" /></svg>;
  }

}