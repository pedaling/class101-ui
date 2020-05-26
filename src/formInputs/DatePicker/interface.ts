export interface DatePickerLocale {
  name: string;
  weekTextArray: string[];
  weekText?: string;
  monthTextArray: string[];
  timeText: string;
  startTimeText: string;
  endTimeText: string;
}

export type DatePickerSelectorType = 'month' | 'day';
