import { DatePickerLocale } from '../interface';
import lodash from 'lodash';

const monthEnd = '월';

const ko_KR: DatePickerLocale = {
  name: 'ko',
  monthTextArray: lodash.map(Array(12), (_, index) => index + 1 + monthEnd),
  weekTextArray: ['일', '월', '화', '수', '목', '금', '토'],
  weekText: '요일',
};

export default ko_KR;
