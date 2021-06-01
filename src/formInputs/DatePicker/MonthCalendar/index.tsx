import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { gray500 } from '../../../core/Colors';
import { body2 } from '../../../core/TextStyles';
import { DatePickerLocale } from '../interface';
import { MonthCalendarDay, MonthCalendarDayProps } from './Day';

type Props = {
  locale: DatePickerLocale;
  currentMonth: Date;
  selectedDate: Date | null;
  secondDate: Date | null;
  isRange: boolean;
  onChange: MonthCalendarDayProps['onClick'];
  min?: Date;
  max?: Date;
  highlightWeekEnd: boolean;
};

type DayType = Omit<MonthCalendarDayProps, 'useRange' | 'onClick' | 'onHover'>;

export const MonthCalendar = React.memo<Props>(
  ({ locale, currentMonth, isRange, selectedDate, secondDate, onChange, min, max, highlightWeekEnd }) => {
    const [hoverDate, setHoverDate] = useState<Date | null>(null);
    const onClickDate = (date: Date) => {
      setHoverDate(null);
      onChange(date);
    };

    const onChangeHover = (newHoverDate: Date | null) => {
      setHoverDate(newHoverDate);
    };

    const isInDateRange = useCallback(
      (firstDateRange: number | null, secondDateRange: number | null, current: number) => {
        if (firstDateRange === null || secondDateRange === null) {
          return false;
        }
        if (firstDateRange < current && current < secondDateRange) {
          return true;
        }
        if (secondDateRange < current && current < firstDateRange) {
          return true;
        }
        return false;
      },
      []
    );

    const createDays = useCallback(
      (dayStart: number, dayEnd: number, year: number, month: number, isOtherMonth: boolean): DayType[] => {
        const minTimeNumber = min ? min.getTime() : null;
        const maxTimeNumber = max ? max.getTime() : null;
        const selectedTimeNumber = selectedDate && new Date(selectedDate).setHours(0, 0, 0, 0);
        const hoverTimeNumber = hoverDate && hoverDate.getTime();
        const dayFirstSecondDate = secondDate ? new Date(secondDate) : undefined;
        if (dayFirstSecondDate) {
          dayFirstSecondDate.setHours(0, 0, 0, 0);
        }
        const secondTimeNumber = dayFirstSecondDate && dayFirstSecondDate.getTime();

        const firstTimeNumber = isRange
          ? (selectedTimeNumber !== null &&
              (hoverTimeNumber !== null || secondTimeNumber !== null) &&
              secondTimeNumber) ||
            hoverTimeNumber
          : null;

        const range = Array.from({ length: dayEnd - dayStart }, (_, i) => i + dayStart);
        return range.map(value => {
          const dayInfo = new Date(year, month, value).getTime();
          const dayIndex = new Date(year, month, value).getDay();

          const disabled =
            (minTimeNumber !== null && minTimeNumber > dayInfo) || (maxTimeNumber !== null && maxTimeNumber < dayInfo);
          const isInRange = isInDateRange(firstTimeNumber, selectedTimeNumber, dayInfo);

          return {
            date: dayInfo,
            dayIndex,
            disabled,
            isInRange,
            isOtherMonth,
            highlightWeekEnd,
            isSelected: selectedTimeNumber === dayInfo || secondTimeNumber === dayInfo,
          };
        });
      },
      [highlightWeekEnd, hoverDate, isInDateRange, isRange, max, min, secondDate, selectedDate]
    );

    const calculateDays = useCallback(
      (currentMonthtoCalculate: Date) => {
        const days: DayType[] = [];
        const date = new Date(currentMonthtoCalculate);
        date.setDate(1);
        const firstDayIndex = date.getDay();
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        const lastDay = date.getDate();

        const nowYear = date.getFullYear();
        const nowMonth = date.getMonth();
        if (firstDayIndex > 0) {
          date.setDate(0);
          const prevMonthLastDay = date.getDate();

          days.push(
            ...createDays(prevMonthLastDay - firstDayIndex + 1, prevMonthLastDay + 1, nowYear, nowMonth - 1, true)
          );
        }

        days.push(...createDays(1, lastDay + 1, nowYear, nowMonth, false));

        if (days.length % 7 > 0) {
          days.push(...createDays(1, 7 - (days.length % 7) + 1, nowYear, nowMonth + 1, true));
        }
        return days;
      },
      [createDays]
    );

    const days = calculateDays(currentMonth);
    const useHover = isRange && selectedDate && !secondDate;

    return (
      <>
        <CalendarHead>
          {locale.weekTextArray.map(week => (
            <DayName key={week}>{week}</DayName>
          ))}
        </CalendarHead>
        <CalendarBody>
          {days.map(day => (
            <MonthCalendarDay
              key={day.date}
              onClick={onClickDate}
              onHover={useHover ? onChangeHover : undefined}
              useRange={isRange}
              {...day}
            />
          ))}
        </CalendarBody>
      </>
    );
  }
);

const CalendarBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CalendarHead = styled.div`
  display: flex;
`;

const DayName = styled.div`
  ${body2};
  display: flex;
  color: ${gray500};
  margin: 0 4px;
  height: 32px;
  width: 32px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
`;
