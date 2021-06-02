import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

import { gray900, orange500, white } from '../../../../core/Colors';

export interface MonthSelectorMonthProps {
  readonly children: string;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}

export const MonthSelectorMonth = React.memo<MonthSelectorMonthProps>((props) => {
  const { children, isSelected, onClick } = props;
  return (
    <Month isSelected={isSelected} onClick={onClick}>
      {children}
    </Month>
  );
});

const Month = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  ${(props) => (props.isSelected
    ? css`
          color: ${white};
          background-color: ${orange500};
        `
    : css`
          color: ${gray900};
          &:hover {
            background-color: ${darken(0.1, white)};
          }
        `)};

  align-items: center;
  cursor: pointer;
  width: 88px;
  height: 32px;
  border-radius: 4px;
`;
