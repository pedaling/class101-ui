import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { Spinner } from '../../Spinner';
import { getButtonIconSize, iconMarginByButtonSize } from '../ButtonIcon';
import { ButtonSizeValue } from '../interface';

interface Props {
  isLeftMargin?: boolean;
  buttonSize: ButtonSizeValue;
  color: string;
}
export default (props: Props) => {
  const { buttonSize, color, isLeftMargin = false } = props;
  return (
    <StyledSpinner
      buttonSize={buttonSize}
      color={rgba(color, 0.4)}
      isLeftMargin={isLeftMargin}
      backgroundColor={color}
    />
  );
};

const StyledSpinner = styled(Spinner)<Props>`
  ${props => props.isLeftMargin && `margin-left: ${iconMarginByButtonSize[props.buttonSize]}px;`}

  span,
  span > svg {
    ${props => getButtonIconSize(props.buttonSize)};
  }
`;
