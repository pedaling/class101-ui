import React, { ChangeEvent, ChangeEventHandler, PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { gray100, gray300, gray500, gray800, orange500, orange700 } from '../../core/Colors';
import { elevation1 } from '../../core/ElevationStyles';
import { body2 } from '../../core/TextStyles';
import { Theme, ThemeConfig } from '../../core/Theme';

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
    const { inline, labelComponent, children, disabled, color, hoverColor, ...restProps } = this.props;
    const { checked } = this.state;
    const label = children || (typeof labelComponent === 'function' ? labelComponent(checked) : labelComponent);
    return (
      <StyledSwitchContainer inline={inline} disabled={disabled} {...restProps}>
        {label && (
          <StyledSwitchText inline={inline} disabled={disabled}>
            {label}
          </StyledSwitchText>
        )}
        <StyledSwitchBase>
          <StyledSwitchInput
            type="checkbox"
            checked={checked}
            onChange={this.changeChecked}
            color={color}
            hoverColor={hoverColor}
            disabled={disabled}
          />
        </StyledSwitchBase>
      </StyledSwitchContainer>
    );
  }

  private changeChecked: ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props;
    if (!onChange || onChange(e) !== false) {
      this.setState({
        checked: e.target.checked,
      });
    }
  };
}

const switcherSize = css`
  width: 36px;
  height: 22px;
`;

const StyledSwitchBase = styled.div`
  ${switcherSize};
  display: flex;
  position: relative;
`;

const StyledSwitchContainer = styled.div<{ inline?: boolean; disabled: boolean }>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
`;

const StyledSwitchText = styled.span<{ disabled: boolean; inline?: boolean }>`
  ${body2};
  color: ${props => (props.disabled ? gray300 : gray800)};
  margin-right: 9px;
  ${props => !props.inline && `flex: 1 1 auto;`}
`;

const transitionAnimation = '0.15s ease-out 0.08s';

const StyledSwitchInput = styled.input<{ disabled: boolean; color: string; hoverColor: string }>`
  box-sizing: border-box;
  appearance: none;
  height: 0;
  left: 0;
  line-height: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:before,
  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
  }

  &:before {
    border-radius: 23px;

    left: -2px;
    top: -2px;

    transition: background-color ${transitionAnimation};
    ${switcherSize};

    ${props =>
      props.disabled
        ? `
      background: ${gray100};
      `
        : `
      background: ${gray300};
    `}
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
    &:before {
      background: ${props => props.color};
      box-sizing: border-box;
    }
  }

  ${props =>
    !props.disabled &&
    `
  &:hover {
    &:before {
      background: ${gray500}
    }
    &:checked {
      &:before {
        background: ${props.hoverColor}
      }
    }
  }
  `}
`;
