import React, { forwardRef, HTMLAttributes, memo, PureComponent, Ref } from 'react';
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

export const Textarea = memo(
  forwardRef(
    ({ intent = Intent.DEFAULT, inputAttributes, ...restProps }: TextareaProps, ref: Ref<HTMLTextAreaElement>) => {
      return <StyledTextarea intent={intent} {...inputAttributes} {...restProps} ref={ref} />;
    }
  )
);

const StyledTextarea = styled.textarea<TextareaProps>`
  ${FormInputBaseStyle}
  ${body2};
  height: 108px;
  padding: 12px 16px;
  box-sizing: border-box;
  ${props => (props.inline ? 'display: inline-block' : `display: block; width: 100%;`)};
`;
