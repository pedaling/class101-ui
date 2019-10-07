import React, { forwardRef, InputHTMLAttributes, PureComponent, Ref, RefObject } from 'react';
import styled from 'styled-components';

import { gray300 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { CheckboxOff, CheckboxOn } from '../../Icon';

export interface CheckboxProps {
  size: number;
  inline?: boolean;
  checked?: boolean;
  disabled?: boolean;
  forwardedRef: Ref<HTMLInputElement>;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class CheckboxComponent extends PureComponent<CheckboxProps> {
  public static defaultProps: Partial<CheckboxProps> = {
    size: 24,
  };
  public render() {
    const {
      size,
      inline,
      checked,
      disabled,
      onChange,
      className,
      forwardedRef,
      inputAttributes,
      children,
      ...restProps
    } = this.props;
    return (
      <Container inline={inline} className={className} disabled={disabled}>
        {checked ? (
          <CheckboxOn fillColor={disabled ? gray300 : undefined} size={size} />
        ) : (
          <CheckboxOff size={size} fillColor={disabled ? gray300 : undefined} />
        )}
        <HiddenCheckboxInput
          onChange={this.handleChange}
          checked={checked}
          disabled={disabled}
          {...inputAttributes}
          {...restProps}
          ref={forwardedRef}
          type="checkbox"
        />
        <ChildText color={disabled ? gray300 : undefined}>{children}</ChildText>
      </Container>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange !== undefined) {
      this.props.onChange(e);
    }
  };
}

export const Checkbox = forwardRef((props: Omit<CheckboxProps, 'forwardedRef'>, ref: Ref<HTMLInputElement>) => {
  return <CheckboxComponent {...props} forwardedRef={ref} />;
});

const Container = styled.label<Partial<CheckboxProps>>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  position: relative;
  cursor: ${props => (!props.disabled ? 'pointer' : 'not-allowed')};
`;

const HiddenCheckboxInput = styled.input`
  display: none;
`;

const ChildText = styled.span`
  ${body2};
  margin-left: 8px;
`;
