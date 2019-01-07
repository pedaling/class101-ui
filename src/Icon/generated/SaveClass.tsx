import React from "react";
import { IconProps } from '../index';
export default class SvgSaveClass extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M21.893 9.65h-2.055c.107-.385.162-.767.162-1.15 0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1h2.968c-.487.445-.993.904-1.518 1.38L12 21.35l-1.45-1.31C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 .39-.036.772-.107 1.15zm-2.893 2v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" /></svg>;
  }

}