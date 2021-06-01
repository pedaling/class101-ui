import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { gray900 } from '../../core/Colors';
import { elevation1 } from '../../core/ElevationStyles';
import { Position } from '../../core/Position';
import { IconProps } from '../../Icon';
import { ToasterPosition } from '../Toaster';
import { fadeOutKeyFrames, slideDownKeyFrames, slideUpKeyFrames } from './keyframes';

export const DEFAULT_TIMEOUT = 5000;
export const UNMOUNT_ANIMATION_SECONDS = 0.2;

export interface ToastProps {
  backgroundColor?: string;
  button?: ReactElement<IconProps> | string;
  color?: string;
  icon?: ReactElement<IconProps>;
  message: string;
  position?: ToasterPosition;
  timeout?: number;
  onButtonClicked?: () => void;
  key?: string;
  onClose?: () => void;
  dismiss?: () => void;
}

interface State {
  unmount: boolean;
}

export class Toast extends React.Component<ToastProps, State> {
  public static defaultProps = {
    position: Position.TOP,
    timeout: DEFAULT_TIMEOUT,
  };

  public state: State = {
    unmount: false,
  };
  private unmountAnimationTimeout?: number;

  public componentDidMount() {
    const { dismiss, timeout } = this.props;

    if (timeout === undefined) {
      throw Error('No timeout prop!');
    }

    if (timeout > 0) {
      this.unmountAnimationTimeout = window.setTimeout(() => {
        this.setState({
          unmount: true,
        });
      }, timeout - UNMOUNT_ANIMATION_SECONDS * 1000);

      if (dismiss) {
        window.setTimeout(dismiss, timeout);
      } else {
        throw Error('No dismiss prop!');
      }
    }
  }

  public componentDidUpdate(prevProps: Readonly<ToastProps>, prevState: Readonly<State>) {
    if (prevProps.timeout !== this.props.timeout && this.props.timeout !== undefined) {
      if (this.unmountAnimationTimeout) {
        clearTimeout(this.unmountAnimationTimeout);
      }
      this.unmountAnimationTimeout = window.setTimeout(() => {
        this.setState({
          unmount: true,
        });
      }, this.props.timeout - UNMOUNT_ANIMATION_SECONDS * 1000);

    }
  }

  public render() {
    const { button, dismiss, icon, message, onButtonClicked } = this.props;
    const { unmount } = this.state;

    return (
      <UnmountAnimation unmount={unmount}>
        <Container {...this.props}>
          {Boolean(icon) && (
            <Icon>
              {React.cloneElement(icon as React.DetailedReactHTMLElement<IconProps, HTMLElement>, { size: 18 })}
            </Icon>
          )}
          <Message>{message}</Message>
          {Boolean(button) && (
            <Action onClick={onButtonClicked || dismiss}>
              {typeof button !== 'object'
                ? button
                : React.cloneElement(button as React.DetailedReactHTMLElement<IconProps, HTMLElement>, { size: 18 })}
            </Action>
          )}
        </Container>
      </UnmountAnimation>
    );
  }

  public componentWillUnmount() {
    const { onClose } = this.props;

    if (this.unmountAnimationTimeout) {
      clearTimeout(this.unmountAnimationTimeout);
    }

    if (onClose) {
      onClose();
    }
  }
}

const unmountAnimationCss = css`
  animation: ${fadeOutKeyFrames} ${UNMOUNT_ANIMATION_SECONDS}s;
`;

const unmountedCss = css`
  opacity: 0;
`;

const UnmountAnimation = styled.div<{ unmount: boolean }>`
  ${props => props.unmount && unmountAnimationCss}
  ${props => props.unmount && unmountedCss}
`;

const Container = styled.div<Partial<ToastProps>>`
  min-width: 280px;
  max-width: 612px;
  border-radius: 3px;
  padding: 14px 16px;
  line-height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor || gray900};
  color: ${props => props.color || 'white'};
  margin-top: ${props =>
    props.position === Position.TOP || props.position === Position.TOP_LEFT || props.position === Position.TOP_RIGHT
      ? '20px'
      : 0};
  margin-bottom: ${props =>
    props.position === Position.BOTTOM ||
    props.position === Position.BOTTOM_LEFT ||
    props.position === Position.BOTTOM_RIGHT
      ? '20px'
      : 0};
  margin-left: ${props => (props.position === Position.BOTTOM || props.position === Position.TOP ? 'auto' : '')};
  margin-right: ${props => (props.position === Position.BOTTOM || props.position === Position.TOP ? 'auto' : '')};
  animation: ${props =>
      props.position === Position.TOP || props.position === Position.TOP_LEFT || props.position === Position.TOP_RIGHT
        ? slideDownKeyFrames
        : slideUpKeyFrames}
    0.1s ease-out;
  ${elevation1}
`;

const Icon = styled.span`
  height: 20px;
  line-height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const Message = styled.span`
  margin-right: 12px;
  white-space: pre-wrap;
  word-break: break-all;
`;

const Action = styled.button`
  align-items: center;
  border: 0;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: inherit;
  line-height: 20px;
  margin-left: auto;
  padding: 0;
  word-break: keep-all;

  &:active {
    outline: none;
  }
`;
