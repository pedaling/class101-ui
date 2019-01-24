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

interface Props {
  color: string;
  descriptionIconFillColor?: string;
  message: string;
}

const alertStyle = { marginRight: `2px` };


export default class Message extends React.PureComponent<Props> {
  public render() {
    const { color, message, descriptionIconFillColor } = this.props
    return (
      <MessageText color={color}>
        {descriptionIconFillColor !== undefined ? 
        <span style={alertStyle}><Alert size={16} fillColor={descriptionIconFillColor} /></span> : null}
        <span>{message}</span>
      </MessageText>
    )
  }
}