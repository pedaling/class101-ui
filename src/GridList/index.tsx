import React from 'react';
import styled from 'styled-components';

import { media } from '../BreakPoints';
import { HTMLDivProps } from '../interfaces/props';

const sizeToPercent = (column?: number) => 100 / (column || 1);
type Column = 1 | 2 | 3 | 4 | 6 | 12;
interface Props {
  items: any[];
  renderItem: any;
  smColumn: Column;
  lgColumn?: Column;
}

const List = styled.div``;

const GridListUl = styled.ul<{ smColumn?: Column }>`
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: -12px;
  margin-left: -12px;
  margin-bottom: -24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;

  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
    ${props =>
      props.smColumn === 2 &&
      `
        margin-right: -8px;
        margin-left: -8px;
      `}%;
  `};
`;

const GridListItem = styled.li<{ lgColumn?: Column; smColumn?: Column }>`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  margin-bottom: 24px;
  box-sizing: border-box;
  width: ${props => sizeToPercent(props.smColumn)}%;

  ${media.sm`
    padding-right: 4px;
    padding-left: 4px;
    ${props =>
      props.smColumn === 2 &&
      `
        padding-right: 8px;
        padding-left: 8px;
      `}%;
    ${props =>
      props.smColumn === 1 &&
      `
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
      `
        width: ${sizeToPercent(props.lgColumn)}%;
      `}
  `}
`;

export default class GridList extends React.PureComponent<Props & HTMLDivProps> {
  public render() {
    const { items, renderItem, smColumn, lgColumn, ...restProps } = this.props;

    return (
      <List {...restProps}>
        <GridListUl smColumn={smColumn}>
          {items.map((item, index, arr) => (
            <GridListItem key={item.id} smColumn={smColumn} lgColumn={lgColumn}>
              {renderItem(item, index, arr)}
            </GridListItem>
          ))}
        </GridListUl>
      </List>
    );
  }
}
