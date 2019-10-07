import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { IntentValue } from '../../core';
import { gray500, gray800 } from '../../core/Colors';
import { body2, caption2 } from '../../core/TextStyles';
import { InlineError } from '../../formInputs';
import { HTMLDivProps } from '../../interfaces/props';

export interface FormGroupProps {
  label: string;
  labelColor?: string;
  isHorizontal?: boolean;
  htmlLabelFor?: string;
  message?: React.ReactNode;
  helperText?: string;
  intent?: IntentValue;
  divAttributes?: HTMLDivProps;
}

enum HelperTextContainerDirection {
  ROW,
  ROW_REVERSE,
}

export class FormGroup extends PureComponent<FormGroupProps> {
  public static defaultProps: Partial<FormGroupProps> = {
    labelColor: gray800,
  };

  public render() {
    const {
      label,
      labelColor,
      htmlLabelFor,
      isHorizontal,
      children,
      divAttributes,
      intent,
      message,
      helperText,
      ...restProps
    } = this.props;

    const hasHelperText = !!(message || helperText);

    return (
      <Container isHorizontal={isHorizontal} {...divAttributes} {...restProps}>
        <Label color={labelColor} htmlFor={htmlLabelFor} shouldAlignLabel={isHorizontal && hasHelperText}>
          {label || ''}
        </Label>
        <Content isHorizontal={isHorizontal}>
          {children}
          {hasHelperText && (
            <HelperTextContainer
              direction={message ? HelperTextContainerDirection.ROW : HelperTextContainerDirection.ROW_REVERSE}
            >
              {message && <InlineError intent={intent}>{message}</InlineError>}
              {helperText && <HelperText color={gray500}>{helperText}</HelperText>}
            </HelperTextContainer>
          )}
        </Content>
      </Container>
    );
  }
}

const Label = styled.label<{ shouldAlignLabel?: boolean }>`
  ${body2};
  flex: none;
  margin: 0 0 4px;
  ${props => props.shouldAlignLabel && 'margin-top: -20px;'}
`;

const Container = styled.div<{ isHorizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px;

  ${props =>
    props.isHorizontal &&
    css`
      flex-direction: row;
      align-items: center;

      ${Label} {
        margin-bottom: 0;
      }
    `};
`;

const Content = styled.div<{ isHorizontal?: boolean }>`
  flex-grow: 1;
  ${props => props.isHorizontal && `margin-left: 16px;`};
`;

const HelperTextContainer = styled.div<{ direction?: HelperTextContainerDirection }>`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => (props.direction === HelperTextContainerDirection.ROW_REVERSE ? `flex-direction: row-reverse` : '')};
`;

const HelperText = styled.div`
  ${caption2};
`;
