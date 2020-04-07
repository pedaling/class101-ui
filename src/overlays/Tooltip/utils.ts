import { PopperChildrenProps } from 'react-popper';

import { Position } from '../../core';

export function adjustPositionWithTooltip(position: Position) {
  return position.split('-')[0] as PopperChildrenProps['placement'];
}
