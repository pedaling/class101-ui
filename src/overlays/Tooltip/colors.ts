import {
  orange600, gray900, gray100, orange100,
} from 'core/Colors';

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
