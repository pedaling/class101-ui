import React, { PureComponent, createRef } from 'react';
import Input, { InputProps } from '../../FormInput/Input';
import styled from 'styled-components';
import IconButton from '../Button/IconButton';
import { Minus, Add } from '../../Icon';
import { HTMLInputProps } from 'interfaces/props';

type InputComponentProps = Omit<InputProps & HTMLInputProps, 'size'>;

interface Props extends InputComponentProps {
  buttonPosition: 'right' | 'side';
  step: number;
  inline: boolean;
}

export default class NumericInput extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    buttonPosition: 'right',
    inline: false,
    step: 1,
  };

  private get inputElement() {
    return this.inputRef.current!;
  }

  private inputRef = createRef<HTMLInputElement>();

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
    return buttonPosition === 'side' ? { left: 8, top } : { right: 48, top };
  };

  private stepUpButtonPosition = () => {
    const { label } = this.props;
    const top = this.calculateButtonTop(label);
    return { right: 8, top };
  };

  private calculateButtonTop = (label?: string) => {
    return label ? 32 : 8;
  };

  public render() {
    const { buttonPosition, ...inputProps } = this.props;
    return (
      <StyledStepperContainer inline={inputProps.inline}>
        <StyledStepperInput
          inputRef={this.inputRef}
          align={buttonPosition === 'right' ? 'left' : 'center'}
          type="number"
          {...inputProps}
        />
        <StyledStepperButton icon={<Minus />} onClick={this.handleStepDownClick} {...this.stepDownButtonPosition()} />
        <StyledStepperButton icon={<Add />} onClick={this.handleStepUpClick} {...this.stepUpButtonPosition()} />
      </StyledStepperContainer>
    );
  }
}

const StyledStepperContainer = styled.div<{ inline: boolean }>`
  position: relative;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const StyledStepperInput = styled(Input)<{ align: 'left' | 'center' }>`
  text-align: ${props => props.align};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledStepperButton = styled(IconButton)<{ top?: number; right?: number; left?: number }>`
  position: absolute;
  ${props => props.top && `top: ${props.top}px`}
  ${props => props.right && `right: ${props.right}px`}
  ${props => props.left && `left: ${props.left}px`}
`;
