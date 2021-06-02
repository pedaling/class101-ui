import { gray900 } from 'core/Colors';
import { elevation1 } from 'core/ElevationStyles';
import Position from 'core/Position';
import { IconProps } from 'Icon/types';
import {
  cloneElement,
  DetailedReactHTMLElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { fadeOutKeyFrames, slideDownKeyFrames, slideUpKeyFrames } from './keyframes';

export type ToasterPosition =
  | Position.TOP
  | Position.TOP_LEFT
  | Position.TOP_RIGHT
  | Position.BOTTOM
  | Position.BOTTOM_LEFT
  | Position.BOTTOM_RIGHT;

export interface ToastProps {
  backgroundColor?: string;
  button?: ReactElement<IconProps> | string;
  color?: string;
  icon?: ReactElement<IconProps>;
  message: string;
  position?: ToasterPosition;
  timeout: number;
  onButtonClicked?: () => void;
  key?: string;
  onClose?: () => void;
  dismiss: () => void;
}
const UNMOUNT_ANIMATION_SECONDS = 0.2;

export const Toast = ({
  timeout = 5000,
  dismiss,
  onClose,
  button,
  icon,
  message,
  position = Position.TOP,
  onButtonClicked,
  ...restProps
}: ToastProps): JSX.Element => {
  const [unmount, setUnmount] = useState(false);

  useEffect(
    () => () => {
      onClose?.();
    },
    [onClose],
  );

  useEffect(() => {
    const dismissTimeOut = window.setTimeout(dismiss, timeout);
    return () => {
      window.clearTimeout(dismissTimeOut);
    };
  }, [dismiss, timeout]);

  useEffect(() => {
    if (timeout > 0) {
      const unmountAnimationTimeout = window.setTimeout(() => {
        setUnmount(true);
      }, timeout - UNMOUNT_ANIMATION_SECONDS * 1000);
      return () => {
        window.clearTimeout(unmountAnimationTimeout);
      };
    }
    return undefined;
  }, [timeout]);

  return (
    <UnmountAnimation unmount={unmount}>
      <Container position={position} {...restProps}>
        {Boolean(icon) && (
          <Icon>
            {cloneElement(icon as DetailedReactHTMLElement<IconProps, HTMLElement>, { size: 18 })}
          </Icon>
        )}
        <Message>{message}</Message>
        {Boolean(button) && (
          <Action onClick={onButtonClicked || dismiss}>
            {typeof button !== 'object'
              ? button
              : cloneElement(button as DetailedReactHTMLElement<IconProps, HTMLElement>, {
                size: 18,
              })}
          </Action>
        )}
      </Container>
    </UnmountAnimation>
  );
};

const unmountAnimationCss = css`
  animation: ${fadeOutKeyFrames} ${UNMOUNT_ANIMATION_SECONDS}s;
`;

const unmountedCss = css`
  opacity: 0;
`;

const UnmountAnimation = styled.div<{ unmount: boolean }>`
  ${(props) => props.unmount && unmountAnimationCss}
  ${(props) => props.unmount && unmountedCss}
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
  background-color: ${(props) => props.backgroundColor || gray900};
  color: ${(props) => props.color || 'white'};
  margin-top: ${(props) => (props.position === Position.TOP
    || props.position === Position.TOP_LEFT
    || props.position === Position.TOP_RIGHT
    ? '20px'
    : 0)};
  margin-bottom: ${(props) => (props.position === Position.BOTTOM
    || props.position === Position.BOTTOM_LEFT
    || props.position === Position.BOTTOM_RIGHT
    ? '20px'
    : 0)};
  margin-left: ${(props) => (props.position === Position.BOTTOM || props.position === Position.TOP ? 'auto' : '')};
  margin-right: ${(props) => (props.position === Position.BOTTOM || props.position === Position.TOP ? 'auto' : '')};
  animation: ${(props) => (props.position === Position.TOP
      || props.position === Position.TOP_LEFT
      || props.position === Position.TOP_RIGHT
    ? slideDownKeyFrames
    : slideUpKeyFrames)}
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
