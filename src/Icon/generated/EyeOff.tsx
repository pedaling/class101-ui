import * as React from 'react';
import { IconProps } from '../index';
export default class SvgEyeOff extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.897 5.482C5.05 6.673 3.481 8.566 2.211 11.106a2 2 0 000 1.788c2.313 4.627 5.62 7.107 9.789 7.107 2.564 0 4.8-.937 6.681-2.734l-1.413-1.414c-1.518 1.432-3.274 2.149-5.268 2.149C8.667 18.002 6 16 4 12c1.208-2.417 2.66-4.103 4.355-5.06L6.897 5.482zm11.69 8.862c.503-.685.974-1.466 1.413-2.344-2-4-4.667-6-8-6-.55 0-1.08.054-1.594.163L8.788 4.545A9.432 9.432 0 0112 4c4.17 0 7.476 2.48 9.789 7.106a2 2 0 010 1.788 17.781 17.781 0 01-1.774 2.877l-1.428-1.427zm-8.619-5.79a3.998 3.998 0 00-1.813 4.55 4.001 4.001 0 007.291.928L14.415 13h-.683A2 2 0 1111 10.268v-.683L9.968 8.554z"
          fill={this.props.fillColor}
        />
        <path fill={this.props.fillColor} d="M2.81 4.222l1.414-1.414 16.97 16.97-1.413 1.415z" />
      </svg>
    );
  }
}
