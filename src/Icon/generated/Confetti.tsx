import React from "react";
import { IconProps } from '../index';
export default class SvgConfetti extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} fill="none" style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M20.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 6a1 1 0 110-2 1 1 0 010 2zM6.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM3.385 21.923c-.825.344-1.651-.483-1.308-1.308l5-12a1 1 0 011.63-.322l7 7a1 1 0 01-.322 1.63l-12 5zm13.322-9.216a1 1 0 01-1.414-1.414l2-2a1 1 0 011.601.26l.38.759 1.019-1.02a1 1 0 111.414 1.415l-2 2a1 1 0 01-1.601-.26l-.38-.759-1.019 1.02zM13 7v2a1 1 0 11-2 0V6a1 1 0 011-1h1V3a1 1 0 112 0v3a1 1 0 01-1 1h-1z" fill={this.props.fillColor} /></svg>;
  }

}