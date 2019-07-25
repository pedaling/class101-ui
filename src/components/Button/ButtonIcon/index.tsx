import styled, { css } from 'styled-components';

import { ButtonContentProps, ButtonSize } from '../interface';
import { getButtonColors, getButtonIconSize } from '../utils';

const iconCommonStyle = css`
  flex: none;
  font-size: 0;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const iconMarginByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 4,
  [ButtonSize.MEDIUM]: 4,
  [ButtonSize.SMALL]: 4,
  [ButtonSize.XSMALL]: 2,
};

export const LeftIcon = styled.div<ButtonContentProps>`
  ${iconCommonStyle};
  ${props => getButtonIconSize(props.buttonSize)};
  margin-right: ${props => iconMarginByButtonSize[props.buttonSize]}px;
  path {
    fill: ${props => getButtonColors(props.variant, props.theme.mode).textColor};
  }

  :disabled > &,
  [disabled] > &,
  [data-ui-disabled] > & {
    path {
      fill: ${props => getButtonColors(props.variant, props.theme.mode).disabledTextColor};
    }
  }
`;

export const RightIcon = styled.div<ButtonContentProps>`
  ${iconCommonStyle};
  ${props => getButtonIconSize(props.buttonSize)};
  margin-left: ${props => iconMarginByButtonSize[props.buttonSize]}px;
  path {
    fill: ${props => getButtonColors(props.variant, props.theme.mode).textColor};
  }

  :disabled > &,
  [disabled] > &,
  [data-ui-disabled] > & {
    path {
      fill: ${props => getButtonColors(props.variant, props.theme.mode).disabledTextColor};
    }
  }
`;
