// @flow
import React from 'react';
import { BottomSheet } from 'class101-ui';

type Props = {
  /** 제목 */
  title: string,

  /** 알림 개수 */
  badgeCount?: number,

  /**  안에 들어갈 내용  */
  renderContent: () => HTMLElement,

  /** 상단에 고정될 내용 */
  renderFixedContent: () => HTMLElement,
};

const style = {
  position: 'relative',
  width: '100%',
  height: 200,
  overflow: 'hidden',
  paddingLeft: 2,
  paddingRight: 2,
};

const Component = ({
  ...restProps
}: Props) => (
  <div style={ style }>
    <BottomSheet { ...restProps } />
  </div>
);

export default Component;
