import React, { PureComponent, ChangeEvent, ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';
import Theme, { ThemeConfig } from '../../Theme';
import { gray100, orange500, gray300, gray500, orange700, gray800 } from '../../Colors';
import { elevation1 } from '../../ElevationStyles';
import { body2 } from '../../TextStyles';

export interface SwitchProps {
  className: string;
  theme: ThemeConfig;
  disabled: boolean;
  checked: boolean;
  color: string;
  hoverColor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => boolean | void;
  inline?: boolean;
  onText?: React.ReactNode;
  offText?: React.ReactNode;
  children?: React.ReactNode;
}

export interface SwitchState {
  checked: boolean;
}

export default class Switch extends PureComponent<SwitchProps, SwitchState> {
  public static defaultProps: Partial<SwitchProps> = {
    theme: Theme.light,
    disabled: false,
    checked: false,
    color: orange500,
    hoverColor: orange700,
  };

  private changeChecked: ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props;
    if (!onChange || onChange(e) !== false)
      this.setState({
        checked: e.target.checked,
      });
  };

  public state: SwitchState = {
    checked: this.props.checked,
  };

  public render() {
    const { inline, onText, offText, children, className, disabled, color, hoverColor } = this.props;
    const { checked } = this.state;
    const textExists = children || onText || offText;
    return (
      <StyledSwitchContainer inline={inline} disabled={disabled} className={className}>
        {textExists && (
          <StyledSwitchText inline={inline} disabled={disabled}>
            {children || (checked ? onText : offText)}
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

  &:before,
  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;

    ${props =>
      !props.disabled &&
      `
    cursor: pointer;
    `}
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
