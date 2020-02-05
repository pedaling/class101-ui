import { range } from 'lodash';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '../../Icon';
import { Button, ButtonColor, IconButton } from '../Button';

export interface PaginationProps {
  totalPageIndex: number;
  currentPageIndex: number;
  showingNumberedIndexButtonCount?: number;
  onChange?: (pageIndex: number) => void;
}

export class Pagination extends PureComponent<PaginationProps> {
  public render() {
    const { totalPageIndex, currentPageIndex } = this.props;
    const handleIncrease = this.handleChange(currentPageIndex + 1);
    const handleDecrease = this.handleChange(currentPageIndex - 1);

    const showingNumberedIndexButtonCount = this.getValidatedShowingNumberedIndexButtonCount(
      this.props.showingNumberedIndexButtonCount
    );

    const indexList = this.getIndexList(currentPageIndex, totalPageIndex, showingNumberedIndexButtonCount);

    return (
      <PageWrapper>
        <PageIconBtn icon={<ChevronLeft />} onClick={handleDecrease} disabled={currentPageIndex <= 0} />
        {indexList.map(index => (
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

  // currentPageIndex가 중앙에 보여지는 상황 때문에 홀수만 받습니다.
  private getValidatedShowingNumberedIndexButtonCount = (showingNumberedIndexButtonCount: number | undefined) => {
    if (!showingNumberedIndexButtonCount) {
      return 5;
    }

    return showingNumberedIndexButtonCount % 2 === 0
      ? showingNumberedIndexButtonCount - 1
      : showingNumberedIndexButtonCount;
  };

  private getIndexList = (
    currentPageIndex: number,
    totalPageIndex: number,
    showingNumberedIndexButtonCount: number
  ) => {
    /**
     * currentPageIndex가 중앙에서 보여질때 양옆으로 몇개까지 보여주어야 하는지 계산. 보여주어야 할 numbered
     * index가 5개이면 양옆에는 2개씩 9개라면 4개씩
     */
    const aroundCurrentNumberedIndexShowingCount = Math.floor(showingNumberedIndexButtonCount / 2);

    // 보여줄수 있는거 다 보여주기
    if (totalPageIndex < showingNumberedIndexButtonCount) {
      return range(0, totalPageIndex + 1);
    }

    // 맨 앞에서부터 보여 주어야 할 만큼 보여주기
    if (currentPageIndex - aroundCurrentNumberedIndexShowingCount <= 0) {
      return range(0, showingNumberedIndexButtonCount);
    }

    // 맨 뒤에서부터 보여 주어야 할 만큼 보여주기
    if (currentPageIndex + aroundCurrentNumberedIndexShowingCount >= totalPageIndex) {
      return range(totalPageIndex - showingNumberedIndexButtonCount + 1, totalPageIndex + 1);
    }

    // currentPageIndex와 앞뒤 보여 주어야 할 만큼 보여주기
    return range(
      currentPageIndex - aroundCurrentNumberedIndexShowingCount,
      currentPageIndex + aroundCurrentNumberedIndexShowingCount + 1
    );
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
