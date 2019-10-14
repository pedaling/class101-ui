import * as React from 'react';
import styled from 'styled-components';

import { gray300 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { CheckboxOff, CheckboxOn } from '../../Icon/generated';
import { HTMLInputProps, Omit } from '../../interfaces/props';
import { InlineError, Intent } from '../InlineError';

export interface CheckboxOwnProps {
  className?: string;
  size: number;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  checked?: boolean;
  disabled?: boolean;
  warnMessage?: string;
  errorMessage?: string;
  inputAttributes?: HTMLInputProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type OmittedCheckboxAttributes = Omit<HTMLInputProps, keyof CheckboxOwnProps>;

export interface CheckboxProps extends CheckboxOwnProps {
  inputAttributes?: OmittedCheckboxAttributes;
}

export class Checkbox extends React.PureComponent<CheckboxProps> {
  public static defaultProps: Partial<CheckboxProps> = {
    size: 24,
  };
  public render() {
    const {
      className,
      style,
      size,
      inputStyle,
      inline,
      allowMessage,
      warnMessage,
      errorMessage,
      children,
      checked,
      disabled,
      inputAttributes,
      ...restProps
    } = this.props;
    return (
      <div style={style} className={className} {...restProps}>
        <Container inline={inline}>
          {checked ? (
            <CheckboxOn fillColor={disabled ? gray300 : undefined} size={size} />
          ) : (
            <CheckboxOff size={size} fillColor={disabled ? gray300 : undefined} />
          )}
          <HiddenCheckboxInput
            onChange={this.handleChange}
            checked={checked}
            style={inputStyle}
            disabled={disabled}
            {...inputAttributes}
            type="checkbox"
          />
          <ChildText color={disabled ? gray300 : undefined}>{children}</ChildText>
        </Container>

        {allowMessage && !errorMessage && <InlineError intent={Intent.DEFAULT}>{allowMessage}</InlineError>}
        {errorMessage && <InlineError intent={Intent.DANGER}>{errorMessage}</InlineError>}
        {warnMessage && <InlineError intent={Intent.WARNING}>{warnMessage}</InlineError>}
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange !== undefined) {
      this.props.onChange(e);
    }
  };
}

const Container = styled.label<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  position: relative;
`;

const HiddenCheckboxInput = styled.input`
  display: none;
`;

const ChildText = styled.span`
  ${body2};
  margin-left: 8px;
`;
