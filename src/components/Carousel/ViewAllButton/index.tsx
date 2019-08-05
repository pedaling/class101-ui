import React from 'react';
import styled from 'styled-components';

import { orange600 } from '../../../Colors';
import { Add } from '../../../Icon';
import Button, { ButtonProps } from '../../Button';
import { ButtonColor } from '../../Button/interface';

export default class ViewAllButton extends React.PureComponent<Partial<ButtonProps>> {
  public render() {
    return (
      <AllButton color={ButtonColor.ORANGE_LIGHT} {...this.props}>
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
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 4px;
`;
