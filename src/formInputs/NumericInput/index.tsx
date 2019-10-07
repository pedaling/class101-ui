import React, { createRef, PureComponent } from 'react';
import styled from 'styled-components';

import { IconButton } from '../../components/Button/IconButton';
import { Add, Minus } from '../../Icon';
import { Input, InputProps } from '../Input';

export enum NumericInputButtonPosition {
  RIGHT = 'right',
  SIDE = 'side',
}

export type NumericInputButtonPositionValue = 'right' | 'side';

export interface NumericInputProps extends InputProps {
  buttonPosition: NumericInputButtonPositionValue;
  inline: boolean;
  minValue?: number;
  maxValue?: number;
  step: number;
}

export class NumericInput extends PureComponent<NumericInputProps> {
  public static defaultProps: Partial<NumericInputProps> = {
    buttonPosition: NumericInputButtonPosition.RIGHT,
    inline: false,
    step: 1,
  };

  private get inputElement() {
    return this.inputRef.current!;
  }

  private inputRef = createRef<HTMLInputElement>();

  public render() {
    const {
      buttonPosition,
      minValue,
      maxValue,
      inline,
      disabled,
      value,
      className,
      inputAttributes,
      ...restProps
    } = this.props;
    return (
      <Container inline={inline} className={className}>
        <StyledInput
          ref={this.inputRef}
          align={buttonPosition === NumericInputButtonPosition.RIGHT ? 'left' : 'center'}
          disabled={disabled}
          value={value}
          type="number"
          inputAttributes={{ ...inputAttributes, min: minValue, max: maxValue }}
          {...restProps}
        />
        <InputButton
          icon={<Minus />}
          onClick={this.handleStepDownClick}
          disabled={Number(value) === minValue || disabled}
          {...this.stepDownButtonPosition()}
        />
        <InputButton
          icon={<Add />}
          disabled={Number(value) === maxValue || disabled}
          onClick={this.handleStepUpClick}
          right={8}
        />
      </Container>
    );
  }

  private triggerChangeEvent = () => {
    this.inputElement.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
  };

  private handleStepUpClick = () => {
    this.inputElement.stepUp();
    this.triggerChangeEvent();
  };

  private handleStepDownClick = () => {
    this.inputElement.stepDown();
    this.triggerChangeEvent();
  };

  private stepDownButtonPosition = () => {
    const { buttonPosition } = this.props;
    return buttonPosition === 'side' ? { left: 8 } : { right: 48 };
  };
}

const Container = styled.div<{ inline: boolean }>`
  position: relative;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const StyledInput = styled(Input)<{ align: 'left' | 'center' }>`
  text-align: ${props => props.align};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputButton = styled(IconButton)<{ top?: number; right?: number; left?: number }>`
  position: absolute;
  top: 8px;
  ${props => props.right && `right: ${props.right}px`}
  ${props => props.left && `left: ${props.left}px`}
`;
