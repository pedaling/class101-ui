import React from 'react';
import styled from 'styled-components';

import Button from '../../../Button';
import { orange50, orange600 } from '../../../Colors';
import { Add } from '../../../Icon';
import { body2 } from '../../../TextStyles';

export default class ViewAllButton extends React.PureComponent {
  public render() {
    return (
      <AllButton {...this.props}>
        <Inner>
          <Add size={18} fillColor={orange600} />
          <Text>전체보기</Text>
        </Inner>
      </AllButton>
    );
  }
}

const AllButton = styled(Button)`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  min-height: 42px;
  height: auto;
  padding: 0;
  background: none;
  &:hover,
  &:focus {
    background-color: ${orange50};
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  ${body2};
  color: ${orange600};
  margin-top: 4px;
`;
