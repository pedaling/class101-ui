import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { orange000, orange600 } from '../../../core/Colors';
import { AddIcon } from '../../../Icon';
import { Button, ButtonProps } from '../../Button/ContainButton';
import { ButtonColor } from '../../Button/interface';

export default class ViewAllButton extends React.PureComponent<Partial<ButtonProps>> {
  public render() {
    const { className, ...props } = this.props;

    return (
      <AllButton color={ButtonColor.ORANGE_LIGHT} className={classNames('swiper-slide', className)} {...props}>
        <Inner>
          <AddIcon size={18} fillColor={orange600} />
          <Text>전체보기</Text>
        </Inner>
      </AllButton>
    );
  }
}

const AllButton = styled(Button)`
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  min-height: 42px;
  height: auto;
  padding: 0;
  background-color: transparent;
  &:hover,
  &:active {
    background-color: ${orange000};
  }
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
