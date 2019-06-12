import React from 'react';
import styled from 'styled-components';

import { orange50, orange600 } from '../../../Colors';
import { Add } from '../../../Icon';
import { body2 } from '../../../TextStyles';

export default class ViewAllButton extends React.PureComponent {
  public render() {
    return (
      <AllButton {...this.props}>
        <Add size={18} fillColor={orange600} />
        <Text>전체보기</Text>
      </AllButton>
    );
  }
}

const AllButton = styled.button`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  min-height: 42px;
  height: auto;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: ${orange50};
  }
`;

const Text = styled.div`
  ${body2};
  color: ${orange600};
  margin-top: 4px;
`;
