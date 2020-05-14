import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { gray900, orange500, white } from '../../../../core/Colors';

export interface MonthSelectorMonthProps {
  readonly children: string;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}

const Component = (props: MonthSelectorMonthProps) => {
  const { children, isSelected, onClick } = props;
  return (
    <Month isSelected={isSelected} onClick={onClick}>
      {children}
    </Month>
  );
};

export const MonthSelectorMonth = React.memo(Component);

const Month = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  color: ${props => {
    if (props.isSelected) {
      return white;
    }
    return gray900;
  }};
  ${props =>
    props.isSelected
      ? `
    background-color: ${orange500}
  `
      : `

  &:hover {
    background-color: ${darken(0.1, white)};
  }`}

  align-items: center;
  cursor: pointer;
  width: 88px;
  height: 32px;
  border-radius: 4px;
`;
