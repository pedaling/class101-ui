import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import { gray500, gray800, white } from '../../core/Colors';
import { headline3 } from '../../core/TextStyles';
import { Close } from '../../Icon';
import { lockScroll, unlockScroll } from './utils';

export interface ModalProps {
  title?: string;
  description?: string;
  hideCloseButton?: boolean;
  children: React.ReactNode;
  isOpened: boolean;
  onClose?: () => any;
  containerStyle?: React.CSSProperties;
}

export class Modal extends PureComponent<ModalProps> {
  public static counter = 0;

  public componentDidUpdate(prevProps: ModalProps) {
    if (!prevProps.isOpened && this.props.isOpened) {
      Modal.counter += 1;
      if (Modal.counter > 0) {
        lockScroll();
      }
    }

    if (prevProps.isOpened && !this.props.isOpened) {
      Modal.counter -= 1;
      if (Modal.counter <= 0) {
        unlockScroll();
      }
    }
  }

  public render() {
    const { isOpened, title, hideCloseButton, description, children, containerStyle, ...restProps } = this.props;
    if (!isOpened) {
      return null;
    }

    return (
      <>
        <Overlay onClick={this.handleClickClose} />
        <ModalContainer {...restProps} style={containerStyle}>
          <ModalTitle>
            <Title>
              {title &&
                title.split('\n').reduce(
                  (prev, curr) => (
                    <>
                      {prev}
                      {prev ? <br /> : undefined}
                      {curr}
                    </>
                  ),
                  '' as React.ReactNode
                )}
            </Title>
            {!hideCloseButton && (
              <CloseButton onClick={this.handleClickClose}>
                <Close fillColor={gray500} />
              </CloseButton>
            )}
          </ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
          {children}
        </ModalContainer>
      </>
    );
  }

  private handleClickClose = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  };
}

const OpenOverLayAnimation = keyframes`
  from {
    opacity: 0;
    -webkit-font-smoothing: antialiased;
  }
  to {
    opacity: 1;
    -webkit-font-smoothing: antialiased;
  }
`;

const OpenModalAnimation = keyframes`
  from {
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, calc(-50% - 8px));
    -webkit-font-smoothing: antialiased;
  }
  to {
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-font-smoothing: antialiased;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  z-index: 2001;
  animation: ${OpenOverLayAnimation} 0.25s;
  opacity: 1.1;
`;

const ModalContainer = styled.div`
  padding: 24px;
  position: fixed;
  overflow-y: auto;
  z-index: 2001;
  background: ${white};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08), 0 8px 16px 0 rgba(0, 0, 0, 0.12);

  @media (min-width: 960px) {
    top: 50%;
    left: 50%;
    width: 480px;
    transform: translate(-50%, -50%);
    animation: ${OpenModalAnimation} 0.25s;
    max-height: 95%;
    padding: 32px 24px;
  }

  @media (min-width: 640px) and (max-width: 959px) {
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    animation: ${OpenModalAnimation} 0.25s;
    max-height: 95%;
  }

  @media (max-width: 639px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }

  hr {
    margin: 0 0 16px;
  }
`;

const CloseButton = styled.div`
  flex: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ModalTitle = styled.h1`
  ${headline3};
  display: flex;
  margin: 0 0 8px;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const ModalDescription = styled.p`
  margin-bottom: 24px;
  @media (min-width: 960px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.1px;
    text-align: left;
    color: ${gray800};
  }
`;
