import React, { PureComponent } from 'react';
import Input, { InputProps } from '../Input';
import styled from 'styled-components';
import { ControlGroup, IconButton } from '../../components';
import { MinusCircle, AddCircleOutline } from '../../Icon';
import { FormInputStyle, InputSize } from '../common';
import { gray300 } from '../../Colors';

export interface StepperProps {
  value: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  size: InputSize;
  inputStyle?: React.CSSProperties;
}

export default class Stepper extends PureComponent<StepperProps> {
  public static defaultProps: StepperProps = {
    value: 0,
    size: InputSize.md,
  };

  public render() {
    const { size, inputStyle, ...inputProps } = this.props;
    return (
      <StyledStepperGroup fill>
        <StyledStepperIconButton icon={<MinusCircle />} color="transparent" fillColor={gray300} marginLeft />
        <StyledStepperInput {...inputProps} type="number" style={inputStyle} />
        <StyledStepperIconButton icon={<AddCircleOutline />} color="transparent" marginRight />
      </StyledStepperGroup>
    );
  }
}

const StyledStepperGroup = styled(ControlGroup)`
  ${FormInputStyle}
  width: 148px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const StyledStepperInput = styled(Input)`
  border: 0;
  &:hover {
    border: 0;
  }
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  padding: 0;
`;

const StyledStepperIconButton = styled(IconButton)<{ marginRight?: boolean; marginLeft?: boolean }>`
  ${props => props.marginRight && `margin-right: 18px;`}
  ${props => props.marginLeft && `margin-left: 18px;`}
`;
