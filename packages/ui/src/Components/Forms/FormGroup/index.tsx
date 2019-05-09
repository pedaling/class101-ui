import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { Colors, BaseProps, TextStyles } from '@common';

export interface FormGroupProps extends BaseProps {
  label: string;
  labelColor?: string;
  inline?: boolean;
}
export default class FormGroup extends PureComponent<FormGroupProps> {
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

const Label = styled.label<{ labelColor?: string }>`
  ${TextStyles.body2};
  margin: 0 0 4px;
  color: ${props => props.labelColor || Colors.gray800};
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
