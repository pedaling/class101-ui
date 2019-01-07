import React from "react";
import { IconProps } from '../index';
export default class SvgHeart extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5 16.5c-1.911-1.911-3.5-3.962-3.5-7A5.5 5.5 0 0 1 7 4c2.5 0 4 1.5 5 2.5 1-1 2.5-2.5 5-2.5a5.5 5.5 0 0 1 5.5 5.5c0 3.038-1.589 5.089-3.5 7-1.333 1.333-3.667 2.833-7 4.5-3.333-1.667-5.667-3.167-7-4.5z" /></svg>;
  }

}