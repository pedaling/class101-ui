import * as React from 'react';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { isClient } from '../../utils';
import { Portal } from '../Portal';

export interface OverlayProps {
  className?: string;
  children: React.ReactNode;
  opened: boolean;
  /** overlay 존재 여부 */
  dimmer?: boolean;
  /** overlay 색상, 기본 값: rgba(0, 0, 0, 0.72) */
  overlayColor?: string;
  closeable?: boolean;
  onClose?: () => void;
  /** CSS z-index 속성의 값 */
  zIndex?: number;
}

function useDefaultProps<T, DefaultProps extends Partial<T>>(props: T, defaultProps: DefaultProps): DefaultProps & T {
  return {
    ...defaultProps,
    ...props,
  };
}

export const OverlaidPortal = React.memo<OverlayProps>(originalProps => {
  const { className, children, dimmer, overlayColor, opened, closeable, onClose, zIndex } = useDefaultProps(
    originalProps,
    {
      closeable: true,
      dimmer: true,
      overlayColor: 'rgba(0, 0, 0, 0.72)',
    }
  );

  useEffect(() => {
    if (isClient() && dimmer) {
      document.body.style.overflow = opened ? 'hidden' : '';
    }
    return () => {
      if (isClient() && dimmer) {
        document.body.style.overflow = '';
      }
    };
  }, [opened, dimmer]);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  if (!dimmer) {
    return <Portal container={document.body}>{children}</Portal>;
  }

  return (
    <Portal container={document.body}>
      <Overlay
        className={className}
        zIndex={zIndex}
        overlayColor={overlayColor}
        dimmer={dimmer}
        visible={opened}
        onClick={closeable ? handleCloseModal : undefined}
      >
        {children}
      </Overlay>
    </Portal>
  );
});

export const Overlay = styled.div<{ zIndex?: number; overlayColor: string; dimmer: boolean; visible: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.zIndex ?? 3000};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: ${props => (props.dimmer ? props.overlayColor : 'transparent')};
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  overscroll-behavior: contain;
`;
