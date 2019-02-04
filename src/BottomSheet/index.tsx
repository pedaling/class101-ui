import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import Badge from '../Badge';
import { gray800, white } from '../Colors';
import { body1, subtitle1 } from '../TextStyles';

interface ContainerProps {
  fullScreen?: boolean;
  zIndex?: number;
  openedZIndex?: number;
}

interface Props extends ContainerProps {
  isOpened?: boolean;
  title: string;
  badgeCount?: number;
  renderContent: () => HTMLElement;
  renderFixedContent: () => HTMLElement;
}

interface State {
  isOpened: boolean;
}

const BORDER_SIZE = 1;

const Title = styled.span`
  ${body1};
  color: ${gray800};
  font-weight: bold;
  transition: font-size 0.4s ease-in-out;
`;

const InnerHeader = styled.div`
  padding: 10px 24px;
  cursor: pointer;
  transition: padding 0.4s ease-in-out;

  div,
  span {
    vertical-align: middle;
  }
`;

interface ChevronProps {
  rotate?: number;
}

const Chevron = styled.img.attrs({
  src: 'https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-chevron-gray.png',
  alt: '>',
})<ChevronProps>`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  transition: transform 0.4s ease-in-out, top 0.4s ease-in-out;
  transform: rotate(${props => props.rotate || 270}deg);
`;

const Container = styled.div<ContainerProps & { isOpened?: boolean }>`
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
  ${props =>
    props.isOpened
      ? css`
          transform: translateY(calc(48px - 100% + ${BORDER_SIZE}px));

          ${Title} {
            ${subtitle1};
            color: ${gray800};
            font-weight: bold;
          }

          ${InnerHeader} {
            padding-top: 24px;
          }

          ${Chevron} {
            top: ${24 - BORDER_SIZE}px;
          }
        `
      : css<{ fullScreen?: boolean }>`
          transform: translateY(${props => (props.fullScreen ? `calc(-10% - ${BORDER_SIZE + 1}px)` : 0)});

          ${Chevron} {
            top: ${12 - BORDER_SIZE}px;
          }
        `}
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

const Content = styled.div<{ marginTop?: number; fullScreen?: boolean }>`
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

const BackgroundWindow = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: visible;
  z-index: ${props => (props.zIndex ? props.zIndex - 1 : 2000)};
`;

export default class BottomSheet extends PureComponent<Props, State> {
  public readonly state = {
    isOpened: false,
  };

  private headerElement: HTMLDivElement | null = null;

  public render() {
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
      <Container isOpened={isOpened} fullScreen={fullScreen} zIndex={zIndex} openedZIndex={openedZIndex} {...restProps}>
        {this.headerElement && this.headerElement.clientHeight && renderContent && (
          <Content fullScreen={fullScreen} marginTop={this.headerElement.clientHeight + 17}>
            {renderContent()}
          </Content>
        )}
        <Header
          ref={ref => {
            if (!this.headerElement) this.headerElement = ref;
          }}
        >
          <InnerHeader
            onMouseDown={this.onChangeToggle}
            onTouchStart={this.onChangeToggle}
            onTouchEnd={this.preventDefault}
          >
            <Title>{title || ''}</Title>
            {badgeCount && <BadgeCounter>{badgeCount}</BadgeCounter>}
            <Chevron rotate={isOpened ? 90 : 270} />
          </InnerHeader>
          {renderFixedContent && <FixedContent>{renderFixedContent()}</FixedContent>}
        </Header>
      </Container>
    );

    if (fullScreen) {
      return (
        <div>
          {isOpened && (
            <BackgroundWindow
              zIndex={openedZIndex || zIndex}
              onMouseDown={this.onChangeToggle}
              onTouchStart={this.onChangeToggle}
              onTouchEnd={this.preventDefault}
            />
          )}
          {element}
        </div>
      );
    }

    return element;
  }
  private onChangeToggle = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  };

  private preventDefault = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
}
