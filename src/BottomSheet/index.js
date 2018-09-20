import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { white } from '../Colors';
import { body1BlackBold, subheadingBlackBold } from '../TextStyles';
import Badge from '../Badge';

type Props = {
  title: string,
  badgeCount?: number,
  renderContent: () => HTMLElement,
  renderFixedContent: () => HTMLElement,
  fullScreen?: boolean,
  zIndex?: number,
  openedZIndex?: number,
};

type State = {
  isOpened: boolean,
};

const BORDER_SIZE = 1;

const Title = styled.span`
  ${body1BlackBold};
  transition: font-size 0.4s ease-in-out;
`;

const InnerHeader = styled.div`
  padding: 10px 24px;
  cursor: pointer;
  transition: padding 0.4s ease-in-out;

  div, span {
    vertical-align: middle;
  }
`;

const Chevron = styled.img.attrs({ src: 'https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-chevron-gray.png', alt: '>' })`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  transition: transform 0.4s ease-in-out, top 0.4s ease-in-out;
  transform: rotate(${props => props.rotate || 270}deg);
`;

const Container = styled.div`
  z-index: ${props => (props.isOpened ? props.openedZIndex : props.zIndex) || 2001};
  position: ${props => (props.fullScreen ? 'fixed' : 'relative')};
  width: ${props => (props.fullScreen ? '100vw' : '100%')};
  height: ${props => (props.fullScreen ? '90vh' : '100%')};
  bottom: calc(48px - 100%);
  left: 0;
  overflow: ${props => (props.fullScreen ? 'visible' : 'hidden')};
  transition: transform 0.4s ease-in-out;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${white};
  box-shadow: 0 -1px 3px -1px rgba(41, 42, 43, 0.16), 0 0 1px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  zoom: 1;
  ${props => (props.isOpened ? css`
    transform: translateY(calc(48px - 100% + ${BORDER_SIZE}px));

    ${Title} {
      ${subheadingBlackBold};
    }

    ${InnerHeader} {
      padding-top: 24px;
    }

    ${Chevron} {
      top: ${24 - BORDER_SIZE}px;
    }
  ` : css`
    transform: translateY(${props => (props.fullScreen ? `calc(-10% - ${BORDER_SIZE + 1}px)` : 0)});

    ${Chevron} {
      top: ${12 - BORDER_SIZE}px;
    }
  `)}
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${white};
`;

const BadgeCounter = styled(Badge)`
  margin-left: 4px;
`;

const Content = styled.div`
  transition: margin 0.4s ease-in-out;
  margin-top: ${props => props.marginTop || 0}px;
  width: 100%;
  height: calc(${props => (props.fullScreen ? 90 : 100)}% - ${props => props.marginTop || 0}px - ${BORDER_SIZE + 3}px);
  overflow: auto;
  padding: 0 24px;
`;

const FixedContent = styled.div`
  padding: 0 24px 10px;
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

export default class BottomSheet extends Component<Props, State> {
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
          this.headerElement && this.headerElement.clientHeight && renderContent &&
          <Content fullScreen={ fullScreen } marginTop={ this.headerElement.clientHeight + 17 }>
            { renderContent() }
          </Content>
        }
        <Header innerRef={ (ref) => { if (!this.headerElement) this.headerElement = ref; } }>
          <InnerHeader
            onChange={ () => console.log('asdasdasda') }
            onMouseDown={ this.onChangeToggle }
            onTouchStart={ this.onChangeToggle }
            onTouchEnd={ this.preventDefault }
          >
            <Title>{ title || '' }</Title>
            {
              badgeCount &&
              <BadgeCounter count={ badgeCount } />
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
            <BackgroundWindow
              zIndex={ openedZIndex || zIndex }
              onMouseDown={ this.onChangeToggle }
              onTouchStart={ this.onChangeToggle }
              onTouchEnd={ this.preventDefault }
            />
          }
          { element }
        </div>
      );
    }

    return element;
  }
}
