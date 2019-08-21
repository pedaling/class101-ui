import React, { PureComponent, ChangeEvent } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import Theme, { ThemeConfig } from '../../Theme';
import { gray100, gray200, white, orange500 } from '../../Colors';

export type SwitchButtonSize = 'md' | 'lg';

export interface SwitchButtonProps {
  size: SwitchButtonSize;
  theme: ThemeConfig;
  disabled: boolean;
  checked: boolean;
  color: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default class SwitchButton extends PureComponent<SwitchButtonProps> {
  public static defaultProps: Partial<SwitchButtonProps> = {
    size: 'lg',
    theme: Theme.light,
    disabled: false,
    checked: undefined,
    color: orange500,
  };

  public render() {
    const { size, checked, ...restProps } = this.props;
    return (
      <StyledSwitchButtonBase size={size}>
        <StyledSwitchButtonInput type="checkbox" inputSize={size} defaultChecked={checked} {...restProps} />
      </StyledSwitchButtonBase>
    );
  }
}

const switcherStyleBySize: { [key in SwitchButtonSize]: FlattenSimpleInterpolation } = {
  md: css`
    width: 32px;
    height: 20px;
  `,
  lg: css`
    width: 52px;
    height: 32px;
  `,
};

const StyledSwitchButtonBase = styled.div<{ size: SwitchButtonSize }>`
  ${props => switcherStyleBySize[props.size]};
  position: relative;
`;

const transitionAnimation = '0.25s ease-out 0.10s';

const StyledSwitchButtonInput = styled.input<{ inputSize: SwitchButtonSize; disabled: boolean; color: string }>`
  box-sizing: border-box;
  appearance: none;
  height: 0;
  font-size: 1em;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;

  &:before,
  &:after {
    content: '';
    font-size: 1em;
    position: absolute;
    box-sizing: border-box;
  }

  &:before {
    border-radius: 23px;
    background: ${gray100};

    left: -1px;
    top: -1px;

    ${props => props.inputSize === 'lg' && `top: -2px;`}
    transition: background-color ${transitionAnimation};
    ${props => switcherStyleBySize[props.inputSize]};
  }

  &:after {
    border-radius: 50%;
    background: ${props => (props.disabled ? gray200 : white)};
    transform: translate(0, 0);
    transition: transform ${transitionAnimation};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
                0px 1px 1px rgba(0, 0, 0, 0.16),
                0px 3px 8px rgba(0, 0, 0, 0.15);
    ${props =>
      props.inputSize === 'lg'
        ? `
      width: 28px;
      height: 28px;
  `
        : `
      width: 16.8px;
      height: 16.8px;
  `}
  }
  &:checked {
    &:after {
      transform: translate(${props => (props.inputSize === 'lg' ? 22 : 13)}px, 0);

    }
  }

  &:checked:before {
    background: ${props => props.color};
    box-sizing: border-box;
  }
`;
