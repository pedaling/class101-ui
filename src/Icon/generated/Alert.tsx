import * as React from 'react';
import { IconProps } from '../index';
export default class SvgAlert extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} fill="none" style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M21.872 19.51A1 1 0 0121 21H3a1 1 0 01-.872-1.49l9-16a1 1 0 011.744 0l9 16zM13 15V9h-2v6h2zm0 3v-2h-2v2h2z" fill={this.props.fillColor} /></svg>;
  }

}