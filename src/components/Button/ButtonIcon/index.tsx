import styled, { css } from 'styled-components';

import { ButtonSizeValue } from '../interface';
import { getButtonIconSize, iconMarginByButtonSize } from '../utils';

interface ButtonIconProps {
  buttonSize: ButtonSizeValue;
  textColor: string;
  disabledTextColor: string;
}

const iconCommonStyle = css`
  flex: none;
  font-size: 0;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const LeftIcon = styled.div<ButtonIconProps>`
  ${iconCommonStyle};
  ${props => getButtonIconSize(props.buttonSize)};
  margin-right: ${props => iconMarginByButtonSize[props.buttonSize]}px;
  path {
    fill: ${props => props.textColor};
  }

  :disabled > &,
  [disabled] > &,
  [data-ui-disabled] > & {
    path {
      fill: ${props => props.disabledTextColor};
    }
  }
`;

export const RightIcon = styled.div<ButtonIconProps>`
  ${iconCommonStyle};
  ${props => getButtonIconSize(props.buttonSize)};
  margin-left: ${props => iconMarginByButtonSize[props.buttonSize]}px;
  path {
    fill: ${props => props.textColor};
  }

  :disabled > &,
  [disabled] > &,
  [data-ui-disabled] > & {
    path {
      fill: ${props => props.disabledTextColor};
    }
  }
`;
