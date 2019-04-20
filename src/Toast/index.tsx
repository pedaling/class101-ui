import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ElevationValue } from '../ElevationStyles';
import { Position } from '../Position';
import { ToasterPosition } from '../Toaster';

// type TOP = {Position.TOP | typeof Position.TOP_LEFT | typeof Position.TOP_RIGHT;

// type BOTTOM = typeof Position.BOTTOM | typeof Position.BOTTOM_LEFT | typeof Position.BOTTOM_RIGHT;

export interface Props {
  backgroundColor: string;
  color: string;
  elevation?: ElevationValue;
  icon?: ReactNode;
  button?: ReactNode;
  message: string;
  timeout?: number;
  position?: ToasterPosition;
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onclose?: () => void;
}

export default class Toast extends React.Component<Props> {
  public static defaultProps = {
    position: Position.TOP,
    tiemout: 5000,
  };

  constructor(props: Props) {
    super(props);
    console.log(typeof props.position);
  }

  public componentDidMount() {
    console.log(this.props, 'mounted!');
  }

  public render() {
    console.log(this.props);
    const { message } = this.props;
    return (
      <Container {...this.props}>
        <Message>{message}</Message>
      </Container>
    );
  }
}

const Container = styled.div<Partial<Props>>`
  width: 312px;
  height: 20px;
  border-radius: 3px;
  padding: 14px 16px;
  line-height: 20px;
  background-color: ${props => props.backgroundColor || 'black'};
  color: ${props => props.color || 'white'};
  margin-top: ${props =>
    props.position === Position.TOP || props.position === Position.TOP_LEFT || props.position === Position.TOP_RIGHT
      ? '20px'
      : 0};
`;

const Message = styled.span`
  line-height: 20px;
`;
