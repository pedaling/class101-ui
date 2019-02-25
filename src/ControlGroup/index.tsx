import React from 'react';
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

const Container = styled.div<StyledContainerProps>`
  display: flex;
  align-items: stretch;

  ${props =>
    props.vertical
      ? `
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
        `
      : `
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
        `}

  ${props =>
    props.fill &&
    `
      & * {
        flex: 1 1 auto;
      }
    `};
`;

export default class ControlGroup extends React.PureComponent<ContainerProps> {
  public render() {
    const { fill = false, children, vertical, ...restProps } = this.props;

    return (
      <Container fill={`${fill}`} vertical={vertical} {...restProps}>
        {children}
      </Container>
    );
  }
}
