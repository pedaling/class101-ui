import React, { PureComponent } from 'react';

interface Props {
  isOpened?: boolean;
  zIndex?: number;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode[];
}

export default class BottomSheet extends PureComponent<Props> {}
