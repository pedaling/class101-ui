import React from 'react';
import { Button, ButtonColor, IconButton } from '../Button';
import styled, { css } from 'styled-components';

export interface PaginationProps {
  totalPageIndex: number;
  currentPageIndex: number;
  onChange?: (pageIndex: number) => void;
}

const Pagination: React.SFC<PaginationProps> = ({ totalPageIndex, currentPageIndex, onChange }) => {
  const handleChange = (toAddOrSubtract: number) => {
    if (onChange) {
      onChange(currentPageIndex + toAddOrSubtract);
    }
  };

  return (
    <div>
      {/* <PageIconBtn icon={<Previ}/> */}
      <PageBtn color={ButtonColor.ORANGE}>{0 + 1}</PageBtn>
      <PageBtn color={ButtonColor.ORANGE}>{1 + 1}</PageBtn>
      <PageBtn color={ButtonColor.WHITE}>{2 + 1}</PageBtn>
      <PageBtn color={ButtonColor.ORANGE}>{3 + 1}</PageBtn>
    </div>
  );
};

export default Pagination;

const PageMargin = css`
  margin: 5px;
`;

const PageBtn = styled(Button)`
  ${PageMargin};
`;

const PageIconBtn = styled(IconButton)`
  ${PageMargin};
`;
