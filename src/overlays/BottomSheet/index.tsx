import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { Badge } from '../../components/Badge';
import { gray900, white } from '../../core/Colors';
import { body1, subtitle1 } from '../../core/TextStyles';
import { ChevronRight } from '../../Icon';
import { HTMLDivProps } from '../../interfaces/props';

interface ContainerProps {
  /** 창 전체에 Fixed 여부(Docs에선 사용 불가) */
  fullScreen?: boolean;

  /** CSS z-index 속성의 값 */
  zIndex?: number;

  /** 열렸을 때 CSS z-index 속성의 값 */
  openedZIndex?: number;
  className?: string;
  divAttributes?: HTMLDivProps;
}

export interface BottomSheetProps extends ContainerProps {
  /** 열려 있는 지 여부 */
  isOpened?: boolean;

  /** 제목 */
  title: string;

  /** 알림 개수 */
  badgeCount?: number;

  /**  안에 들어갈 내용  */
  renderContent: () => ReactNode;

  /** 상단에 고정될 내용 */
  renderFixedContent: () => ReactNode;
}

interface State {
  readonly isOpened: boolean;
}

export class BottomSheet extends PureComponent<BottomSheetProps, State> {
  public static defaultProps = {
    fullScreen: true,
  };

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
      fullScreen,
      zIndex,
      openedZIndex,
      className,
      divAttributes,
    } = this.props;

    const isOpened = this.props.isOpened || this.state.isOpened;

    const element = (
      <Container
        {...divAttributes}
        isOpened={isOpened}
        fullScreen={fullScreen}
        zIndex={zIndex}
        openedZIndex={openedZIndex}
        className={className}
      >
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
            {badgeCount && <BadgeCounter pill>{badgeCount}</BadgeCounter>}
            <ChevronBox rotate={isOpened ? 90 : 270}>
              <ChevronRight />
            </ChevronBox>
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

const BORDER_SIZE = 1;

const Title = styled.span`
  ${body1};
  color: ${gray900};
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

interface ChevronBoxProps {
  rotate?: number;
}

const ChevronBox = styled.div<ChevronBoxProps>`
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
      ? `
          transform: translateY(calc(48px - 100% + ${BORDER_SIZE}px));

          ${Title} {
            ${subtitle1};
            color: ${gray900};
            font-weight: bold;
          }

          ${InnerHeader} {
            padding-top: 24px;
          }

          ${ChevronBox} {
            top: ${24 - BORDER_SIZE}px;
          }
        `
      : `
          transform: translateY(${props.fullScreen ? `calc(-10% - ${BORDER_SIZE + 1}px)` : 0});

          ${ChevronBox} {
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
