import Position from 'core/Position';
import { PopperChildrenProps } from 'react-popper';

type PopperPlacement = PopperChildrenProps['placement'];

function adjustPositionWithTooltip(position: Position): PopperPlacement {
  return position.split('-')[0] as PopperPlacement;
}

export default adjustPositionWithTooltip;
