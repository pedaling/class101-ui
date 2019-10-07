import React, { forwardRef, HTMLAttributes, PureComponent, Ref } from 'react';
import styled from 'styled-components';

import { Intent, IntentValue } from '../../core/common';
import { body2 } from '../../core/TextStyles';
import { FormInputBaseStyle } from '../common';

export interface TextareaProps {
  /** 옆으로 쌓이게 할 것인지 여부 */
  inline?: boolean;

  intent: IntentValue;

  /** input의 className */
  forwardedRef?: Ref<HTMLTextAreaElement>;
  className?: string;
  inputAttributes?: React.HTMLAttributes<HTMLTextAreaElement>;
}

class TextareaComponent extends PureComponent<TextareaProps> {
  public static defaultProps: Partial<TextareaProps> = {
    intent: Intent.DEFAULT,
  };

  public render() {
    const { forwardedRef, inputAttributes, ...restProps } = this.props;

    return <StyledTextarea {...inputAttributes} {...restProps} ref={forwardedRef} />;
  }
}

export const Textarea = forwardRef((props: Omit<TextareaProps, 'forwardedRef'>, ref: Ref<HTMLTextAreaElement>) => {
  return <TextareaComponent {...props} forwardedRef={ref} />;
});

const StyledTextarea = styled.textarea<TextareaProps>`
  ${FormInputBaseStyle}
  ${body2};
  width: 100%;
  height: 108px;
  padding: 12px 16px;
  box-sizing: border-box;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
