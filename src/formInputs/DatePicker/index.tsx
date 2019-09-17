import React, { PureComponent, createRef } from 'react';
import { DatePickerLocale, DatePickerSelectorType } from './interface';
import styled from 'styled-components';
import { white, gray800 } from '../../core/Colors';
import ko_KR from './locales/ko_KR';
import { MonthCalendar } from './MonthCalendar';
import { MonthSelector } from './MonthSelector';
import { Input, InputProps } from '../Input';
import { ChevronLeft, ChevronRight } from '../../Icon';
import { IconButton, Button } from '../../components/Button';
import { elevation2 } from '../../core/ElevationStyles';
import { body1 } from '../../core/TextStyles';
import { HTMLInputProps } from 'interfaces/props';

interface DateRange {
  start?: Date;
  end?: Date;
}

export interface DatePickerProps {
  readonly value?: Date;
  readonly rangeValue: DateRange;
  readonly onChange?: (date: Date) => boolean | void;
  readonly onRangeChange?: (dateRange: DateRange) => boolean | void;
  readonly locale: DatePickerLocale;
  readonly minDate?: Date;
  readonly maxDate?: Date;
  readonly useRange: boolean;
  readonly alwaysShow?: boolean;
  readonly inline?: boolean;
  readonly inputAttributes?: HTMLInputProps & InputProps;
  readonly style?: React.CSSProperties;
}

export interface DatePickerState {
  selectorType: DatePickerSelectorType;
  selectedDate: Date | null;
  secondDate: Date | null;
  currentMonth: Date;
  modalVisible: boolean;
  inputValue: string;
}

const DatePickerWidth = 312;
const DatePickerRangeText = '-';

