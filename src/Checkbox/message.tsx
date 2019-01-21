import React from 'react';
import styled from 'styled-components';
import { Alert } from '../Icon';

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

const DescriptionIcon = styled(Alert)`
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
        {descriptionIconFillColor !== undefined ? <DescriptionIcon size={16} fillColor={descriptionIconFillColor} /> : null}
        <span>{message}</span>
      </MessageText>
    )
  }
}