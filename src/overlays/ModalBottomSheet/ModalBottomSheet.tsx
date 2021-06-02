import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import fixScrollbar from 'utils/fixScrollbar';
import {
  Button, ButtonColor, ButtonProps, IconButton,
} from '../../components/Button';
import { media } from '../../core/BreakPoints';
import { gray600, gray900, white } from '../../core/Colors';
import { elevation5 } from '../../core/ElevationStyles';
import { Body2, Headline3 } from '../../core/Typography';
import { CloseIcon } from '../../Icon';
import { isClient, isServer } from '../../utils';
import { OverlaidPortal } from '../OverlaidPortal';

export enum BottomButtonType {
  Row = 'row',
  Column = 'column',
}

export interface ModalBottomSheetProps {
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
  bottomButtonType?: BottomButtonType;
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

export class ModalBottomSheet extends PureComponent<ModalBottomSheetProps, State> {
  public static defaultProps: Partial<ModalBottomSheetProps> = {
    zIndex: 3000,
    closeable: true,
    hideScroll: false,
    noSSR: false,
    cancelAttributes: {},
    successAttributes: {},
    removeContentPadding: false,
    scrollbarWidth: fixScrollbar(),
  };

  public static getDerivedStateFromProps(
    nextProps: ModalBottomSheetProps,
    prevState: State,
  ): Partial<State> | null {
    if (nextProps.opened !== undefined && nextProps.opened !== prevState.opened) {
      return {
        opened: nextProps.opened,
      };
    }
    return null;
  }

  constructor(props: ModalBottomSheetProps) {
    super(props);

    const { noSSR } = props;

    this.state = {
      mounted: noSSR,
      opened: false,
    };
  }

  public componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  public componentDidUpdate(prevProps: ModalBottomSheetProps, prevState: State) {
    const { opened } = this.state;

    if (prevState.opened !== opened) {
      if (opened) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    }
  }

  private disableBodyScroll = () => {
    const { scrollbarWidth } = this.props;

    if (isClient()) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
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

    if (onClose) {
      onClose();
    } else {
      this.hideModal();
    }
  };

  private handleCancelModal = () => {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel(this.hideModal);
    } else {
      this.hideModal();
    }
  };

  private handleSuccessModal = () => {
    const { onSuccess } = this.props;

    if (onSuccess) {
      onSuccess(this.hideModal);
    } else {
      this.hideModal();
    }
  };

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
      bottomButtonType = BottomButtonType.Row,
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
        <StyledOverlaidPortal
          zIndex={zIndex}
          opened={opened}
          closeable={closeable}
          onClose={this.handleCloseModal}
        >
          <Dialog
            visible={opened}
            onClick={this.blockPropagation}
            style={modalStyle}
            className={className}
          >
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
            <DialogBody
              style={contentStyle}
              hideScroll={hideScroll}
              removeContentPadding={removeContentPadding}
            >
              {children}
            </DialogBody>
            <DialogFooter bottomButtonType={bottomButtonType}>
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
}

const StyledOverlaidPortal = styled(OverlaidPortal)<{ opened: boolean }>`
  transition: ${(props) => !props.opened && 'visibility 0s linear 225ms,'} opacity 225ms
    cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${media.sm`
    justify-content: flex-end;
  `};
`;

const Dialog = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 480px;
  max-height: 800px;
  border-radius: 8px;
  background-color: ${white};
  box-sizing: border-box;
  ${elevation5};

  ${media.sm`
    flex: none;
    padding: 24px;
    padding-bottom: calc(constant(safe-area-inset-bottom) + 24px);
    padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
    width: 100%;
    max-height: calc(100% - 48px);
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    ${(props) => !props.visible && 'transform: translateY(100%);'}
    transition: all 225ms ease-out;
  `};
`;

const DialogHead = styled.div`
  flex: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const DialogTitle = styled(Headline3)`
  flex: auto;
  white-space: pre-line;
`;

const DialogSubTitle = styled(Body2)`
  flex: none;
  margin-bottom: 16px;
  color: ${gray600};
`;

const DialogBody = styled.div<{ hideScroll: boolean; removeContentPadding: boolean }>`
  flex: auto;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;

  ${(props) => props.hideScroll
    && `
    &::-webkit-scrollbar {
      display: none;
    }
  `}

  ${(props) => props.removeContentPadding
    && css`
      margin-left: -32px;
      margin-right: -32px;

      ${media.sm`
        margin-left: -24px;
        margin-right: -24px;
      `}
    `}
`;

const DialogFooterButton = styled(Button)`
  flex: 1 0 auto;
  margin: 16px 8px 0;
`;

const DialogFooter = styled.div<{ bottomButtonType: BottomButtonType }>`
  flex: none;
  display: flex;
  margin: 0 -8px;

  ${(props) => {
    switch (props.bottomButtonType) {
      case BottomButtonType.Row:
        return css`
          flex-direction: row;
        `;
      case BottomButtonType.Column:
        return css`
          flex-direction: column-reverse;
          ${DialogFooterButton} {
            margin-top: 8px;
          }
        `;
      default:
        return css``;
    }
  }}
`;
