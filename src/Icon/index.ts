import * as LegacyIcon from './export-legacy.generated';

export * from './export.generated';
export * from './types';

/**
 * 트리 쉐이킹(Tree Shaking) 문제로 아이콘 사용 방법을 변경합니다.
 * 기존 방식은 호환성을 위해 남겨두었습니다.
 *
 * @author Naki(nbsp1221)
 * @deprecated 이 방식은 더 이상 사용되지 않습니다. 새로운 방식의 아이콘을 사용해 주세요.
 * @example
 *   // Before
 *   import { Icon } from '@class101/ui';
 *   const IconComponent = () => <Icon.Add />;
 *
 *   // After
 *   import { AddIcon } from '@class101/ui';
 *   const IconComponent = () => <AddIcon />;
 *
 */
export const Icon = LegacyIcon;
