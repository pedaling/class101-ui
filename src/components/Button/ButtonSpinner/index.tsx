import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

import Spinner from '../../../Spinner';
import { ButtonSizeValue } from '../interface';
import { getButtonIconSize, iconMarginByButtonSize } from '../utils';

interface Props {
  buttonSize: ButtonSizeValue;
  color: string;
}
export default (props: Props) => {
  const { buttonSize, color } = props;
  return <StyledSpinner buttonSize={buttonSize} color={rgba(color, 0.4)} backgroundColor={color} />;
};

const StyledSpinner = styled(Spinner)<{ buttonSize: ButtonSizeValue }>`
  margin-left: ${props => iconMarginByButtonSize[props.buttonSize]}px;
  span,
  span > svg {
    ${props => getButtonIconSize(props.buttonSize)};
  }
`;
