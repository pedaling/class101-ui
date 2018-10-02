import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { body2Black } from '../TextStyles';
import { gray800 } from '../Colors';

type Props = {
  label: string,
  labelColor?: string,
  inline?: boolean,
  children: Node,
};

const Label = styled.label`
  ${body2Black};
  margin: 0 0 8px;
  color: ${props => props.labelColor || gray800};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  ${props => props.inline && css`
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

export default class FormGroup extends Component<Props> {
  render() {
    const {
      label,
      labelColor,
      inline,
      children,
      ...restProps
    } = this.props;

    return (
      <Container inline={ inline } { ...restProps }>
        <Label labelColor={ labelColor }>{ label || '' }</Label>
        { children }
      </Container>
    );
  }
}
