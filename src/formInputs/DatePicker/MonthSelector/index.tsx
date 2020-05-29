import React, { useMemo } from 'react';
import styled from 'styled-components';
import { DatePickerLocale } from '../interface';
import { MonthSelectorMonth } from './Month';

interface Props {
  readonly locale: DatePickerLocale;
  readonly currentYear: Date;
  readonly selectedDate: Date | null;
  readonly secondDate: Date | null;
  readonly onChange: (date: Date) => boolean | void;
}

export const MonthSelector = React.memo<Props>(props => {
  const { locale, selectedDate, currentYear, onChange, secondDate } = props;

  const selectedMonth = useMemo(
    () => selectedDate && new Date(selectedDate.getFullYear(), selectedDate.getMonth()).getTime(),
    [selectedDate]
  );
  const secondMonth = useMemo(() => secondDate && new Date(secondDate.getFullYear(), secondDate.getMonth()).getTime(), [
    secondDate,
  ]);
  return (
    <StyledMonthSelector>
      {locale.monthTextArray.map((month, index) => {
        const monthDate = new Date(currentYear.getFullYear(), index);
        return (
          <MonthSelectorMonth
            key={index}
            onClick={() => {
              onChange(monthDate);
            }}
            isSelected={selectedMonth === monthDate.getTime() || secondMonth === monthDate.getTime()}
          >
            {month}
          </MonthSelectorMonth>
        );
      })}
    </StyledMonthSelector>
  );
});

const StyledMonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 212px;
`;
