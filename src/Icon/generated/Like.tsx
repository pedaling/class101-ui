import React from "react";
import { IconProps } from '../index';
export default class SvgLike extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M4 11.495c0-.55.443-.995.999-.995h1.002c.552 0 .999.456.999.995v8.01c0 .55-.443.995-.999.995H4.999c-.552 0-.999-.456-.999-.995v-8.01zM14 9.5h5.604a2 2 0 011.967 2.358l-1.422 7.82a1 1 0 01-.984.822H10a1 1 0 01-1-1v-9L12 3c1.5 0 2.5 1 2.5 2.5 0 1-.167 2.333-.5 4z" /></svg>;
  }

}