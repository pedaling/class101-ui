import React from 'react';
import styled, { css } from 'styled-components';

import { ChevronLeftIcon, ChevronRightIcon } from '../../Icon';
import { Button, ButtonColor, IconButton } from '../Button';

export type PaginationProps = {
  totalPageIndex: number;
  currentPageIndex: number;
  pageCountPerView?: number;
  className?: string;
  'data-element-name'?: string;
  onChange?: (pageIndex: number) => void;
};

export const Pagination = React.memo<PaginationProps>(
  ({
    totalPageIndex,
    currentPageIndex,
    pageCountPerView,
    onChange,
    className,
    'data-element-name': dataElementName,
  }) => {
    const getValidatedPageCountPerView = (pageCountPerViewtoCalculate?: number) => {
      const DEFAULT_PAGE_COUNT_PER_VIEW = 5;
      if (!pageCountPerViewtoCalculate) {
        return DEFAULT_PAGE_COUNT_PER_VIEW;
      }

      return pageCountPerViewtoCalculate % 2 === 0 ? pageCountPerViewtoCalculate - 1 : pageCountPerViewtoCalculate;
    };
    const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => i + start);
    const getIndexListToDisplay = (
      currentPageIndextoCalculate: number,
      totalPageIndextoCalculate: number,
      pageCountPerViewtoCalculate: number,
    ) => {
      const sidePageCountToView = Math.floor(pageCountPerViewtoCalculate / 2);

      if (totalPageIndextoCalculate < pageCountPerViewtoCalculate) {
        return range(0, totalPageIndextoCalculate + 1);
      }

      if (currentPageIndextoCalculate <= sidePageCountToView) {
        return range(0, pageCountPerViewtoCalculate);
      }

      if (currentPageIndextoCalculate + sidePageCountToView >= totalPageIndextoCalculate) {
        return range(totalPageIndextoCalculate - pageCountPerViewtoCalculate + 1, totalPageIndextoCalculate + 1);
      }

      return range(
        currentPageIndextoCalculate - sidePageCountToView,
        currentPageIndextoCalculate + sidePageCountToView + 1,
      );
    };

    const handleChange = (pageIndex: number) => () => {
      if (onChange) {
        onChange(pageIndex);
      }
    };

    const handleIncrease = handleChange(currentPageIndex + 1);
    const handleDecrease = handleChange(currentPageIndex - 1);

    const newPageCountPerView = getValidatedPageCountPerView(pageCountPerView);
    const indexListToDisplay = getIndexListToDisplay(currentPageIndex, totalPageIndex, newPageCountPerView);

    return (
      <PageWrapper className={className} data-element-name={dataElementName}>
        <PageIconButton icon={<ChevronLeftIcon />} onClick={handleDecrease} disabled={currentPageIndex <= 0} />
        {indexListToDisplay.map((index) => (
          <PageButton
            color={index === currentPageIndex ? ButtonColor.ORANGE : ButtonColor.WHITE}
            size="sm"
            onClick={handleChange(index)}
            key={`pagination-${index}`}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageIconButton
          icon={<ChevronRightIcon />}
          onClick={handleIncrease}
          disabled={currentPageIndex >= totalPageIndex}
        />
      </PageWrapper>
    );
  },
);

const PageWrapper = styled.div``;

const PageBtnCommonStyle = css`
  margin: 5px;
`;

const PageButton = styled(Button)`
  ${PageBtnCommonStyle};
`;

const PageIconButton = styled(IconButton)`
  ${PageBtnCommonStyle};
`;
