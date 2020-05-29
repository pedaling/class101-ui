import React, { useCallback } from 'react';
import styled from 'styled-components';
import { gray000, gray900 } from '../../../core/Colors';
import { body2 } from '../../../core/TextStyles';
import { DatePickerLocale } from '../interface';
import { TimeSelectorInput } from './Input';

interface Props {
  readonly locale: DatePickerLocale;
  readonly selectedDate: Date | null;
  readonly secondDate: Date | null;
  readonly isRange: boolean;
  readonly onChangeTime: (date: Date, isSecond: boolean) => void;
}

export const TimeSelector = React.memo<Props>(props => {
  const { locale, isRange, secondDate, selectedDate, onChangeTime } = props;

  const handleChangeStartTime = useCallback(
    (date: Date) => {
      onChangeTime(date, false);
    },
    [onChangeTime]
  );

  const handleChangeEndTime = useCallback(
    (date: Date) => {
      onChangeTime(date, true);
    },
    [onChangeTime]
  );

  if (isRange) {
    return (
      <Container>
        {selectedDate && (
          <InputContainer>
            <TimeText>{locale.startTimeText}</TimeText>
            <TimeSelectorInput value={selectedDate} onChange={handleChangeStartTime} />
          </InputContainer>
        )}
        {secondDate && (
          <Space>
            <InputContainer>
              <TimeText>{locale.endTimeText}</TimeText>
              <TimeSelectorInput value={secondDate} onChange={handleChangeEndTime} />
            </InputContainer>
          </Space>
        )}
      </Container>
    );
  }
  return (
    <Container>
      {selectedDate && (
        <InputContainer>
          <TimeText>{locale.timeText}</TimeText>
          <TimeSelectorInput value={selectedDate} onChange={handleChangeStartTime} />
        </InputContainer>
      )}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 20px 8px;
  margin: 0 -12px;
  flex-direction: column;
  border-top: 1px solid ${gray000};
`;

const TimeText = styled.span`
  ${body2};
  color: ${gray900};
  flex: 1;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 12px;
`;
