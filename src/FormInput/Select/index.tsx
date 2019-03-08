import React from 'react';
import styled from 'styled-components';

import { gray500, gray800, redError } from '../../Colors';
import { body2 } from '../../TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';

export type OptionProps = string | { label?: string; disabled?: boolean; value?: string | number | undefined };

export interface SelectProps {
  options?: OptionProps[];
  size: InputSize;
  fill?: boolean;
}

const StyledSelect = styled.select<{ inputSize: InputSize; fill?: boolean }>`
  ${body2}
  ${FormInputStyle}
  ${props => FormInputStyleBySize[props.inputSize]};
  ${props => (props.fill ? FormInputFillStyle : null)};
  padding: 12px 48px 12px 16px;
  height: 48px;
  appearance: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAA2Pj43Oz82PD42Oz3///82OzxmZmY2Oz1NTU05VVU1Oz1AQEA1PD42Oz01QEA2Oz01Ojw1Ozw8PDw2PD42Oz02Oz03PT02PDw2Oz01Oz04PT04PEA2Ozw2Ojw3Oz44Oz81Ojw6Pz82Oj01Ojw1O0E1Ozw1Ojw2Oz02Ojw7O0U2Ozw2Q0M1Oj07O041Ozw1OzxAQEA2Oj1AQEA1Oj2AgIA2Oz02Ojw3Ozw1OjwC6qbsAAAAOXRSTlMAQkGAkwGlBbUKCcQQeNEYaP3dIlr75y5M9+87QPL2Skn1Nez6K+X+bH8a1BPKDb+2CLME0gKXiIdaPhwMAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAASAAAAEgARslrPgAAAVVJREFUWMPtlNlygkAQRTvBBeOCCu6aRQWNa9Ro0v//Y0HSM67QQ6ry1udN+84pcOwLIAiCIAgCz4NZ7JELWJjJ8ppsBi3Og5jLc558LoxZnAfRLiR7nuwoZnEexGIpyVMqUizeVKYEVpx4j1NRqXJ8qFqjTN2Ni7h1itSqSY/tNSjWbN0PtJoUaHjJP2S7Q8Fu796416Vxpw0M/QFFn19uh69vNBz0OQ/AcETh8c3De2MajYa8B8APKD6ZXg6mExoEvonn7GIu/ynv6tv4K71mNldnTosXrhcxn5l6ABZLdUotXrReEcuFuQdgtVbnPqLFK9jq83qVxgOw2aqTx8XT64XbTToPwE6/y6dzWq/cLq0HYH/Qt6Rv8bBP7wn5wiu+/6SBs1pha4ND1wpbGxy6Vtja4FC1wtcGx2+tmNQGx7FWzGqDww9Ma4PDNa4NQRAE4T/5AXc8Urhqe4+OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAyLTIwVDA3OjI0OjAxLTA1OjAwCLbogQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMi0yMFQwNzoyNDowMS0wNTowMHnrUD0AAAAASUVORK5CYII=');
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 18px;
  color: ${props => props.color};
  &.input-error {
    border-color: ${redError};
    background-image: url('/images/ic-danger-red.png');
  }
`;

export default class Select extends React.PureComponent<React.SelectHTMLAttributes<HTMLSelectElement> & SelectProps> {
  public static defaultProps = {
    size: InputSize.md,
    fill: true,
  };

  public render() {
    const { value, placeholder, children, options, size, ...htmlProps } = this.props;

    return (
      <StyledSelect inputSize={size} value={value} {...htmlProps} color={value === '' ? gray500 : gray800}>
        {placeholder ? (
          <option value="" hidden disabled>
            {placeholder}
          </option>
        ) : null}
        {children || (options && options.map(this.renderOptions))}
      </StyledSelect>
    );
  }

  private renderOptions = (o: OptionProps, i: number) => {
    if (typeof o === 'string') {
      return (
        <option key={i} value={o}>
          {o}
        </option>
      );
    }
    return (
      <option disabled={o.disabled || false} key={i} value={o.value}>
        {o.label}
      </option>
    );
  };
}
