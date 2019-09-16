import React from 'react';
import { DatePickerLocale } from '../interface';
import { MonthSelectorMonth } from './Month';
import styled from 'styled-components';

interface Props {
  readonly locale: DatePickerLocale;
  readonly currentYear: Date;
  readonly selectedDate: Date | null;
  readonly secondDate: Date | null;
  readonly onChange: (date: Date) => boolean | void;
}

export class MonthSelector extends React.PureComponent<Props> {
  public render() {
    const { locale, selectedDate, currentYear, onChange, secondDate } = this.props;
    const selectedMonth = selectedDate && new Date(selectedDate.getFullYear(), selectedDate.getMonth()).getTime();
    const secondMonth = secondDate && new Date(secondDate.getFullYear(), secondDate.getMonth()).getTime();
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
  }
}

const StyledMonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 212px;
`;
