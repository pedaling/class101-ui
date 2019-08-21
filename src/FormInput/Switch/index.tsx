import React, { PureComponent, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import Theme, { ThemeConfig } from '../../Theme';
import { gray100, orange500, gray300 } from '../../Colors';
import { elevation1 } from '../../ElevationStyles';

// export type SwitchButtonSize = 'md' | 'lg';

export interface SwitchProps {
  // NOTE(peter): 일단 사이즈는 없애고 나중에 작업하기로 함.
  // size: SwitchButtonSize;
  theme: ThemeConfig;
  disabled: boolean;
  checked: boolean;
  color: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default class Switch extends PureComponent<SwitchProps> {
  public static defaultProps: Partial<SwitchProps> = {
    theme: Theme.light,
    disabled: false,
    color: orange500,
  };

  public render() {
    const { checked, ...restProps } = this.props;
    return (
      <StyledSwitchButtonBase>
        <StyledSwitchButtonInput type="checkbox" defaultChecked={checked} {...restProps} />
      </StyledSwitchButtonBase>
    );
  }
}

const switcherStyleBySize = css`
  width: 36px;
  height: 22px;
`;

const StyledSwitchButtonBase = styled.div`
  ${switcherStyleBySize};
  position: relative;
`;

const transitionAnimation = '0.15s ease-out 0.08s';

const StyledSwitchButtonInput = styled.input<{ disabled: boolean; color: string }>`
  box-sizing: border-box;
  appearance: none;
  height: 0;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    cursor: pointer;
  }

  &:before {
    border-radius: 23px;
    background: ${props => (props.disabled ? gray100 : gray300)};

    left: -2px;
    top: -2px;

    transition: background-color ${transitionAnimation};
    ${switcherStyleBySize};
  }

  &:after {
    border-radius: 50%;
    background: white;
    transform: translate(0, 0);
    transition: transform ${transitionAnimation};
    ${elevation1};

    width: 18px;
    height: 18px;
  }
  &:checked {
    &:after {
      transform: translate(14px, 0);
    }
  }

  &:checked:before {
    background: ${props => props.color};
    box-sizing: border-box;
  }
`;
