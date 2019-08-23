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

  private get inputCurrent() {
    return this.inputRef.current!;
  }

  private inputRef = createRef<HTMLInputElement>();

  // stepUp, stepDown함수는 onChange이벤트를 발생시키지 않기 때문에 직접 호출
  private fireOnChangeEvent = () => {
    this.inputCurrent.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
  };

  public render() {
    const { buttonPosition, ...inputProps } = this.props;
    const top = 8 + (inputProps.label ? 24 : 0);
    return (
      <StyledStepperContainer inline={inputProps.inline}>
        <StyledStepperInput
          inputRef={this.inputRef}
          align={buttonPosition === 'right' ? 'left' : 'center'}
          type="number"
          {...inputProps}
        />
        <StyledStepperButton
          icon={<Minus />}
          top={top}
          onClick={() => {
            this.inputCurrent.stepDown();
            this.fireOnChangeEvent();
          }}
          {...(buttonPosition === 'side' ? { left: 8 } : { right: 48 })}
        />
        <StyledStepperButton
          icon={<Add />}
          top={top}
          onClick={() => {
            this.inputCurrent.stepUp();
            this.fireOnChangeEvent();
          }}
          right={8}
        />
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
