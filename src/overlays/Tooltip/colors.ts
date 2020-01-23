import { gray100, gray900, orange100, orange600 } from '../../core/Colors';

export enum TooltipColor {
  ORANGE,
  DEFAULT,
}

export const tooltipBackgroundColors = {
  [TooltipColor.ORANGE]: orange600,
  [TooltipColor.DEFAULT]: gray900,
};

export const tooltipColors = {
  [TooltipColor.DEFAULT]: gray100,
  [TooltipColor.ORANGE]: orange100,
};
