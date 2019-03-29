import * as React from 'react';
import styled from 'styled-components';

import { gray600, orange500, redError } from '../Colors';
import { CheckboxOff, CheckboxOn } from '../Icon';
import { HTMLInputProps } from '../interfaces/props';
import { body2 } from '../TextStyles';
import Message from './message';

export interface Props extends HTMLInputProps {
  className?: string;
  size: number;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const HiddenCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ChildText = styled.span`
  ${body2};
  margin-left: 8px;
`;

const Container = styled.label<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
`;

export default class Checkbox extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
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
      type,
      children,
      checked,
      ...restProps
    } = this.props;
    return (
      <div style={style}>
        <Container inline={inline}>
          {checked ? <CheckboxOn size={size} /> : <CheckboxOff size={size} />}
          <HiddenCheckboxInput
            className={className || ''}
            onChange={this.handleChange}
            checked={checked}
            style={inputStyle}
            {...restProps}
          />
          <ChildText>{children}</ChildText>
        </Container>

        {allowMessage && !errorMessage && <Message color={gray600} message={allowMessage} />}
        {errorMessage && <Message color={redError} descriptionIconFillColor={redError} message={errorMessage} />}
        {warnMessage && <Message color={orange500} descriptionIconFillColor={orange500} message={warnMessage} />}
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange !== undefined) {
      this.props.onChange(e);
    }
  };
}
