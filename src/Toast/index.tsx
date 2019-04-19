import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { ElevationValue } from '../ElevationStyles';
import { PortalContext } from '../UIContextProvider';

interface Props {
  backgroundColor: string;
  color: string;
  elevation?: ElevationValue;
  icon?: ReactNode;
  button?: ReactNode;
  text: string;
  timeout?: number;
  hPosition?: 'left' | 'middle' | 'right';
  vPosition?: 'top' | 'center' | 'bottom';
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onclose?: () => void;
}

export default class Toast extends React.Component<Props> {
  static contextType = PortalContext; // TODO: 룰 끄고 왜 껐는지 써두기
  public context!: React.ContextType<typeof PortalContext>;

  constructor(props: Props) {
    super(props);
  }

  public render() {
    console.log(this.context);
    const { portalRoot } = this.context;
    console.log(portalRoot);
    console.log('render toast');

    // if (!portalRef || !portalRef.current) {
    //   throw Error('class101-ui: No Portal Root!');
    // }
    return ReactDOM.createPortal(<div>hello Portal</div>, portalRoot);
  }
}

const Container = styled.div<Props>`
  width: 312px;
  height: 48px;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;
