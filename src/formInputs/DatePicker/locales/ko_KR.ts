import { DatePickerLocale } from '../interface';

const monthEnd = '월';

const ko: DatePickerLocale = {
  name: 'ko',
  monthTextArray: Array.from({ length: 12 }, (_, i) => `${i + 1}${monthEnd}`),
  weekTextArray: ['일', '월', '화', '수', '목', '금', '토'],
  weekText: '요일',
  timeText: '시간',
  startTimeText: '시작일 시간',
  endTimeText: '종료일 시간',
};

export default ko;
