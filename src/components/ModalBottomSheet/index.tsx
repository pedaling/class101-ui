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
  opener?: React.ReactElement<{ onClick: () => void }>;
  zIndex: number;
  title: string;
  subTitle?: React.ReactNode;
  children: React.ReactNode;
  okText?: string;
  okColor: ContainButtonColorValue;
  cancelText?: string;
  cancelColor: ContainButtonColorValue;
  closeable: boolean;
  showScroll: boolean;
  mounted: boolean;
  onClose?: () => void;
  onOk?: (close: () => void) => void;
  onCancel?: (close: () => void) => void;
}

interface State {
  mounted: boolean;
  open: boolean;
}

export class ModalBottomSheet extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    zIndex: 1000,
    closeable: false,
    okColor: 'orange',
    cancelColor: 'default',
    showScroll: false,
    mounted: false,
  };

  public readonly state = {
    mounted: this.props.mounted,
    open: false,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
    if (nextProps.open !== undefined && nextProps.open !== prevState.open) {
      console.log(nextProps);
      return {
        open: nextProps.open,
      };
    }
    return null;
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  componentDidUpdate(prevProps: Props) {
    const { open } = this.state;
    if (prevProps.open !== open) {
      if (open) {
        this.disableBodyScroll();
      } else {
        setTimeout(() => {
          this.enableBodyScroll();
        }, 225);
      }
    }
  }

  componentWillUnmount() {
    this.enableBodyScroll();
  }

  private disableBodyScroll = () => {
    document.body.style.paddingRight = '15px';
    document.body.style.overflow = 'hidden';
  };

  private enableBodyScroll = () => {
    document.body.style.paddingRight = null;
    document.body.style.overflow = null;
  };

  private showModal = () => {
    this.setState({
      open: true,
    });
  };

  private hideModal = () => {
    this.setState({
      open: false,
    });
  };

  private blockPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  private notifyModalClose = () => {
    const { opener, onClose } = this.props;

    opener && this.hideModal();
    onClose && onClose();
  };

  private notifyModalCancel = () => {
    const { opener, onCancel } = this.props;
    onCancel && onCancel(this.hideModal);
  };

  private notifyModalOk = () => {
    const { onOk } = this.props;
    onOk && onOk(this.hideModal);
  };

  public render() {
    const {
      zIndex,
      children,
      title,
      subTitle,
      okText,
      okColor,
      cancelText,
      showScroll,
      cancelColor,
      closeable,
      opener,
    } = this.props;
    const { mounted, open } = this.state;
    if (!mounted) return opener || null;

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
            visible={open}
            onClick={closeable ? this.notifyModalClose : undefined}
          >
            <StyledBottomSheetDialog visible={open} onClick={this.blockPropagation}>
              <StyledBottomSheetHead>
                <StyledBottomSheetTitle>{title}</StyledBottomSheetTitle>
                {closeable && (
                  <IconButton
                    icon={<Close />}
                    onClick={this.notifyModalClose}
                    fillColor={gray800}
                    color="transparent"
                  />
                )}
              </StyledBottomSheetHead>
              {subTitle && <StyledBottomSheetSubTitle>{subTitle}</StyledBottomSheetSubTitle>}
              <StyledBottomSheetBody showScroll={showScroll}>{children}</StyledBottomSheetBody>
              <StyledBottomSheetFooter>
                {cancelText && (
                  <StyledBottomSheetFooterButton onClick={this.notifyModalCancel} color={cancelColor}>
                    {cancelText}
                  </StyledBottomSheetFooterButton>
                )}
                {cancelText && okText && <StyledBottomSheetFooterSpace />}
                {okText && (
                  <StyledBottomSheetFooterButton onClick={this.notifyModalOk} color={okColor}>
                    {okText}
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

const StyledBottomSheetBody = styled.div<{ showScroll: boolean }>`
  margin-top: 16px;
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  ${props =>
    !props.showScroll &&
    `
    &::-webkit-scrollbar {
      display: none;
    }
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