import React from "react";
import { IconProps } from '../index';
export default class SvgEarybird extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M3 5.315h2.14c1.557-1.218 3.043-1.59 4.456-1.116 2.12.712 2.603 2.118 2.58 3.801v.896a9.543 9.543 0 0 0 8.058-4.056s3.58 8.057-4.477 11.638C17.601 17.73 19.773 18.088 22 18c-2 1-4 2-7 2C9 20 4 15.577 4 9c0-.667.064-1.257.19-1.77A61.884 61.884 0 0 1 3 5.315z" /></svg>;
  }

}