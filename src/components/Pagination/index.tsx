import { range } from 'lodash';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '../../Icon';
import { Button, ButtonColor, IconButton } from '../Button';

const DEFAULT_PAGE_COUNT_PER_VIEW = 5;
export interface PaginationProps {
  totalPageIndex: number;
  currentPageIndex: number;
  pageCountPerView?: number;
  onChange?: (pageIndex: number) => void;
}

export class Pagination extends PureComponent<PaginationProps> {
  public render() {
    const { totalPageIndex, currentPageIndex } = this.props;
    const handleIncrease = this.handleChange(currentPageIndex + 1);
    const handleDecrease = this.handleChange(currentPageIndex - 1);

    const pageCountPerView = this.getValidatedPageCountPerView(this.props.pageCountPerView);
    const indexListToDisplay = this.getIndexListToDisplay(currentPageIndex, totalPageIndex, pageCountPerView);

    return (
      <PageWrapper>
        <PageIconBtn icon={<ChevronLeft />} onClick={handleDecrease} disabled={currentPageIndex <= 0} />
        {indexListToDisplay.map(index => (
          <PageBtn
            color={index === currentPageIndex ? ButtonColor.ORANGE : ButtonColor.WHITE}
            size="sm"
            onClick={this.handleChange(index)}
            key={`pagination-${index}`}
          >
            {index + 1}
          </PageBtn>
        ))}
        <PageIconBtn icon={<ChevronRight />} onClick={handleIncrease} disabled={currentPageIndex >= totalPageIndex} />
      </PageWrapper>
    );
  }

  private getValidatedPageCountPerView = (pageCountPerView: number | undefined) => {
    if (!pageCountPerView) {
      return DEFAULT_PAGE_COUNT_PER_VIEW;
    }

    return pageCountPerView % 2 === 0 ? pageCountPerView - 1 : pageCountPerView;
  };

  private getIndexListToDisplay = (currentPageIndex: number, totalPageIndex: number, pageCountPerView: number) => {
    const sidePageCountToView = Math.floor(pageCountPerView / 2);

    if (totalPageIndex < pageCountPerView) {
      return range(0, totalPageIndex + 1);
    }

    if (currentPageIndex <= sidePageCountToView) {
      return range(0, pageCountPerView);
    }

    if (currentPageIndex + sidePageCountToView >= totalPageIndex) {
      return range(totalPageIndex - pageCountPerView + 1, totalPageIndex + 1);
    }

    return range(currentPageIndex - sidePageCountToView, currentPageIndex + sidePageCountToView + 1);
  };

  private handleChange = (pageIndex: number) => () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pageIndex);
    }
  };
}

const PageWrapper = styled.div``;

const PageBtnCommonStyle = css`
  margin: 5px;
`;

const PageBtn = styled(Button)`
  ${PageBtnCommonStyle};
`;

const PageIconBtn = styled(IconButton)`
  ${PageBtnCommonStyle};
`;
