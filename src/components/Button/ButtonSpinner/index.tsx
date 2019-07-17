import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { white } from '../../../Colors';
import Spinner from '../../../Spinner';
import { ThemeMode } from '../../../Theme';
import { ButtonContentProps, ButtonSize, ButtonVariant, ExcludeDefaultVariant } from '../interface';
import { getPointColors } from '../utils';

const WHITE_OPACITY_COLOR = 'rgba(255, 255, 255, 0.5)';

const spinnerDefaultColorByTheme: { [key in ThemeMode]: string } = {
  [ThemeMode.LIGHT]: white,
  [ThemeMode.DARK]: WHITE_OPACITY_COLOR,
};

const spinnerColorByButtonVariant: { [key in ExcludeDefaultVariant]: string } = {
  [ButtonVariant.ORANGE]: WHITE_OPACITY_COLOR,
  [ButtonVariant.ORANGE_LIGHT]: white,
  [ButtonVariant.RED]: WHITE_OPACITY_COLOR,
  [ButtonVariant.RED_LIGHT]: white,
};

const getSpinnerColor = (props: ButtonContentProps) =>
  props.variant === ButtonVariant.DEFAULT
    ? spinnerDefaultColorByTheme[props.theme.mode as ThemeMode]
    : spinnerColorByButtonVariant[props.variant];

const spinnerStyleByButtonSize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    span,
    span > svg {
      width: 24px;
      height: 24px;
    }
  `,
  [ButtonSize.MEDIUM]: css`
    span,
    span > svg {
      width: 18px;
      height: 18px;
    }
  `,
  [ButtonSize.SMALL]: css`
    span,
    span > svg {
      width: 18px;
      height: 18px;
    }
  `,
  [ButtonSize.XSMALL]: css`
    span,
    span > svg {
      width: 16px;
      height: 16px;
    }
  `,
};

const StyledSpinner = styled(Spinner)<{ buttonSize: ButtonSize }>`
  ${props => spinnerStyleByButtonSize[props.buttonSize]}
`;

export default (props: ButtonContentProps) => {
  const { buttonSize, variant, theme } = props;
  const pointColor = getPointColors({ variant, theme });
  return <StyledSpinner buttonSize={buttonSize} color={getSpinnerColor(props)} backgroundColor={pointColor} />;
};
