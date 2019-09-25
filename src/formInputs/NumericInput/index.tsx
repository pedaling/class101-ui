import React, { createRef, PureComponent } from 'react';
import styled from 'styled-components';

import { IconButton } from '../../components/Button/IconButton';
import { Add, Minus } from '../../Icon';
import { HTMLInputProps, Omit } from '../../interfaces/props';
import { Input, InputProps } from '../Input';

type InputComponentProps = Omit<InputProps & HTMLInputProps, 'size'>;

interface Props extends InputComponentProps {
  buttonPosition: 'right' | 'side';
  step: number;
  inline: boolean;
  disabledIncrease: boolean;
  disabledDecrease: boolean;
}

export class NumericInput extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    buttonPosition: 'right',
    inline: false,
    step: 1,
    disabledIncrease: false,
    disabledDecrease: false,
  };

  private get inputElement() {
    return this.inputRef.current!;
  }

  private inputRef = createRef<HTMLInputElement>();

  public render() {
    const { buttonPosition, disabledIncrease, disabledDecrease, ...inputProps } = this.props;
    return (
      <StyledNumericInputContainer inline={inputProps.inline}>
        <StyledNumericInputInput
          inputRef={this.inputRef}
          align={buttonPosition === 'right' ? 'left' : 'center'}
          type="number"
          {...inputProps}
        />
        <StyledNumericInputButton
          icon={<Minus />}
          onClick={this.handleStepDownClick}
          disabled={disabledIncrease}
          {...this.stepDownButtonPosition()}
        />
        <StyledNumericInputButton
          icon={<Add />}
          onClick={this.handleStepUpClick}
          disabled={disabledDecrease}
          {...this.stepUpButtonPosition()}
        />
      </StyledNumericInputContainer>
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
    const { buttonPosition, label } = this.props;
    const top = this.calculateButtonTop(label);
    return buttonPosition === 'side' ? { top, left: 8 } : { top, right: 48 };
  };

  private stepUpButtonPosition = () => {
    const { label } = this.props;
    const top = this.calculateButtonTop(label);
    return { top, right: 8 };
  };

  private calculateButtonTop = (label?: string) => {
    return label ? 32 : 8;
  };
}

const StyledNumericInputContainer = styled.div<{ inline: boolean }>`
  position: relative;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const StyledNumericInputInput = styled(Input)<{ align: 'left' | 'center' }>`
  text-align: ${props => props.align};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledNumericInputButton = styled(IconButton)<{ top?: number; right?: number; left?: number }>`
  position: absolute;
  ${props => props.top && `top: ${props.top}px`}
  ${props => props.right && `right: ${props.right}px`}
  ${props => props.left && `left: ${props.left}px`}
`;
