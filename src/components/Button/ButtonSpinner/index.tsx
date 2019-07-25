import React from 'react';
import styled from 'styled-components';

import { white } from '../../../Colors';
import Spinner from '../../../Spinner';
import { ThemeMode } from '../../../Theme';
import { ButtonContentProps, ButtonSizeValue, ButtonVariant, ExcludeDefaultVariant } from '../interface';
import { getButtonColors, getButtonIconSize } from '../utils';

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
    : spinnerColorByButtonVariant[props.variant as ExcludeDefaultVariant];

export default (props: ButtonContentProps) => {
  const { buttonSize, variant, theme } = props;
  const pointColor = getButtonColors(variant, theme.mode);
  return (
    <StyledSpinner buttonSize={buttonSize} color={getSpinnerColor(props)} backgroundColor={pointColor.textColor} />
  );
};

const StyledSpinner = styled(Spinner)<{ buttonSize: ButtonSizeValue }>`
  span,
  span > svg {
    ${props => getButtonIconSize(props.buttonSize)};
  }
`;
