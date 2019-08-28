import { HTMLInputProps } from 'interfaces/props';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray300, gray800, orange500, redError } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { InlineError, Intent } from '../InlineError';
import InnerTags from './InnerTags';

export interface TagInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inputProps?: HTMLInputProps;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  value: string[];
  disabled?: boolean;
  onChange?: (value?: string[]) => void;
  onRemove?: (value?: string[]) => void;
  onEnter?: (value?: string[]) => void;
  addOnBlur?: boolean;
  separator: RegExp | string;
}

interface State {
  tempValue: string;
  focused: boolean;
}

export class TagInput extends PureComponent<TagInputProps, State> {
  public static readonly defaultProps: Partial<TagInputProps> = {
    value: [],
    separator: ',',
    disabled: false,
  };

  public readonly state: State = {
    tempValue: '',
    focused: false,
  };

  private inputElement?: HTMLInputElement;

  private inputRefHandler = (ref: HTMLInputElement) => {
    this.inputElement = ref;
  };

  private getNewValue = () => {
    const { separator } = this.props;
    const { tempValue } = this.state;
    const newValue = tempValue ? tempValue.split(separator).map(v => v.trim()) : [];
    return newValue;
  };

  private handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.inputElement!.focus();
  };

  private handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onChange, value, onEnter } = this.props;
    const { tempValue } = this.state;
    if (event.key === 'Enter') {
      if (onChange) {
        const newValue = this.getNewValue();
        onChange(value.concat(newValue));
        this.setState({ tempValue: '' });
      }
      if (onEnter) {
        onEnter(value);
      }
    }
    if (event.key === 'Backspace' && tempValue === '') {
      this.handleTagRemove(value.length - 1);
    }
  };

  private handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ focused: true });
  };

  private handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { addOnBlur, onChange, value } = this.props;
    if (addOnBlur) {
      const newValue = this.getNewValue();
      if (onChange) {
        onChange(value.concat(newValue));
      }
    }

    this.setState({
      focused: false,
      tempValue: addOnBlur ? '' : this.state.tempValue,
    });
  };

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tempValue: event.target.value });
  };

  private handleTagRemove = (index: number) => {
    const { value, onChange, onRemove } = this.props;
    const nextValue = value.slice(0);
    nextValue.splice(index, 1);
    if (onChange) {
      onChange(nextValue);
    }
    if (onRemove) {
      onRemove(this.props.value);
    }
  };

  public render() {
    const {
      className,
      style,
      inputStyle,
      allowMessage,
      warnMessage,
      errorMessage,
      value,
      inputProps,
      disabled,
    } = this.props;
    const { focused, tempValue } = this.state;

    return (
      <>
        <TagInputContainer
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''} ${
            focused ? ' focused' : ''
          }`}
          style={style}
          onClick={this.handleContainerClick}
        >
          <InnerTags value={value} onRemove={this.handleTagRemove} disabled={disabled} />
          <StyledInput
            type="text"
            style={inputStyle}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            onKeyDown={this.handleInputKeyDown}
            onFocus={this.handleInputFocus}
            value={tempValue}
            ref={this.inputRefHandler}
            disabled={disabled}
            {...inputProps}
          />
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
}

const TagInputContainer = styled.div`
  box-sizing: border-box;
  padding: 8px 8px 3px;
  border: solid 1px ${gray300};
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  flex-shrink: 1;
  &.error {
    border: solid 1px ${redError};
  }
  &.warn {
    border: solid 1px ${orange500};
  }
  &.focused {
    outline: none;
    border-color: ${gray800};
  }
  .inner-tags__tag {
    margin-bottom: 5px;
    &:last-child {
      margin-right: 0 !important;
    }
  }
`;

const StyledInput = styled.input`
  ${body2};
  color: ${gray800};
  flex: 1 1 auto;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
`;
