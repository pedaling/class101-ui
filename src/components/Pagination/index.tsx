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

    const indexList = range(0, totalPageIndex + 1);

    return (
      <PageWrapper>
        <PageIconBtn icon={<ChevronLeft />} onClick={handleDecrease} disabled={currentPageIndex <= 0} />
        {indexList.map((_, i) => (
          <PageBtn
            color={i === currentPageIndex ? ButtonColor.ORANGE : ButtonColor.WHITE}
            size="sm"
            onClick={this.handleChange(i)}
            key={`pagination-${i}`}
          >
            {i + 1}
          </PageBtn>
        ))}
        <PageIconBtn icon={<ChevronRight />} onClick={handleIncrease} disabled={currentPageIndex >= totalPageIndex} />
      </PageWrapper>
    );
  }

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
