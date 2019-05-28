import { ThemeConfig } from '../Theme';

export type TabType = 'default' | 'red' | 'orange';

export interface TabStyleProps {
  theme: ThemeConfig;
  type: TabType;
}
