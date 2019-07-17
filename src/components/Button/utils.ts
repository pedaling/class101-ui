import { gray800, orange600, red600, white } from '../../Colors';
import { ThemeConfig, ThemeMode } from '../../Theme';
import { ButtonVariant, ExcludeDefaultVariant } from './interface';

const buttonPointColorByExcludeDefaultVariant: { [key in ExcludeDefaultVariant]: string } = {
  [ButtonVariant.ORANGE]: white,
  [ButtonVariant.ORANGE_LIGHT]: orange600,
  [ButtonVariant.RED]: white,
  [ButtonVariant.RED_LIGHT]: red600,
};
const buttonDefaultPointColorByTheme: { [key in ThemeMode]: string } = {
  [ThemeMode.LIGHT]: gray800,
  [ThemeMode.DARK]: white,
};

export const getPointColors = (props: { variant: ButtonVariant; theme: ThemeConfig }) =>
  props.variant === ButtonVariant.DEFAULT
    ? buttonDefaultPointColorByTheme[props.theme.mode as ThemeMode]
    : buttonPointColorByExcludeDefaultVariant[props.variant];
