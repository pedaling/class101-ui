import React, { useCallback } from 'react';
import styled from 'styled-components';
import { gray200, white } from '../../../../core/Colors';
import { body2 } from '../../../../core/TextStyles';
import padNumber from '../../../../utils/padNumber';

interface Props {
  value: Date;
  onChange?: (value: Date) => void;
}

export const TimeSelectorInput = React.memo<Props>(props => {
  const { value, onChange } = props;

  const handleChange = useCallback(
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = new Date(value);
      if (event.target instanceof HTMLInputElement) {
        switch (name) {
          case 'hours':
            newValue.setHours(Number(event.target.value));
            break;
          case 'minutes':
            newValue.setMinutes(Number(event.target.value));
            break;
          case 'seconds':
            newValue.setSeconds(Number(event.target.value));
        }
      }
      onChange?.(newValue);
    },
    [onChange, value]
  );

  return (
    <Container>
      <TimeInput min={0} max={23} onChange={handleChange('hours')} value={padNumber(value.getHours(), 2)} />
      <TimeDivider />
      <TimeInput min={0} max={59} onChange={handleChange('minutes')} value={padNumber(value.getMinutes(), 2)} />
      <TimeDivider />
      <TimeInput min={0} max={59} onChange={handleChange('seconds')} value={padNumber(value.getSeconds(), 2)} />
    </Container>
  );
});

const Container = styled.div`
  padding: 8px 16px;
  background: ${white};
  border: 1px solid ${gray200};
  border-radius: 3px;
`;

const TimeInput = styled.input.attrs({
  placeholder: '00',
  type: 'number',
})`
  ${body2};
  width: 18px;
  height: 20px;
  border: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline-width: 0;
  }

  -moz-appearance: textfield;
`;

const TimeDivider = styled.span`
  ${body2};
  margin: 0 10px;
  color: ${gray200};
  &:before {
    content: ':';
    text-align: center;
  }
`;
