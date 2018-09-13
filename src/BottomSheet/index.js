import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { white } from '../Colors';
import { body1BlackBold, tiny1WhiteBold } from '../TextStyles';

type Props = {
  title: string,
  badgeCount?: number,
  renderContent: () => HTMLElement,
  renderFixedContent: () => HTMLElement,
  fullScreen?: boolean,
  zIndex?: number,
  openedZIndex?: number,
};

const BORDER_SIZE = 1;

const Container = styled.div`
  z-index: ${props => (props.isOpened ? props.openedZIndex : props.zIndex) || 2001};
  position: ${props => (props.fullScreen ? 'fixed' : 'relative')};
  width: ${props => (props.fullScreen ? '100vw' : '100%')};
  height: ${props => (props.fullScreen ? '90vh' : '100%')};
  bottom: calc(48px - 100%);
  left: 0;
  overflow: ${props => (props.fullScreen ? 'visible' : 'hidden')};
  -ms-transition: transform 0.8s;
  transition: transform 0.8s;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${white};
  box-shadow: 0 -1px 3px -1px rgba(41, 42, 43, 0.16), 0 0 1px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  zoom: 1;
  ${props => (props.isOpened ? css`
    transform: translateY(calc(48px - 100% + ${BORDER_SIZE}px));
  ` : css`
    transform: translateY(${props => (props.fullScreen ? `calc(-10% - ${BORDER_SIZE + 1}px)` : 0)});
  `)}
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Chevron = styled.img.attrs({ src: 'https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-chevron-gray.png', alt: '>' })`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 24px;
  -ms-transition: transform 0.8s;
  transition: transform 0.8s;
  -ms-transform: rotate(${props => props.rotate || 270}deg);
  -webkit-transform: rotate(${props => props.rotate || 270}deg);
  transform: rotate(${props => props.rotate || 270}deg);
`;

const Title = styled.span`
  ${body1BlackBold};
`;

const BadgeCounter = styled.div`
  ${tiny1WhiteBold};
  height: 20px;
  width: 20px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background-color: #e62c60;
  padding: 0 6px;
`;

const Content = styled.div`
  margin-top: ${props => props.marginTop || 0}px;
  width: 100%;
  height: calc(${props => (props.fullScreen ? 90 : 100)}% - ${props => props.marginTop || 0}px - ${BORDER_SIZE + 3}px);
  overflow: auto;
  padding: 0 24px;
`;

const FixedContent = styled.div`
  padding: ${BORDER_SIZE}px 24px 10px;
`;

const InnerHeader = styled.div`
  padding: 10px 24px;
  cursor: pointer;

  div, span {
    vertical-align: middle;
  }
`;

const BadgeCounterContainer = styled.div`
  display: inline-block;
  margin-left: 4px;
`;

const BackgroundWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: visible;
  z-index: ${props => (props.zIndex - 1) || 2000};
`;

export default class BottomSheet extends Component<Props> {
  state = {
    isOpened: false,
  };

  headerElement: ?HTMLDivElement;
  headerElement = null;

  onChangeToggle = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  }

  preventDefault = (e) => {
    e.preventDefault();
  }

  render() {
    const {
      title,
      renderFixedContent,
      badgeCount,
      renderContent,
      fullScreen = true,
      zIndex,
      openedZIndex,
      ...restProps
    } = this.props;

    const isOpened = this.props.isOpened || this.state.isOpened;

    const element = (
      <Container isOpened={ isOpened } fullScreen={ fullScreen } zIndex={ zIndex } openedZIndex={ openedZIndex } { ...restProps }>
        {
          this.headerElement && renderContent &&
          <Content fullScreen={ fullScreen } marginTop={ this.headerElement.clientHeight }>
            { renderContent() }
          </Content>
        }
        <Header innerRef={ (ref) => { this.headerElement = ref; } }>
          <InnerHeader
            onMouseDown={ this.onChangeToggle }
            onTouchStart={ this.onChangeToggle }
            onTouchEnd={ this.preventDefault }
          >
            <Title>{ title || '' }</Title>
            {
              badgeCount &&
              <BadgeCounterContainer>
                <BadgeCounter>{ badgeCount }</BadgeCounter>
              </BadgeCounterContainer>
            }
            <Chevron rotate={ isOpened ? 90 : 270 } />
          </InnerHeader>
          {
            renderFixedContent &&
            <FixedContent>
              { renderFixedContent() }
            </FixedContent>
          }
        </Header>
      </Container>
    );

    if (fullScreen) {
      return (
        <div>
          {
            isOpened &&
            <BackgroundWindow zIndex={ openedZIndex || zIndex } onClick={ this.onChangeToggle } />
          }
          { element }
        </div>
      );
    }

    return element;
  }
}
