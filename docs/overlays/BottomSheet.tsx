// @flow
import React from 'react';
import { BottomSheet } from '@class101/ui';

interface Props {
  /** 제목 */
  title: string;

  /** 알림 개수 */
  badgeCount?: number;

  /**  안에 들어갈 내용  */
  renderContent: () => HTMLElement;

  /** 상단에 고정될 내용 */
  renderFixedContent: () => HTMLElement;

  /** 창 전체에 Fixed 여부(Docs에선 사용 불가) */
  fullScreen?: boolean;

  /** CSS z-index 속성의 값 */
  zIndex?: number;

  /** 열렸을 때 CSS z-index 속성의 값 */
  openedZIndex?: number;
}

const style = {
  position: 'relative',
  width: '100%',
  height: 200,
  overflow: 'hidden',
  paddingLeft: 2,
  paddingRight: 2,
};

export const Component = ({ fullScreen = true, zIndex = 2001, ...restProps }: Props) => (
  <div style={style}>
    <BottomSheet zIndex={zIndex} fullScreen={fullScreen && false} {...restProps} />
  </div>
);
