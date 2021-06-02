import React, { PureComponent } from 'react';
import styled from 'styled-components';

import {
  Button, ButtonColor, ButtonProps, IconButton,
} from '../../components/Button';
import { media } from '../../core/BreakPoints';
import { gray600, gray900, white } from '../../core/Colors';
import { elevation5 } from '../../core/ElevationStyles';
import { Body2, Headline3 } from '../../core/Typography';
import { CloseIcon } from '../../Icon';
import { fixScrollbar, isClient, isServer } from '../../utils';
import { OverlaidPortal } from '../OverlaidPortal';

export interface ModalProps {
  opened: boolean;
  title: React.ReactNode;
  opener?: React.ReactElement<{ onClick: () => void }>;
  zIndex: number;
  children: React.ReactNode;
  subTitle?: React.ReactNode;
  successText?: string;
  className?: string;
  successAttributes: Partial<ButtonProps>;
  cancelText?: string;
  cancelAttributes: Partial<ButtonProps>;
  closeable: boolean;
  hideScroll: boolean;
  noSSR: boolean;
  removeContentPadding: boolean;
  modalStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  onOpen?: () => boolean | void;
  onClose?: () => void;
  onSuccess?: (close: () => void) => void;
  onCancel?: (close: () => void) => void;
  scrollbarWidth: number;
}

interface State {
  mounted: boolean;
  opened: boolean;
}

export class Modal extends PureComponent<ModalProps, State> {
  public static defaultProps: Partial<ModalProps> = {
    zIndex: 3000,
    closeable: true,
    hideScroll: false,
    noSSR: false,
    cancelAttributes: {},
    successAttributes: {},
    removeContentPadding: false,
    scrollbarWidth: fixScrollbar(),
  };

  public readonly state: State = {
    mounted: this.props.noSSR,
    opened: false,
  };

  public static getDerivedStateFromProps(nextProps: ModalProps, prevState: State): Partial<State> | null {
    if (nextProps.opened !== undefined && nextProps.opened !== prevState.opened) {
      return {
        opened: nextProps.opened,
      };
    }
    return null;
  }

  public componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  public componentDidUpdate(prevProps: ModalProps, prevState: State) {
    const { opened } = this.state;

    if (prevState.opened !== opened) {
      if (opened) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    }
  }

  public render() {
    const {
      zIndex,
      children,
      title,
      subTitle,
      successText,
      className,
      cancelText,
      hideScroll,
      closeable,
      modalStyle,
      contentStyle,
      removeContentPadding,
      opener,
      successAttributes,
      cancelAttributes,
    } = this.props;
    const { mounted, opened } = this.state;

    if (!mounted || isServer()) {
      return opener || <></>;
    }
    if (!successAttributes.color) {
      successAttributes.color = ButtonColor.ORANGE;
    }

    const clonedOpener = opener
      && React.cloneElement(opener, {
        onClick: this.showModal,
      });
    return (
      <>
        {clonedOpener}
        <StyledOverlaidPortal zIndex={zIndex} opened={opened} closeable={closeable} onClose={this.handleCloseModal}>
          <Dialog visible={opened} onClick={this.blockPropagation} style={modalStyle} className={className}>
            <DialogHead>
              <DialogTitle>{title}</DialogTitle>
              {closeable && (
                <IconButton
                  icon={<CloseIcon />}
                  onClick={this.handleCloseModal}
                  fillColor={gray900}
                  color="transparent"
                />
              )}
            </DialogHead>
            {subTitle && <DialogSubTitle>{subTitle}</DialogSubTitle>}
            <DialogBody style={contentStyle} hideScroll={hideScroll} removeContentPadding={removeContentPadding}>
              {children}
            </DialogBody>
            <DialogFooter>
              {cancelText && (
                <DialogFooterButton onClick={this.handleCancelModal} {...cancelAttributes}>
                  {cancelText}
                </DialogFooterButton>
              )}
              {successText && (
                <DialogFooterButton onClick={this.handleSuccessModal} {...successAttributes}>
                  {successText}
                </DialogFooterButton>
              )}
            </DialogFooter>
          </Dialog>
        </StyledOverlaidPortal>
      </>
    );
  }

  private disableBodyScroll = () => {
    if (isClient()) {
      document.body.style.paddingRight = `${this.props.scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    }
  };

  private enableBodyScroll = () => {
    if (isClient()) {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    }
  };

  private showModal = () => {
    const { onOpen } = this.props;

    if (!onOpen || onOpen() !== false) {
      this.setState({
        opened: true,
      });
    }
  };

  private hideModal = () => {
    this.setState({
      opened: false,
    });
  };

  private blockPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  private handleCloseModal = () => {
    const { opener, onClose } = this.props;
    if (opener) {
      this.hideModal();
    }
    onClose ? onClose() : this.hideModal();
  };

  private handleCancelModal = () => {
    const { onCancel } = this.props;
    onCancel ? onCancel(this.hideModal) : this.hideModal();
  };

  private handleSuccessModal = () => {
    const { onSuccess } = this.props;
    onSuccess ? onSuccess(this.hideModal) : this.hideModal();
  };
}

const StyledOverlaidPortal = styled(OverlaidPortal)<{ opened: boolean }>`
  transition: ${(props) => !props.opened && 'visibility 0s linear 225ms,'} opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Dialog = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  min-width: 720px;
  max-width: 1280px;
  min-height: 360px;
  max-height: 800px;
  border-radius: 8px;
  background-color: ${white};
  box-sizing: border-box;
  ${elevation5};
`;

const DialogHead = styled.div`
  flex: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const DialogTitle = styled(Headline3)`
  flex: auto;
  white-space: pre-line;
  word-break: break-all;
`;

const DialogSubTitle = styled(Body2)`
  flex: none;
  margin-bottom: 16px;
  word-break: break-all;
  color: ${gray600};
`;

const DialogBody = styled.div<{ hideScroll: boolean; removeContentPadding: boolean }>`
  flex: auto;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all;
  ${(props) => props.hideScroll
    && `
    &::-webkit-scrollbar {
      display: none;
    }
  `}

  ${(props) => props.removeContentPadding
    && `
    margin-left: -32px;
    margin-right: -32px;

    ${media.sm`
      margin-left: -24px;
      margin-right: -24px;
    `}
  `}

  overscroll-behavior: contain;
`;

const DialogFooter = styled.div`
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 0 -8px;
`;

const DialogFooterButton = styled(Button)`
  flex: 1 0 auto;
  margin: 16px 8px 0;
`;
