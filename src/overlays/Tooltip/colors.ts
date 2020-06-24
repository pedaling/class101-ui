import { gray100, gray900, orange100, orange600, red400 } from '../../core/Colors';

export enum TooltipColor {
  ORANGE,
  HOTPINK,
  DEFAULT,
}

export const tooltipBackgroundColors = {
  [TooltipColor.ORANGE]: orange600,
  [TooltipColor.HOTPINK]: red400,
  [TooltipColor.DEFAULT]: gray900,
};

export const tooltipColors = {
  [TooltipColor.DEFAULT]: gray100,
  [TooltipColor.HOTPINK]: gray100,
  [TooltipColor.ORANGE]: orange100,
};
