import React, { PureComponent } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { ControlGroup, IconButton } from '../../components';
import { MinusCircle, AddCircleOutline } from '../../Icon';
import { FormInputStyle, InputSize } from '../common';
import { gray300 } from '../../Colors';
import { HTMLInputProps } from 'interfaces/props';

interface Props {
  size: InputSize;
}

export default class Stepper extends PureComponent<HTMLInputProps & Props> {
  public static defaultProps: Props = {
    size: InputSize.md,
  };

  public render() {
    const { size, ...inputProps } = this.props;
    return (
      <StyledStepperGroup size={size} fill>
        {size === InputSize.sm && (
          <StyledStepperIconButton icon={<MinusCircle />} color="transparent" fillColor={gray300} marginLeft />
        )}
        <StyledStepperInput align={size === 'md' ? 'left' : 'center'} {...inputProps} type="number" />
        {size === InputSize.md && (
          <StyledStepperIconButton icon={<MinusCircle />} color="transparent" fillColor={gray300} marginRight />
        )}
        <StyledStepperIconButton icon={<AddCircleOutline />} color="transparent" marginRight />
      </StyledStepperGroup>
    );
  }
}

const StyledStepperGroup = styled(ControlGroup)<{ size: InputSize }>`
  ${FormInputStyle};
  width: ${props => (props.size === InputSize.md ? 312 : 148)}px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const StyledStepperInput = styled(Input)<{ align: 'left' | 'center' | 'right' }>`
  border: 0;
  &:hover {
    border: 0;
  }
  text-align: ${props => props.align};
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
