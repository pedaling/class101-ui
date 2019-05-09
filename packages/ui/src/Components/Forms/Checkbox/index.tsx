import * as React from 'react';
import styled from 'styled-components';

import { Colors, HTMLInputProps, TextStyles } from '@common';
import { Icon } from '@components';

import { Message } from './message';

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
      <div style={style} className={className}>
        <Container inline={inline}>
          {checked ? <Icon.CheckboxOn size={size} /> : <Icon.CheckboxOff size={size} />}
          <HiddenCheckboxInput onChange={this.handleChange} checked={checked} style={inputStyle} {...restProps} />
          <ChildText>{children}</ChildText>
        </Container>

        {allowMessage && !errorMessage && <Message color={Colors.gray600} message={allowMessage} />}
        {errorMessage && (
          <Message color={Colors.redError} descriptionIconFillColor={Colors.redError} message={errorMessage} />
        )}
        {warnMessage && (
          <Message color={Colors.orange500} descriptionIconFillColor={Colors.orange500} message={warnMessage} />
        )}
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

const HiddenCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ChildText = styled.span`
  ${TextStyles.body2};
  margin-left: 8px;
`;