export class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
  public static defaultProps: Partial<DatePickerProps> = {
    locale: ko_KR,
    useRange: false,
    rangeValue: {},
  };

  private readonly modalRef = createRef<HTMLDivElement>();

  public constructor(props: DatePickerProps) {
    super(props);

    const { value, rangeValue, minDate: min } = props;

    this.state = {
      selectorType: 'day',
      selectedDate: value || rangeValue.start || rangeValue.end || null,
      secondDate: (rangeValue.start && rangeValue.end) || null,
      currentMonth: value
        ? this.getDateMonth(value)
        : rangeValue.start
        ? this.getDateMonth(rangeValue.start)
        : rangeValue.end
        ? this.getDateMonth(rangeValue.end)
        : min
        ? this.getDateMonth(min)
        : this.getDateMonth(new Date()),
      modalVisible: false,
      inputValue: '',
    };
  }

  public componentDidMount() {
    if (document) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
    this.calculateInputValue();
  }

  public componentWillUnmount() {
    if (document) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  public render() {
    const { selectedDate, currentMonth, selectorType, modalVisible, secondDate, inputValue } = this.state;
    const { locale, minDate: min, maxDate: max, inputAttributes, alwaysShow, useRange, inline, style } = this.props;

    return (
      <Container inline={inline} style={style}>
        <PickerInput
          type="text"
          value={inputValue}
          onChange={this.handleChangeInput}
          onBlur={this.handleBlurInput}
          placeholder={this.getInputPlaceHolder()}
          onClick={this.showModal}
          inline={inline}
          {...inputAttributes}
        />
        <Picker position={alwaysShow ? 'static' : 'absolute'} visible={alwaysShow || modalVisible} ref={this.modalRef}>
          <DatePickerNav>
            <IconButton onClick={this.handleClickDecreaseBtn} icon={<ChevronLeft />} color="white" />
            {selectorType === 'day' && (
              <NavText onClick={() => this.changeSelectorType('month')} size="sm">
                {currentMonth.toLocaleDateString(locale.name, { year: 'numeric', month: 'short' })}
              </NavText>
            )}
            {selectorType === 'month' && (
              <NavText onClick={() => this.changeSelectorType('day')} size="sm">
                {currentMonth.toLocaleDateString(locale.name, { year: 'numeric' })}
              </NavText>
            )}
            <IconButton onClick={this.handleClickIncreaseBtn} icon={<ChevronRight />} color="white" />
          </DatePickerNav>
          <DatePickerBody>
            {selectorType === 'day' && (
              <MonthCalendar
                min={min}
                max={max}
                isRange={useRange}
                locale={locale}
                selectedDate={selectedDate}
                secondDate={secondDate}
                currentMonth={currentMonth}
                onChange={this.handleChangeDate}
              />
            )}
            {selectorType === 'month' && (
              <MonthSelector
                locale={locale}
                currentYear={currentMonth}
                selectedDate={selectedDate}
                secondDate={secondDate}
                onChange={this.onSelectMonth}
              />
            )}
          </DatePickerBody>
        </Picker>
      </Container>
    );
  }

  private getDateMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth());
  };

  private getDateLocaleString = (date: Date | null) => {
    if (date) {
      return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
    }
    return '';
  };

  private calculateInputValue = () => {
    const { useRange } = this.props;
    const { selectedDate, secondDate } = this.state;

    if (useRange) {
      if (!selectedDate && !secondDate) {
        return this.setState({ inputValue: '' });
      }
      if (selectedDate && secondDate && selectedDate.getTime() > secondDate.getTime()) {
        return this.setState({
          inputValue: `${this.getDateLocaleString(secondDate)} ${DatePickerRangeText} ${this.getDateLocaleString(
            selectedDate
          )}`,
        });
      }
      return this.setState({
        inputValue: `${this.getDateLocaleString(selectedDate)} ${DatePickerRangeText} ${this.getDateLocaleString(
          secondDate
        )}`,
      });
    }
    return this.setState({ inputValue: this.getDateLocaleString(selectedDate) });
  };

  private sortDate = (firstDate: Date, secondDate: Date) => {
    if (firstDate.getTime() > secondDate.getTime()) {
      return [secondDate, firstDate];
    }
    return [firstDate, secondDate];
  };

  private handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  private handleBlurInput = () => {
    const { useRange } = this.props;
    const { inputValue } = this.state;
    const dateText = inputValue;

    if (useRange) {
      const [firstDateText, secondDateText] = dateText.split(DatePickerRangeText);
      const firstDate = new Date(firstDateText);
      const secondDate = new Date(secondDateText);

      if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
        return this.calculateInputValue();
      }
      this.setState(
        {
          selectedDate: firstDate,
          secondDate: secondDate,
        },
        this.calculateInputValue
      );
      return;
    }

    const currentDate = new Date(dateText);

    if (isNaN(currentDate.getTime())) {
      return this.calculateInputValue();
    }
    this.setState({
      selectedDate: currentDate,
    });
  };

  private getInputPlaceHolder = () => {
    const { useRange } = this.props;

    if (useRange) {
      return 'YYYY. MM. DD. - YYYY. MM. DD.';
    }

    return 'YYYY. MM. DD.';
  };

  private handleClickIncreaseBtn = () => {
    const { currentMonth, selectorType } = this.state;

    if (selectorType === 'month') {
      currentMonth.setFullYear(currentMonth.getFullYear() + 1);
    } else if (selectorType === 'day') {
      currentMonth.setMonth(currentMonth.getMonth() + 1);
    }
    this.setState({
      currentMonth: new Date(currentMonth),
    });
  };

  private handleClickDecreaseBtn = () => {
    const { currentMonth, selectorType } = this.state;

    if (selectorType === 'month') {
      currentMonth.setFullYear(currentMonth.getFullYear() - 1);
    } else if (selectorType === 'day') {
      currentMonth.setMonth(currentMonth.getMonth() - 1);
    }
    this.setState({
      currentMonth: new Date(currentMonth),
    });
  };

  private handleChangeDate = (date: Date) => {
    const { onChange, onRangeChange, useRange } = this.props;
    const { selectedDate, secondDate } = this.state;

    if (useRange) {
      if (selectedDate && !secondDate) {
        const [startDate, endDate] = this.sortDate(selectedDate, date);
        if (onRangeChange && onRangeChange({ start: startDate, end: endDate }) === false) {
          return this.setState(
            {
              selectedDate: null,
              secondDate: null,
            },
            this.calculateInputValue
          );
        }
        return this.setState(
          {
            secondDate: date,
          },
          this.calculateInputValue
        );
      }
      return this.setState(
        {
          selectedDate: date,
          secondDate: null,
        },
        this.calculateInputValue
      );
    }
    if (!onChange || onChange(date) !== false) {
      this.setState(
        {
          selectedDate: date,
        },
        this.calculateInputValue
      );
    }
  };

  private onSelectMonth = (date: Date) => {
    this.setState({
      currentMonth: date,
      selectorType: 'day',
    });
  };

  private showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  private changeSelectorType = (selectorType: DatePickerSelectorType) => {
    this.setState({
      selectorType,
    });
  };

  private handleClickOutside = (event: MouseEvent) => {
    if (this.modalRef.current && !this.modalRef.current.contains(event.target as Node)) {
      this.setState({
        modalVisible: false,
      });
    }
  };
}

const Container = styled.div<{ inline?: boolean }>`
  position: relative;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const Picker = styled.div<{ visible: boolean; position: string }>`
  position: ${props => props.position};
  background: ${white};
  text-align: center;
  transform: none;
  color: ${gray800};
  width: ${DatePickerWidth}px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  left: 0;
  margin-top: 8px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 12px;
  flex-direction: column;
  z-index: 500;
  ${elevation2}
`;

const DatePickerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 32px;
`;

const DatePickerBody = styled.div`
  flex: 1 0 auto;
  margin-top: 14px;
  padding: 2px;
`;

const NavText = styled(Button)`
  background-color: transparent;
  ${body1}
  font-weight: bold;
`;

const PickerInput = styled(Input)`
  width: ${DatePickerWidth}px;
`;
