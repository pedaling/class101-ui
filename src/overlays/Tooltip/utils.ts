import { Position } from '../../core';
import { PopperChildrenProps } from 'react-popper';

export function adjustPositionWithTooltip(position: Position) {
  return position.split('-')[0] as PopperChildrenProps['placement'];
}
