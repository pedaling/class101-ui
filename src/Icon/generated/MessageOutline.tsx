import React from "react";
import { IconProps } from '../index';
export default class SvgMessageOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm3.514 2.143L12 10.833l4.486-2.69a1 1 0 1 1 1.028 1.714l-5 3a1 1 0 0 1-1.028 0l-5-3a1 1 0 1 1 1.028-1.714z" /></svg>;
  }

}