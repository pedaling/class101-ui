import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  padding: 100px;
`;

export default class Button extends Component {
  render() {
    return (
      <Container>
        <button>Test</button>
      </Container>
    );
  }
}
