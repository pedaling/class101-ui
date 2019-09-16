import React from 'react';
import styled from 'styled-components';
import { gray200, white, orange500, gray300, gray800, orange100 } from '../../../../core/Colors';
import { body2 } from '../../../../core/TextStyles';
import { darken } from 'polished';

export interface MonthCalendarDayProps {
  readonly date: number;
  readonly disabled: boolean;
  readonly isOtherMonth: boolean;
  readonly isSelected: boolean;
  readonly isInRange: boolean;
  readonly onClick: (date: Date) => void;
  readonly onHover?: (date: Date | null) => void;
}

const Component = (props: MonthCalendarDayProps) => {
  const { date, onClick, onHover, ...otherProps } = props;
  const dateObject = new Date(date);
  const onDateClick = React.useCallback(() => {
    if (!otherProps.disabled) onClick(dateObject);
  }, [otherProps, dateObject]);
  const onDateHover = React.useCallback(() => {
    onHover && onHover(dateObject);
  }, [dateObject, onHover]);
  return (
    <Day {...otherProps} onClick={onDateClick} onMouseOver={onDateHover}>
      {dateObject.getDate()}
    </Day>
  );
};

export const MonthCalendarDay = React.memo(Component);

const Day = styled.div<Omit<MonthCalendarDayProps, 'onClick' | 'onHover' | 'date'>>`
  ${body2}
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
    return gray800;
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
