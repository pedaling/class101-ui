import { BaseProps } from '../interfaces/props';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { gray800 } from '../Colors';
import { body2Black } from '../TextStyles';

interface Props extends BaseProps {
  label: string;
  labelColor?: string;
  inline?: boolean;
}

const Label = styled.label<{ labelColor?: string }>`
  ${body2Black};
  margin: 0 0 8px;
  color: ${props => props.labelColor || gray800};
`;

const Container = styled.div<{ inline?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  ${props =>
    props.inline &&
    css`
      flex-direction: row;
      align-items: center;

      & * {
        margin-right: 4px;

        &:last-child {
          margin-right: 0;
        }
      }

      ${Label} {
        margin-bottom: 0;
      }
    `};
`;

export default class FormGroup extends React.PureComponent<Props> {
  public render() {
    const { label, labelColor, inline, children, ...restProps } = this.props;

    return (
      <Container inline={inline} {...restProps}>
        <Label labelColor={labelColor}>{label || ''}</Label>
        {children}
      </Container>
    );
  }
}
