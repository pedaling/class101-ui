import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface CommonProps {
  vertical?: boolean;
  children: React.ReactNode;
}

interface ContainerProps extends CommonProps {
  fill?: boolean;
}

interface StyledContainerProps extends CommonProps {
  fill?: string;
}

export default class ControlGroup extends PureComponent<ContainerProps> {
  public static defaultProps = {
    fill: false,
    vertical: false,
  };
  public render() {
    const { fill, children, vertical, ...restProps } = this.props;

    return (
      <Container fill={`${fill}`} vertical={vertical} {...restProps}>
        {children}
      </Container>
    );
  }
}

const Container = styled.div<StyledContainerProps>`
  display: flex;
  align-items: stretch;

  ${props =>
    props.vertical
      ? `
          flex-direction: column;

          & > * {
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
        `
      : `
          flex-direction: row;

          & > * {
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
        `}

  ${props =>
    props.fill === 'true' &&
    `
      & > * {
        flex: 1 1 auto;
      }
    `};
`;
