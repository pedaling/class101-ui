// @flow
import React from 'react';
import { GridList } from '@class101/ui';

interface Props {
  /** 기본 단위 - px */
  items: Array<any>;
  renderItem: any;
  smColumn: 1 | 2 | 3 | 4;
  lgColumn?: 1 | 2 | 3 | 4 | 6 | 12;
}

export const Component = ({ items = [], renderItem, smColumn, lgColumn, ...restProps }: Props) => (
  <GridList items={items} renderItem={renderItem} smColumn={smColumn} lgColumn={lgColumn} {...restProps} />
);
