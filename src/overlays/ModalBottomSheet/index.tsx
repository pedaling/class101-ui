import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Portal } from '../Portal';
import { gray800, white, gray600 } from '../../core/Colors';
import { Close } from '../../Icon';
import { IconButton, Button } from '../../components/Button';
import { ContainButtonColorValue } from '../../components/Button/interface';
import { media } from '../../core/BreakPoints';
import { elevation5 } from '../../core/ElevationStyles';
import { Headline3, Body2 } from '../../core/Typography';

interface Props {
  opened: boolean;
  opener?: React.ReactElement<{ onClick: () => void }>;
  zIndex: number;
  title: string;
  subTitle?: React.ReactNode;
  children: React.ReactNode;
  successText?: string;
  successColor: ContainButtonColorValue;
  cancelText?: string;
  cancelColor: ContainButtonColorValue;
  closeable: boolean;
  hideScroll: boolean;
  noSsr: boolean;
  removeContentPadding: boolean;
  modalStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  onClose?: () => void;
  onSuccess?: (close: () => void) => void;
  onCancel?: (close: () => void) => void;
}

interface State {
  mounted: boolean;
  opened: boolean;
}

export class ModalBottomSheet extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    zIndex: 1000,
    closeable: true,
    successColor: 'orange',
    cancelColor: 'default',
    hideScroll: false,
    noSsr: false,
    removeContentPadding: false,
  };

  public readonly state: State = {
    mounted: this.props.noSsr,
    opened: false,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
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

  public componentDidUpdate(prevProps: Props, prevState: State) {
    const { opened } = this.state;

    if (prevState.opened !== opened) {
      if (opened) {
        this.disableBodyScroll();
      } else {
        setTimeout(() => {
          this.enableBodyScroll();
        }, 225);
      }
    }
  }

  public componentWillUnmount() {
    this.enableBodyScroll();
  }

  private disableBodyScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.paddingRight = '15px';
      document.body.style.overflow = 'hidden';
    }
  };

  private enableBodyScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.paddingRight = null;
      document.body.style.overflow = null;
    }
  };

  private showModal = () => {
    this.setState({
      opened: true,
    });
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

    opener && this.hideModal();
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

  public render() {
    const {
      zIndex,
      children,
      title,
      subTitle,
      successText,
      successColor,
      cancelText,
      hideScroll,
      cancelColor,
      closeable,
      modalStyle,
      contentStyle,
      removeContentPadding,
      opener,
    } = this.props;
    const { mounted, opened } = this.state;

    if (!mounted) {
      return opener || null;
    }

    const clonedOpener =
      opener &&
      React.cloneElement(opener, {
        onClick: this.showModal,
      });
    return (
      <>
        {clonedOpener}
        <Portal container={document.body}>
          <StyledBottomSheetContainer
            zIndex={zIndex}
            visible={opened}
            onClick={closeable ? this.handleCloseModal : undefined}
          >
            <StyledBottomSheetDialog visible={opened} onClick={this.blockPropagation} style={modalStyle}>
              <StyledBottomSheetHead>
                <StyledBottomSheetTitle>{title}</StyledBottomSheetTitle>
                {closeable && (
                  <IconButton
                    icon={<Close />}
                    onClick={this.handleCloseModal}
                    fillColor={gray800}
                    color="transparent"
                  />
                )}
              </StyledBottomSheetHead>
              {subTitle && <StyledBottomSheetSubTitle>{subTitle}</StyledBottomSheetSubTitle>}
              <StyledBottomSheetBody
                style={contentStyle}
                hideScroll={hideScroll}
                removeContentPadding={removeContentPadding}
              >
                {children}
              </StyledBottomSheetBody>
              <StyledBottomSheetFooter>
                {cancelText && (
                  <StyledBottomSheetFooterButton onClick={this.handleCancelModal} color={cancelColor}>
                    {cancelText}
                  </StyledBottomSheetFooterButton>
                )}
                {cancelText && successText && <StyledBottomSheetFooterSpace />}
                {successText && (
                  <StyledBottomSheetFooterButton onClick={this.handleSuccessModal} color={successColor}>
                    {successText}
                  </StyledBottomSheetFooterButton>
                )}
              </StyledBottomSheetFooter>
            </StyledBottomSheetDialog>
          </StyledBottomSheetContainer>
        </Portal>
      </>
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
  overscroll-behavior: contain;
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
    height: min-content;
    position: absolute;
    flex: 1 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    ${props => props.visible && `transform: translateY(-100%);`}
    min-height: 240px;
    transition: all 225ms ease-out;
    padding: 24px;
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

const StyledBottomSheetSubTitle = styled(Body2)`
  margin-top: 16px;
  color: ${gray600};
`;

const StyledBottomSheetBody = styled.div<{ hideScroll: boolean; removeContentPadding: boolean }>`
  margin-top: 16px;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  ${props =>
    props.hideScroll &&
    `
    &::-webkit-scrollbar {
      display: none;
    }
  `}

  ${props =>
    props.removeContentPadding &&
    `
    margin-left: -32px;
    margin-right: -32px;

    ${media.sm`
      margin-left: -24px;
      margin-right: -24px;
    `}
  `}

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
