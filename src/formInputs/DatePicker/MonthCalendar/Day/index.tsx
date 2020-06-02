import { darken } from 'polished';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
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

  if (!onHover && otherProps.isSelected) {
    return (
      <SelectedDay {...otherProps} onClick={onClickDate} onMouseOver={onHoverDate}>
        {dateObject.getDate()}
      </SelectedDay>
    );
  }

  return (
    <Day {...otherProps} onClick={onClickDate} onMouseOver={onHoverDate}>
      {dateObject.getDate()}
    </Day>
  );
});

const dayCss = (props: Omit<MonthCalendarDayProps, 'onClick' | 'onHover' | 'date'>) => css`
  ${body2};
  box-sizing: content-box;
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 3px;
  align-items: center;
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  color: ${() => {
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

  ${() => {
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

const Day = styled.div<Omit<MonthCalendarDayProps, 'onClick' | 'onHover' | 'date'>>`
  ${props => dayCss(props)}
`;

const SelectedDay = styled.p<Omit<MonthCalendarDayProps, 'onClick' | 'onHover' | 'date'>>`
  ${props => dayCss(props)}
  &:last-of-type::before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: -4px;
    right: 32px;
    bottom: 0;
    z-index: -1;
    background-color: ${orange100};
  }
  &:first-of-type::before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 32px;
    right: -4px;
    bottom: 0;
    z-index: -1;
    background-color: ${orange100};
  }
`;
