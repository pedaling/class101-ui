// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Colors } from 'class101-ui';

interface Props {
  colorName: string,
  backgroundColor: string,
  color?: string,
};

const Container = styled.div`
  border-radius: 4px;
  margin: 4px 0;
  padding: 6px 12px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color || Colors.white};
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  border: 1px solid rgba(16, 22, 26, 0.2);

  &::after {
    content: "${props => props.content}";
  }

  &:hover {
    border: 1px solid rgba(16, 22, 26, 0.2);
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2);

    &::after {
      content: "Click to copy hex code";
    }
  }
`;

const HexCode = styled.span`
  float: right;
`;

class Component extends PureComponent<Props> {
  handleClickItem = () => {
    const { backgroundColor } = this.props;

    const element = document.createElement('textarea');
    element.value = backgroundColor.toUpperCase();
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    // eslint-disable-next-line
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    // eslint-disable-next-line
    document.body.removeChild(element);
  }

  render() {
    const {
      backgroundColor,
      colorName,
      color,
      ...restProps
    } = this.props;

    return (
      <Container
        color={ color }
        backgroundColor={ backgroundColor }
        content={ colorName }
        onClick={ this.handleClickItem }
        { ...restProps }
      >
        <HexCode>{ backgroundColor.toUpperCase() }</HexCode>
      </Container>
    );
  }
}

export default Component;
