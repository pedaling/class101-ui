import React from "react";
import { IconProps } from '../index';
export default class SvgVideo extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M5.846 6c-.917 0-1.142.043-1.368.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368v8.308c0 .917.043 1.142.164 1.368.075.14.174.239.314.314.226.12.45.164 1.368.164h12.308c.917 0 1.142-.043 1.368-.164a.727.727 0 0 0 .314-.314c.12-.226.164-.45.164-1.368V7.846c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.226-.12-.45-.164-1.368-.164H5.846zm0-2h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v8.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H5.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 18.464c-.262-.489-.401-.974-.401-2.31v-8.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 4.4C4.024 4.139 4.509 4 5.845 4zM11 13.765l2.798-1.763L11 10.238v3.527zM9 9.75c0-1.352 1.457-2.219 2.615-1.489l3.571 2.25c1.085.684 1.085 2.295 0 2.979l-3.571 2.25c-1.158.73-2.615-.137-2.615-1.49v-4.5z" /></svg>;
  }

}