import { gray000, orange000, red000 } from '../../core/Colors';
import { CalloutStatus } from './interface';

export const backgroundColorByStatus = {
  [CalloutStatus.DEFAULT]: gray000,
  [CalloutStatus.SUGGEST]: gray000,
  [CalloutStatus.WARNING]: orange000,
  [CalloutStatus.DANGER]: red000,
};
