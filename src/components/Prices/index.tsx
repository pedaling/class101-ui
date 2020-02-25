import React from 'react';
import styled from 'styled-components';

import { Colors, TextStyles } from '../../core';

export const DiscountPecent = styled.span`
  ${TextStyles.caption1};
  color: ${Colors.red600};
  font-weight: 600;
`;

export const OriginalPrice = styled.span`
  ${TextStyles.caption1};
  color: ${Colors.gray600};
  text-decoration: line-through;
`;

export const InstallmentText = styled.span`
  ${TextStyles.caption1};
  color: ${Colors.gray900};
`;

export const SellingPrice = styled.strong`
  ${TextStyles.body2};
  color: ${Colors.gray900};
  font-weight: 800;
`;
