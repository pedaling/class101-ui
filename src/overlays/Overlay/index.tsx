import * as React from 'react';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { isClient } from '../../utils';
import { Portal } from '../Portal';

export interface OverlayProps {
  className?: string;
  children: React.ReactNode;
  opened: boolean;
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

export const Overlay = React.memo<OverlayProps>(originalProps => {
  const { className, children, opened, closeable, onClose, zIndex } = useDefaultProps(originalProps, {
    closeable: true,
    zIndex: 3000,
  });

  useEffect(() => {
    if (isClient()) {
      document.body.style.overflow = opened ? 'hidden' : '';
    }
    return () => {
      if (isClient()) {
        document.body.style.overflow = '';
      }
    };
  }, [opened]);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Portal container={document.body}>
      <Container
        className={className}
        zIndex={zIndex}
        visible={opened}
        onClick={closeable ? handleCloseModal : undefined}
      >
        {children}
      </Container>
    </Portal>
  );
});

const Container = styled.div<{ zIndex: number; visible: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.zIndex};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.72);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  overscroll-behavior: contain;
`;
