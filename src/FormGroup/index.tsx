import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { gray800 } from '../Colors';
import { BaseProps } from '../interfaces/props';
import { body2 } from '../TextStyles';

interface Props extends BaseProps {
  label: string;
  labelColor?: string;
  inline?: boolean;
}

const Label = styled.label<{ labelColor?: string }>`
  ${body2};
  margin: 0 0 4px;
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

export default class FormGroup extends PureComponent<Props> {
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
