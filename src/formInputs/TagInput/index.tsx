import { HTMLInputProps } from 'interfaces/props';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { ButtonColor, ButtonSize, IconButton } from '../../components/Button';
import { gray300, gray900, orange500, redError, white } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { CloseIcon } from '../../Icon';
import { InlineError, Intent } from '../InlineError';
import InnerTags from './InnerTags';

export type TagInputProps = {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inputProps?: HTMLInputProps;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  value?: string[];
  disabled?: boolean;
  onChange?: (value?: string[]) => void;
  onRemove?: (value?: string[]) => void;
  onEnter?: (value?: string[]) => void;
  addOnBlur?: boolean;
  separator?: RegExp | string;
};

export const TagInput = React.memo<TagInputProps>(
  ({
    className,
    style,
    inputStyle,
    allowMessage,
    warnMessage,
    errorMessage,
    value = [],
    inputProps,
    separator = ',',
    disabled = false,
    onChange,
    onRemove,
    onEnter,
    addOnBlur,
  }) => {
    const [tempValue, setTempValue] = useState('');
    const [focused, setFocused] = useState(false);
    const inputElementRef = useRef<HTMLInputElement>(null);

    const getNextValue = () => {
      const newValue = tempValue
        ? tempValue
            .split(separator)
            .map(v => v.trim())
            .filter(e => Boolean(e))
        : [];

      return new Array(...new Set(...[...value, ...newValue]));
    };

    const handleContainerClick = () => {
      inputElementRef.current?.focus();
    };

    const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (onChange) {
          onChange(getNextValue());
          setTempValue('');
        }
        if (onEnter) {
          onEnter(value);
        }
      }
      if (event.key === 'Backspace' && tempValue === '') {
        handleTagRemove(value.length - 1);
      }
    };

    const handleInputFocus = () => {
      setFocused(true);
    };

    const handleInputBlur = () => {
      if (addOnBlur) {
        if (onChange) {
          onChange(getNextValue());
          setTempValue('');
        }
      }

      setFocused(false);
      if (addOnBlur) {
        setTempValue('');
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTempValue(event.target.value);
    };

    const handleTagRemove = (index: number) => {
      let nextValue: string[] = [];
      if (index >= 0) {
        nextValue = [...value];
        nextValue.splice(index, 1);
      }

      if (onChange) {
        onChange(nextValue);
      }
      if (onRemove) {
        onRemove(value);
      }
    };

    const handleTagRemoveAll = () => {
      if (onChange) {
        onChange([]);
      }
    };

    return (
      <>
        <TagInputContainer
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''} ${
            focused ? ' focused' : ''
          }`}
          style={style}
          onClick={handleContainerClick}
        >
          <InnerContainer>
            <InnerTags value={value} onRemove={handleTagRemove} disabled={disabled} />
            <StyledInput
              type="text"
              style={inputStyle}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyUp={handleInputKeyUp}
              onFocus={handleInputFocus}
              value={tempValue}
              ref={inputElementRef}
              disabled={disabled}
              {...inputProps}
            />
          </InnerContainer>
          {value.length > 0 && !disabled && (
            <IconButton
              icon={<CloseIcon />}
              size={ButtonSize.XSMALL}
              color={ButtonColor.TRANSPARENT}
              onClick={handleTagRemoveAll}
            />
          )}
        </TagInputContainer>
        {allowMessage && !errorMessage && (
          <InlineError icon={null} intent={Intent.DEFAULT}>
            {allowMessage}
          </InlineError>
        )}
        {errorMessage && <InlineError intent={Intent.DANGER}>{errorMessage}</InlineError>}
        {warnMessage && <InlineError intent={Intent.WARNING}>{warnMessage}</InlineError>}
      </>
    );
  }
);

const TagInputContainer = styled.div`
  box-sizing: border-box;
  padding: 8px;
  border: solid 1px ${gray300};
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  background-color: ${white};
  border-radius: 3px;
  &.error {
    border: solid 1px ${redError};
  }
  &.warn {
    border: solid 1px ${orange500};
  }
  &.focused {
    outline: none;
    border-color: ${gray900};
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-self: center;
  align-items: center;
  margin-bottom: -5px;
  .inner-tags__tag {
    margin-bottom: 5px;
    margin-right: 5px;
    &:last-child {
      margin-right: 0 !important;
    }
  }
`;

const StyledInput = styled.input`
  ${body2};
  color: ${gray900};
  flex: 1 1 auto;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
`;
