import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Portal from '../../Portal';
import { white, gray800, gray600 } from '../../Colors';
import { Close } from '../../Icon';
import { elevation5 } from '../../ElevationStyles';
import Headline3 from '../../Typography/Headline3';
import { IconButton, Button } from '../Button';
import body2 from '../../Typography/Body2';
import { ContainButtonColorValue } from '../Button/interface';
import { media } from '../../BreakPoints';

interface Props {
  open: boolean;
  zIndex: number;
  title: string;
  subTitle?: React.ReactNode;
  children: React.ReactNode;
  okText?: string;
  okColor: ContainButtonColorValue;
  cancelText?: string;
  cancelColor: ContainButtonColorValue;
  closeable?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  onCancel?: () => void;
}

export class ModalBottomSheet extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    zIndex: 1000,
    closeable: true,
    okColor: 'orange',
    cancelColor: 'default',
  };

  private blockPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  public render() {
    const {
      zIndex,
      open,
      onClose,
      children,
      title,
      subTitle,
      okText,
      okColor,
      cancelText,
      cancelColor,
      closeable,
      onOk,
      onCancel,
    } = this.props;

    if (typeof window === 'undefined' || !window.document || !document.body) return null;

    return (
      <Portal container={document.body}>
        <StyledBottomSheetContainer zIndex={zIndex} visible={open} onClick={closeable ? onClose : undefined}>
          <StyledBottomSheetDialog visible={open} onClick={this.blockPropagation}>
            <StyledBottomSheetHead>
              <StyledBottomSheetTitle>{title}</StyledBottomSheetTitle>
              {closeable && <IconButton icon={<Close />} onClick={onClose} fillColor={gray800} color="transparent" />}
            </StyledBottomSheetHead>
            {subTitle && <StyledBottomSheetSubTitle>{subTitle}</StyledBottomSheetSubTitle>}
            <StyledBottomSheetBody>{children}</StyledBottomSheetBody>
            <StyledBottomSheetFooter>
              {cancelText && (
                <StyledBottomSheetFooterButton onClick={onCancel} color={cancelColor}>
                  {cancelText}
                </StyledBottomSheetFooterButton>
              )}
              {cancelText && okText && <StyledBottomSheetFooterSpace />}
              {okText && (
                <StyledBottomSheetFooterButton onClick={onOk} color={okColor}>
                  {okText}
                </StyledBottomSheetFooterButton>
              )}
            </StyledBottomSheetFooter>
          </StyledBottomSheetDialog>
        </StyledBottomSheetContainer>
      </Portal>
    );
  }
}

const StyledBottomSheetContainer = styled.div<{ zIndex: number; visible: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.zIndex};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.72);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: ${props => !props.visible && `visibility 0s linear 225ms,`} opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const StyledBottomSheetDialog = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 480px;
  min-height: 360px;
  max-height: 800px;
  border-radius: 8px;
  ${media.sm`
    max-height: calc(100vh - 48px);
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    ${props => props.visible && `transform: translateY(-100%);`}
    min-height: 240px;
    transition: all 225ms ease-out;

  `}
  background: ${white};
  box-sizing: border-box;
  ${elevation5}
`;

const StyledBottomSheetHead = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
`;

const StyledBottomSheetTitle = styled(Headline3)`
  flex: 1 0 auto;
`;

const StyledBottomSheetSubTitle = styled(body2)`
  margin-top: 16px;
  color: ${gray600};
`;

const StyledBottomSheetBody = styled.div`
  margin-top: 16px;
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  overscroll-behavior: contain;
`;

const StyledBottomSheetFooter = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
`;

const StyledBottomSheetFooterButton = styled(Button)`
  flex: 1 0 auto;
`;

const StyledBottomSheetFooterSpace = styled.div`
  width: 16px;
`;
