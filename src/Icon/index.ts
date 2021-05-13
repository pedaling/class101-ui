import * as Icon from './export-legacy.generated';

export * from './export.generated';
export * from './types';

/**
 * MEMO(Naki, @nbsp1221): 기존 코드와의 호환성을 위해 레거시 버전을 고려함
 * @deprecated 트리 쉐이킹 문제로 사용하시면 안됩니다.
 */
export { Icon };
