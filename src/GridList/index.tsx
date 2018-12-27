import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../BreakPoints';

const sizeToPercent = (column?: number) => 100 / (column || 1);
type Column = 1 | 2 | 3 | 4 | 6 | 12;
interface Props {
  items: any[];
  renderItem: any;
  smColumn: Column;
  lgColumn?: Column;
}

const GridList = styled.div``;

const GridListUl = styled.ul<{ smColumn?: Column }>`
  overflow: hidden;
  display: block;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  margin-right: -12px;
  margin-left: -12px;
  margin-bottom: -24px;

  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
    ${props =>
      props.smColumn === 2 &&
      css`
        margin-right: -8px;
        margin-left: -8px;
      `}%;
  `};

  &::before,
  &::after {
    content: '';
    display: table;
  }

  &::after {
    clear: both;
  }
`;
const GridListItem = styled.li<{ lgColumn?: Column; smColumn?: Column }>`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  margin-bottom: 24px;
  float: left;
  box-sizing: border-box;
  width: ${props => sizeToPercent(props.smColumn)}%;

  ${media.sm`
    padding-right: 4px;
    padding-left: 4px;
    ${props =>
      props.smColumn === 2 &&
      css`
        padding-right: 8px;
        padding-left: 8px;
      `}%;
    ${props =>
      css`
        &:nth-child(${props.smColumn}n + 1) {
          clear: left;
        }
      `}
    ${props =>
      props.smColumn === 1 &&
      css`
        .sale-wish-icon {
          > svg {
            width: 32px;
            height: 32px;
          }
        }
      `}
  `}

  ${media.lg`
    ${props =>
      props.lgColumn &&
      css<{ lgColumn?: Column; smColumn?: Column }>`
        width: ${props => sizeToPercent(props.lgColumn)}%;
      `}
    ${props =>
      props.lgColumn &&
      css`
        &:nth-child(${props.lgColumn}n + 1) {
          clear: left;
        }
      `}
  `}
`;

export default ({ items, renderItem, smColumn, lgColumn, ...restProps }: Props) => (
  <GridList {...restProps}>
    <GridListUl smColumn={smColumn}>
      {items.map(item => (
        <GridListItem key={item.id} smColumn={smColumn} lgColumn={lgColumn}>
          {renderItem(item)}
        </GridListItem>
      ))}
    </GridListUl>
  </GridList>
);
