import React, { PureComponent } from 'react';
import Input, { InputProps } from '../Input';
import { HTMLInputProps } from 'interfaces/props';
import styled from 'styled-components';
import { ControlGroup, IconButton } from '../../components';
import * as Icon from '../../Icon';
import { FormInputStyle } from '../common';

export interface StepperProps extends InputProps {}

export default class Stepper extends PureComponent<HTMLInputProps & StepperProps> {
  public render() {
    const { size, style, ...inputProps } = this.props;
    return (
      <StyledStepperGroup>
        <StyledStepperIconButton icon={<Icon.MinusCircle />} color="transparent" />
        <StyledStepperInput {...inputProps} />
        <StyledStepperIconButton icon={<Icon.AddCircleOutline />} color="transparent" />
      </StyledStepperGroup>
    );
  }
}

const StyledStepperGroup = styled(ControlGroup)`
  ${FormInputStyle}
`;

const StyledStepperInput = styled(Input)`
  border: 0;
`;

const StyledStepperIconButton = styled(IconButton)``;
