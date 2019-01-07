import React from "react";
import { IconProps } from '../index';
export default class SvgVolume extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5 14v8h4a2 2 0 0 1 1.11.336L16 26.263V9.737l-5.89 3.927A2 2 0 0 1 9 14H5zm-2-.504C3 12.67 3.665 12 4.514 12H9l7.445-4.964A1 1 0 0 1 18 7.87V28.13a1 1 0 0 1-1.555.833L9 24H4.514C3.678 24 3 23.32 3 22.504v-9.008zm18.9-.696a1 1 0 1 1 1.2-1.6c.449.337 1.081.942 1.709 1.806C25.862 14.454 26.5 16.128 26.5 18c0 1.872-.638 3.546-1.691 4.994-.628.864-1.26 1.47-1.709 1.806a1 1 0 0 1-1.2-1.6c.063-.047.196-.16.377-.332.31-.298.623-.65.914-1.05.822-1.13 1.309-2.408 1.309-3.818 0-1.41-.487-2.688-1.309-3.818a7.872 7.872 0 0 0-.914-1.05 4.734 4.734 0 0 0-.377-.332zm1.013 18.153a1 1 0 1 1-.606-1.906C26.875 27.593 30.5 22.8 30.5 18c0-4.769-3.642-9.574-8.198-11.049a1 1 0 1 1 .616-1.902C28.285 6.786 32.5 12.348 32.5 18c0 5.685-4.2 11.238-9.587 12.953z" /></svg>;
  }

}