import React from "react";
import { IconProps } from '../index';
export default class SvgHome extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5.957 9.71A1 1 0 0 1 6 10v9h3v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h3v-9a1 1 0 0 1 .043-.29l-2.207-1.963L12 4.338 5.957 9.709zM4 11.45l-.336.297a1 1 0 1 1-1.328-1.494l9-8a1 1 0 0 1 1.328 0l4.5 4 4.5 4a1 1 0 0 1-1.328 1.494L20 11.45V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.55z" /></svg>;
  }

}