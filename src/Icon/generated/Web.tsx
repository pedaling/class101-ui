import * as React from 'react';
import { IconProps } from '../index';
export default class SvgWeb extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
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
          d="M4.054 13c.2 1.792.954 3.321 2.29 4.657.888.889 1.863 1.52 2.943 1.901a9.666 9.666 0 01-.48-.43c-1.56-1.5-2.565-3.53-2.769-6.128H4.054zm0-2H6.04c.204-2.594 1.21-4.624 2.768-6.12.165-.159.33-.306.493-.443-1.086.381-2.065 1.014-2.957 1.906C5.008 7.68 4.254 9.208 4.054 11zM11 11V5.657a6.842 6.842 0 00-.807.665C9.01 7.457 8.237 8.983 8.046 11H11zm0 2H8.045c.19 2.02.965 3.548 2.148 4.684.26.251.532.472.807.666V13zm8.946 0h-1.984c-.204 2.597-1.209 4.629-2.77 6.127-.16.154-.32.297-.48.431 1.081-.381 2.056-1.012 2.945-1.901 1.335-1.336 2.089-2.865 2.289-4.657zm0-2c-.2-1.792-.954-3.321-2.29-4.657-.891-.892-1.87-1.525-2.956-1.906.164.137.328.284.493.442C16.752 6.376 17.757 8.406 17.96 11h1.985zM13 11h2.954c-.19-2.017-.965-3.543-2.147-4.678A6.843 6.843 0 0013 5.657V11zm0 2v5.35c.275-.194.546-.415.807-.666 1.183-1.136 1.958-2.664 2.148-4.684H13zm8.956 0c-.21 2.335-1.172 4.358-2.885 6.071-1.713 1.713-3.736 2.674-6.071 2.885v.05h-2v-.05c-2.335-.21-4.358-1.172-6.071-2.885C3.216 17.358 2.255 15.335 2.044 13H2v-.998V12v-1h.044c.21-2.335 1.172-4.358 2.885-6.071C6.642 3.216 8.665 2.255 11 2.044V2h2v.044c2.335.21 4.358 1.172 6.071 2.885 1.713 1.713 2.674 3.736 2.885 6.071H22v2h-.044z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
