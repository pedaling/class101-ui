import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { gray900 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { BaseProps } from '../../interfaces/props';

export interface FormGroupProps {
  label: string;
  labelColor?: string;
  inline?: boolean;
  classNames?: string;
  htmlLabelFor?: string;
  divAttributes?: BaseProps;
}

export class FormGroup extends PureComponent<FormGroupProps> {
  public render() {
    const {
      label, labelColor, htmlLabelFor, inline, children, divAttributes, ...restProps
    } = this.props;

    return (
      <Container inline={inline} {...divAttributes} {...restProps}>
        <Label labelColor={labelColor} htmlFor={htmlLabelFor}>
          {label || ''}
        </Label>
        {children}
      </Container>
    );
  }
}

const Label = styled.label<{ labelColor?: string }>`
  ${body2};
  margin: 0 0 4px;
  color: ${(props) => props.labelColor || gray900};
`;

const Container = styled.div<{ inline?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  ${(props) => props.inline
    && css`
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
