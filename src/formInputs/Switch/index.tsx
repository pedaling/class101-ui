import React, { ChangeEvent, ChangeEventHandler, PureComponent } from 'react';
import styled, { css } from 'styled-components';

import {
  gray100, gray300, gray500, gray900, orange500, orange700,
} from '../../core/Colors';
import { elevation1 } from '../../core/ElevationStyles';
import { body2 } from '../../core/TextStyles';
import { Theme, ThemeConfig } from '../../core/Theme';
import { HTMLInputProps } from '../../interfaces/props';

export type SwitchLabelType = ((checked: boolean) => React.ReactNode) | React.ReactNode;

export interface SwitchProps {
  theme: ThemeConfig;
  disabled: boolean;
  checked: boolean;
  color: string;
  hoverColor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => boolean | void;
  inline?: boolean;
  labelComponent?: SwitchLabelType;
  children?: SwitchLabelType;
  inputAttributes?: HTMLInputProps;
}

export interface SwitchState {
  checked: boolean;
}

export class Switch extends PureComponent<SwitchProps, SwitchState> {
  public static defaultProps: Partial<SwitchProps> = {
    theme: Theme.light,
    disabled: false,
    checked: false,
    color: orange500,
    hoverColor: orange700,
  };

  public state: SwitchState = {
    checked: this.props.checked,
  };

  public render() {
    const {
      inline,
      labelComponent,
      children,
      disabled,
      color,
      hoverColor,
      onChange,
      inputAttributes,
      ...restProps
    } = this.props;
    const { checked } = this.state;
    const label = children || (typeof labelComponent === 'function' ? labelComponent(checked) : labelComponent);
    return (
      <Container inline={inline} disabled={disabled} {...restProps}>
        {label && (
          <SwitchText inline={inline} disabled={disabled}>
            {label}
          </SwitchText>
        )}
        <SwitchInput
          type="checkbox"
          checked={checked}
          onChange={this.changeChecked}
          disabled={disabled}
          hidden
          {...inputAttributes}
        />
        <Indicator checked={checked} color={color} hoverColor={hoverColor} disabled={disabled} />
      </Container>
    );
  }

  private changeChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { onChange } = this.props;
    if (!onChange || onChange(e) !== false) {
      this.setState({
        checked: e.target.checked,
      });
    }
  };
}

const Container = styled.label<{ inline?: boolean; disabled: boolean }>`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  position: relative;
`;

const SwitchText = styled.span<{ disabled: boolean; inline?: boolean }>`
  ${body2};
  color: ${(props) => (props.disabled ? gray300 : gray900)};
  margin-right: 9px;
  ${(props) => !props.inline && 'flex: 1 1 auto;'}
`;

const transitionAnimation = '0.15s ease-out 0.08s';

const switcherSize = css`
  width: 36px;
  height: 22px;
`;

const SwitchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
`;

const Indicator = styled.div<{ checked: boolean; disabled: boolean; color: string; hoverColor: string }>`
  ${switcherSize};
  display: flex;
  position: relative;
  padding: 2px;
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 23px;

  transition: background-color ${transitionAnimation};
  ${switcherSize};

  &:after {
    content: '';
    box-sizing: border-box;
    border-radius: 50%;
    background: white;
    transform: translate(0, 0);
    transition: transform ${transitionAnimation};

    ${elevation1};
    width: 18px;
    height: 18px;
  }

  ${(props) => (props.disabled
    ? `
        background-color: ${gray100};
      `
    : `
        background-color: ${gray300};
        &:hover {
          background-color: ${gray500};
          ${props.checked
            && `
              background-color: ${props.hoverColor}
            `}
        }
    ;
  `)}

  ${(props) => props.checked
    && `
      background-color: ${props.color};
      &:after {
        transform: translate(14px, 0);
      }
  `}
`;
