import { uniq } from 'lodash';
import React, { CSSProperties, InputHTMLAttributes, PureComponent } from 'react';
import styled from 'styled-components';

import { gray800 } from '../../core/Colors';
import { Intent, IntentValue } from '../../core/common';
import { body2 } from '../../core/TextStyles';
import { FormInputBaseStyle } from '../../formInputs/common';
import InnerTags from './InnerTags';

export interface TagInputProps {
  disabled?: boolean;
  value: string[];
  onChange?: (value?: string[]) => void;
  onRemove?: (value?: string[]) => void;
  onEnter?: (value?: string[]) => void;
  addOnBlur?: boolean;
  separator: RegExp | string;
  className?: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  intent: IntentValue;
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
    intent: Intent.DEFAULT,
  };

  public readonly state: State = {
    tempValue: '',
    focused: false,
  };

  private inputElement?: HTMLInputElement;

  public render() {
    const { intent, inputStyle, className, value, disabled, inputAttributes } = this.props;
    const { focused, tempValue } = this.state;

    return (
      <TagInputContainer
        className={className}
        focused={focused}
        disabled={disabled}
        intent={intent}
        onClick={this.handleContainerClick}
      >
        <InnerTags value={value} onRemove={this.handleTagRemove} disabled={disabled} />
        <StyledInput
          type="text"
          style={inputStyle}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onKeyUp={this.handleInputKeyUp}
          onFocus={this.handleInputFocus}
          value={tempValue}
          ref={this.inputRefHandler}
          disabled={disabled}
          {...inputAttributes}
        />
      </TagInputContainer>
    );
  }

  private inputRefHandler = (ref: HTMLInputElement) => {
    this.inputElement = ref;
  };

  private getNextValue = () => {
    const { separator, value } = this.props;
    const { tempValue } = this.state;
    const newValue = tempValue
      ? tempValue
          .split(separator)
          .map(v => v.trim())
          .filter(Boolean)
      : [];

    return uniq([...value, ...newValue]);
  };

  private handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.inputElement!.focus();
  };

  private handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onChange, value, onEnter } = this.props;
    const { tempValue } = this.state;
    if (event.key === 'Enter') {
      if (onChange) {
        onChange(this.getNextValue());
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
    const { addOnBlur, onChange } = this.props;
    if (addOnBlur) {
      if (onChange) {
        onChange(this.getNextValue());
        this.setState({ tempValue: '' });
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
    let nextValue: string[] = [];
    if (index > 0) {
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
}

const TagInputContainer = styled.div<{ disabled?: boolean; focused?: boolean; intent: IntentValue }>`
  ${FormInputBaseStyle};
  box-sizing: border-box;
  padding: 8px 8px 3px;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  align-self: stretch;
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
  color: ${gray800};
  flex: 1 1 auto;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 5px;
  ${props => props.disabled && `cursor: not-allowed`}
  &:focus {
    outline: none;
  }
`;
