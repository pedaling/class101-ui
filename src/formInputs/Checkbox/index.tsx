import React, { forwardRef, InputHTMLAttributes, memo, PureComponent, ReactNode, Ref, RefObject, useCallback } from 'react';
import styled from 'styled-components';

import { gray300 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { CheckboxOff, CheckboxOn } from '../../Icon';

export interface CheckboxProps {
  size?: number;
  inline?: boolean;
  checked?: boolean;
  disabled?: boolean;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = memo(
  forwardRef(
    (
      {
        size = 24,
        inline,
        checked,
        disabled,
        onChange,
        className,
        inputAttributes,
        children,
        ...restProps
      }: CheckboxProps,
      ref: Ref<HTMLInputElement>
    ) => {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange !== undefined) {
          onChange(e);
        }
      };

      return (
        <Container inline={inline} className={className} disabled={disabled}>
          {checked ? (
            <CheckboxOn fillColor={disabled ? gray300 : undefined} size={size} />
          ) : (
            <CheckboxOff size={size} fillColor={disabled ? gray300 : undefined} />
          )}
          <HiddenCheckboxInput
            onChange={handleChange}
            checked={checked}
            disabled={disabled}
            {...inputAttributes}
            {...restProps}
            ref={ref}
            type="checkbox"
          />
          <ChildText color={disabled ? gray300 : undefined}>{children}</ChildText>
        </Container>
      );
    }
  )
);

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
