import * as React from 'react';
import { IconProps } from '../index';
export default class SvgVolumeMuteOutline extends React.PureComponent<IconProps> {
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
          d="M20.5 20L19 21.5l-6-6V20a1 1 0 01-1.555.832L5.697 17H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l-3-3L3 2.5 20.5 20zM3 9v6h3a1 1 0 01.555.168L11 18.131V13.5L6.411 8.911A1 1 0 016 9H3z"
          fill={this.props.fillColor}
        />
        <path
          d="M13 4v5.5l-2-2V5.869l-.979.652L8.58 5.08l2.866-1.911A1 1 0 0113 4zM23 12c0 2.22-.538 4.295-1.468 6.032l-1.49-1.49c.607-1.33.958-2.88.958-4.542 0-3.012-1.151-5.654-2.897-7.283l1.576-1.26C21.714 5.48 23 8.568 23 12zM19 12c0 1.056-.18 2.067-.506 2.994l-1.625-1.625A7.16 7.16 0 0017 12c0-1.974-.793-3.708-2.003-4.798l1.578-1.262C18.065 7.412 19 9.59 19 12z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
