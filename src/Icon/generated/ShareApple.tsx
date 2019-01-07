import React from "react";
import { IconProps } from '../index';
export default class SvgShareApple extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19 19v-6h2v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7h2v6h14zM13 6.829l3.586 3.587L18 9 12 3 6 9.001l1.414 1.415L11 6.829V15h2V6.83z" /></svg>;
  }

}