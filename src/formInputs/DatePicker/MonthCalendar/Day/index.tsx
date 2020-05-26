import { darken } from 'polished';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { blue500, gray200, gray300, gray900, orange100, orange500, red500, white } from '../../../../core/Colors';
import { body2 } from '../../../../core/TextStyles';

export interface MonthCalendarDayProps {
  readonly date: number;
  readonly disabled: boolean;
  readonly isOtherMonth: boolean;
  readonly isSelected: boolean;
  readonly isInRange: boolean;
  readonly dayIndex: number;
  readonly highlightWeekEnd: boolean;
  readonly onClick: (date: Date) => void;
  readonly onHover?: (date: Date | null) => void;
}

export const MonthCalendarDay = React.memo<MonthCalendarDayProps>(props => {
  const { date, onClick, onHover, ...otherProps } = props;
  const dateObject = new Date(date);
  const onClickDate = useCallback(() => {
    if (!otherProps.disabled) {
      onClick(dateObject);
    }
  }, [otherProps.disabled, onClick, dateObject]);
  const onHoverDate = useCallback(() => {
    if (onHover) {
      onHover(dateObject);
    }
  }, [dateObject, onHover]);
  return (
    <Day {...otherProps} onClick={onClickDate} onMouseOver={onHoverDate}>
      {dateObject.getDate()}
    </Day>
  );
});

const Day = styled.div<Omit<MonthCalendarDayProps, 'onClick' | 'onHover' | 'date'>>`
  ${body2};
  box-sizing: content-box;
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 3px;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => {
    if (props.disabled) {
      return gray200;
    }
    if (props.isOtherMonth) {
      return gray300;
    }
    if (props.highlightWeekEnd) {
      if (props.dayIndex === 6) {
        return blue500;
      }
      if (props.dayIndex === 0) {
        return red500;
      }
    }
    return gray900;
  }};
  width: 32px;
  height: 32px;
  z-index: 1;
  margin: 2px 4px;

  ${props => {
    if (props.isSelected) {
      return `
        background-color: ${orange500};
        color: ${white};`;
    }
    if (props.isInRange) {
      return `
        background-color: ${orange100};
        margin: 2px -4px;
        padding: 0 8px;`;
    }
    return `
      &:hover {
        background: ${darken(0.1, white)};
      }`;
  }}
`;
