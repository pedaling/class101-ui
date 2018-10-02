import React, { Component } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  block?: boolean,
  vertical?: boolean,
  children: Node,
};

const Container = styled.div`
  display: flex;
  align-items: stretch;

  ${props => (props.vertical ? css`
    flex-direction: column;

    & * {
      box-sizing: border-box;
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 1px;
        border-top-right-radius: 1px;
      }

      &:last-child {
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
      }
    }
  ` : css`
    flex-direction: row;

    & * {
      box-sizing: border-box;
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 1px;
        border-bottom-left-radius: 1px;
      }

      &:last-child {
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
      }
    }
  `)}

  ${props => props.block && css`
    & * {
      flex: 1 1 auto;
    }
  `};
`;

export default class ControlGroup extends Component<Props> {
  render() {
    const {
      block,
      children,
      vertical,
      ...restProps
    } = this.props;

    return (
      <Container block={ block } vertical={ vertical } { ...restProps }>
        { children }
      </Container>
    );
  }
}
