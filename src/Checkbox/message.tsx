import React from 'react';
import styled from 'styled-components';
import { Icon } from '@class101/ui';

interface TextProps {
  color: string;
}

const MessageText = styled.h6<TextProps>`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  font-weight: normal;

  * {
    vertical-align: middle;
  }
  color: ${props => props.color};
`

interface DescProps {
  isDisplayed: boolean;
}

const DescriptionIcon = styled(Icon.Alert)<DescProps>`
  display: ${props => props.isDisplayed ? `block` : `none`};
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

interface Props {
  color: string;
  descriptionIconFillColor?: string;
  message: string;
}

export default class Message extends React.PureComponent<Props> {
  public render() {
    const { color, message, descriptionIconFillColor } = this.props
    return (
      <MessageText color={color}>
        {descriptionIconFillColor !== undefined ? <DescriptionIcon fillColor={descriptionIconFillColor} /> : null}
        <span>{message}</span>
      </MessageText>
    )
  }
}