import React, { useRef } from 'react';
import styled from 'styled-components';

import { IconButton } from '../../components/Button/IconButton';
import { AddIcon, MinusIcon } from '../../Icon';
import { Input, InputProps } from '../Input';

type Props = Omit<InputProps, 'type'> & {
  buttonPosition?: 'right' | 'side';
  step?: number;
  inline?: boolean;
  minValue?: number;
  maxValue?: number;
};

export const NumbericInput = React.memo<Props>(
  ({
    buttonPosition = 'right',
    step = 1,
    inline = false,
    minValue,
    maxValue,
    value,
    disabled,
    label,
    ...inputProps
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const triggerChangeEvent = () => {
      inputRef.current?.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    };

    const calculateButtonTop = () => {
      return label ? 32 : 8;
    };

    const handleStepUpClick = () => {
      inputRef.current?.stepUp();
      triggerChangeEvent();
    };

    const handleStepDownClick = () => {
      inputRef.current?.stepDown();
      triggerChangeEvent();
    };

    const stepDownButtonPosition = () => {
      const top = calculateButtonTop();
      return buttonPosition === 'side' ? { top, left: 8 } : { top, right: 48 };
    };

    const stepUpButtonPosition = () => {
      const top = calculateButtonTop();
      return { top, right: 8 };
    };

    return (
      <StyledNumericInputContainer inline={inline}>
        <StyledNumericInputInput
          inputRef={inputRef}
          align={buttonPosition === 'right' ? 'left' : 'center'}
          value={value}
          min={minValue}
          max={maxValue}
          disabled={disabled}
          type="number"
          step={step}
          {...inputProps}
        />
        <StyledNumericInputButton
          icon={<MinusIcon />}
          onClick={handleStepDownClick}
          disabled={Number(value) === minValue || disabled}
          {...stepDownButtonPosition()}
        />
        <StyledNumericInputButton
          icon={<AddIcon />}
          onClick={handleStepUpClick}
          disabled={Number(value) === maxValue || disabled}
          {...stepUpButtonPosition()}
        />
      </StyledNumericInputContainer>
    );
  }
);

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
  ${props => props.top && `top: ${props.top}px;`}
  ${props => props.right && `right: ${props.right}px;`}
  ${props => props.left && `left: ${props.left}px;`}
`;
