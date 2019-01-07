import React from "react";
import { IconProps } from '../index';
export default class SvgBright extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M19 7a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0v4zm7.485 3.929a1 1 0 0 1-1.414-1.414L27.9 6.686a1 1 0 0 1 1.415 1.415l-2.829 2.828zM29 19a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4zm-3.929 7.485a1 1 0 0 1 1.414-1.414l2.829 2.828a1 1 0 0 1-1.415 1.415l-2.828-2.829zM17 29a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4zm-7.485-3.929a1 1 0 1 1 1.414 1.414L8.1 29.314a1 1 0 1 1-1.415-1.415l2.829-2.828zM7 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h4zm3.929-7.485a1 1 0 1 1-1.414 1.414L6.686 8.1a1 1 0 0 1 1.415-1.415l2.828 2.829zM18 26a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>;
  }

}