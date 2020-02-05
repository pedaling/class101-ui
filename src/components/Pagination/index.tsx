import { range } from 'lodash';
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '../../Icon';
import { Button, ButtonColor, IconButton } from '../Button';

export interface PaginationProps {
  totalPageIndex: number;
  currentPageIndex: number;
  onChange?: (pageIndex: number) => void;
}

export class Pagination extends PureComponent<PaginationProps> {
  public render() {
    const { totalPageIndex, currentPageIndex } = this.props;
    const handleIncrease = this.handleChange(currentPageIndex + 1);
    const handleDecrease = this.handleChange(currentPageIndex - 1);

    const indexList = this.getIndexList(currentPageIndex, totalPageIndex);

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

  private getIndexList = (currentPageIndex: number, totalPageIndex: number) => {
    // 보여줄수 있는거 다 보여주기
    if (totalPageIndex < 5) {
      return range(0, totalPageIndex + 1);
    }

    // 맨 앞에서부터 5개 보여주기
    if (currentPageIndex - 2 <= 0) {
      return range(0, 5);
    }

    // 맨 뒤에서부터 5개 보여주기
    if (currentPageIndex + 2 >= totalPageIndex) {
      return range(totalPageIndex - 4, totalPageIndex + 1);
    }

    // currentPageIndex와 앞뒤 2개씩 보여주기
    return range(currentPageIndex - 2, currentPageIndex + 3);
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
