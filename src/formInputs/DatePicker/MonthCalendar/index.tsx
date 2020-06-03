import { range } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { gray500 } from '../../../core/Colors';
import { body2 } from '../../../core/TextStyles';
import { DatePickerLocale } from '../interface';
import { MonthCalendarDay, MonthCalendarDayProps } from './Day';

interface Props {
  readonly locale: DatePickerLocale;
  readonly currentMonth: Date;
  readonly selectedDate: Date | null;
  readonly secondDate: Date | null;
  readonly isRange: boolean;
  readonly onChange: MonthCalendarDayProps['onClick'];
  readonly min: Date | undefined;
  readonly max: Date | undefined;
  readonly highlightWeekEnd: boolean;
}

interface State {
  hoverDate: Date | null;
}

type DayType = Omit<MonthCalendarDayProps, 'onClick' | 'onHover'>;

export class MonthCalendar extends React.PureComponent<Props, State> {
  public readonly state: State = {
    hoverDate: null,
  };
  public render() {
    const { locale, currentMonth, isRange, selectedDate, secondDate } = this.props;
    const days = this.calculateDays(currentMonth);
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
              onClick={this.onClickDate}
              onHover={useHover ? this.onChangeHover : undefined}
              useRange={isRange}
              {...day}
            />
          ))}
        </CalendarBody>
      </>
    );
  }

  private onClickDate = (date: Date) => {
    const { onChange } = this.props;

    this.setState({
      hoverDate: null,
    });
    onChange(date);
  };

  private onChangeHover = (hoverDate: Date | null) => {
    this.setState({
      hoverDate,
    });
  };

  private isInDateRange(firstDate: number | null, secondDate: number | null, current: number) {
    if (firstDate === null || secondDate === null) {
      return false;
    }
    if (firstDate < current && current < secondDate) {
      return true;
    }
    if (secondDate < current && current < firstDate) {
      return true;
    }
    return false;
  }

  private createDays(dayStart: number, dayEnd: number, year: number, month: number, isOtherMonth: boolean): DayType[] {
    const { selectedDate, min, max, isRange, secondDate, highlightWeekEnd } = this.props;
    const { hoverDate } = this.state;
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
      ? (selectedTimeNumber !== null && (hoverTimeNumber !== null || secondTimeNumber !== null) && secondTimeNumber) ||
        hoverTimeNumber
      : null;

    return range(dayStart, dayEnd).map(value => {
      const dayInfo = new Date(year, month, value).getTime();
      const dayIndex = new Date(year, month, value).getDay();

      const disabled =
        (minTimeNumber !== null && minTimeNumber > dayInfo) || (maxTimeNumber !== null && maxTimeNumber < dayInfo);
      const isInRange = this.isInDateRange(firstTimeNumber, selectedTimeNumber, dayInfo);

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
  }

  private calculateDays(currentMonth: Date) {
    const days: DayType[] = [];
    const date = new Date(currentMonth);
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
        ...this.createDays(prevMonthLastDay - firstDayIndex + 1, prevMonthLastDay + 1, nowYear, nowMonth - 1, true)
      );
    }

    days.push(...this.createDays(1, lastDay + 1, nowYear, nowMonth, false));

    if (days.length % 7 > 0) {
      days.push(...this.createDays(1, 7 - (days.length % 7) + 1, nowYear, nowMonth + 1, true));
    }
    return days;
  }
}

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
