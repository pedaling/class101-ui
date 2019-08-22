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
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  step: number;
}

interface State {
  value: number;
}

export default class Stepper extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    size: InputSize.md,
    value: 0,
    step: 1,
  };

  public state: State = {
    value: this.props.value,
  };

  public render() {
    const { size, value: _, ...inputProps } = this.props;
    const { value } = this.state;
    return (
      <StyledStepperGroup size={size} fill>
        <StyledStepperInput align={size === 'md' ? 'left' : 'center'} value={value} {...inputProps} type="number" />
        <StyledStepperIconButton
          icon={<MinusCircle />}
          color="transparent"
          fillColor={gray300}
          order={size === 'sm' ? -1 : 0}
        />
        <StyledStepperIconButton icon={<AddCircleOutline />} color="transparent" />
      </StyledStepperGroup>
    );
  }
}

const StyledStepperGroup = styled(ControlGroup)<{ size: InputSize }>`
  ${FormInputStyle};
  width: ${props => (props.size === InputSize.md ? 312 : 148)}px;
  align-items: center;
  justify-content: space-between;
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
  ${props => props.align === 'left' && 'padding-left: 18px;'}
`;

const StyledStepperIconButton = styled(IconButton)<{
  order?: number;
}>`
  flex: 0;
  ${props => (props.order ? `order:${props.order};margin-left: 18px;` : `margin-right: 18px`)}
`;
