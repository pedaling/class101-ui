import React from "react";
import { IconProps } from '../index';
export default class SvgLikeOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4 11.495c0-.55.443-.995.999-.995h1.002c.552 0 .999.456.999.995v8.01c0 .55-.443.995-.999.995H4.999c-.552 0-.999-.456-.999-.995v-8.01zM19.64 8.5a2 2 0 0 1 1.972 2.329l-1.473 8.835a1 1 0 0 1-.986.836H10a1 1 0 0 1-1-1v-9L12 3h1.405a3 3 0 0 1 3 3c0 .112-.135.945-.405 2.5h3.64zM11 10.885V18.5h7.306l1.333-8h-6.035l.785-4.321A1 1 0 0 0 13.405 5h-.05L11 10.885z" /></svg>;
  }

}