import React, { useCallback, useState, useEffect } from 'react';
import { TooltipColor, tooltipColors, tooltipBackgroundColors } from './colors';
import styled from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';
import { adjustPositionWithTooltip } from './utils';
import { Position } from '../../core';
import { body2, caption1 } from '../../core/TextStyles';
import { elevation2 } from '../../core/ElevationStyles';
import { Portal } from '../Portal';

interface Props {
  position?: Position;
  content: React.ReactNode;
  contentTitle?: string;
  color?: TooltipColor;
  children: string | JSX.Element;
  wrapperTagName?: string;
  wrapperStyle?: React.CSSProperties;
  targetStyle?: React.CSSProperties;
  fill?: boolean;
  isOpen?: boolean;
}

export const Tooltip: React.FC<Props> = React.memo(props => {
  const {
    position = Position.BOTTOM,
    content,
    contentTitle,
    wrapperStyle,
    color = TooltipColor.DEFAULT,
    children,
    targetStyle,
    wrapperTagName = 'span',
    fill,
    ...restProps
  } = props;

  const [isOpen, setIsOpen] = useState(props.isOpen ?? false);

  const handleMouseEnter = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen, setIsOpen]);

  const handleMouseLeave = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (props.isOpen !== undefined && props.isOpen !== null) {
      setIsOpen(props.isOpen);
    }
  }, [setIsOpen, props.isOpen]);

  const renderChild = useCallback(
    (ref: React.Ref<any>) => {
      const props = {
        ref,
        style: { display: fill ? 'flex' : 'inline-flex', ...(wrapperStyle || {}) },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...restProps,
      };

      return React.createElement(wrapperTagName, props, children);
    },
    [children, wrapperTagName, handleMouseEnter, handleMouseLeave, wrapperStyle, fill, restProps]
  );

  return (
    <Manager>
      <Reference>{({ ref }) => renderChild(ref)}</Reference>{' '}
      <Portal container={document.body}>
        <Popper
          placement={adjustPositionWithTooltip(position)}
          modifiers={{
            preventOverflow: {
              boundariesElement: 'viewport',
            },
          }}
        >
          {({ ref, style, placement }) => (
            <PopoverTarget isVisible={isOpen} ref={ref} style={{ ...style, ...(targetStyle || {}) }}>
              <PopoverContent tooltipColor={color} data-placement={placement}>
                {contentTitle && <PopoverTitle>{contentTitle}</PopoverTitle>}
                {content}
              </PopoverContent>
              <PopperArrow data-placement={placement} tooltipColor={color} />
            </PopoverTarget>
          )}
        </Popper>
      </Portal>
    </Manager>
  );
});

export { TooltipColor };

const ArrowSVG = (props: { tooltipColor: TooltipColor; className?: string }) => (
  <svg viewBox="7 10 10 5" width="16px" {...props}>
    <path fill={tooltipBackgroundColors[props.tooltipColor]} fillRule="evenodd" d="M17 10l-5 5-5-5z" />
  </svg>
);

const PopperArrow = styled(ArrowSVG)`
  position: absolute;

  &[data-placement*='bottom'] {
    top: 0;
    left: calc(50% - 8px);
    transform: rotate(180deg);
  }
  &[data-placement*='top'] {
    left: calc(50% - 8px);
    bottom: 0;
  }
  &[data-placement*='right'] {
    left: -4px;
    top: calc(50% - 4px);
    transform: rotate(90deg);
  }
  &[data-placement*='left'] {
    right: -4px;
    top: calc(50% - 4px);
    transform: rotate(270deg);
  }
`;

const PopoverTitle = styled.h2`
  ${body2};
  color: inherit;
  font-weight: bold;
  margin-bottom: 2px;
`;

const PopoverTarget = styled.div<{ isVisible: boolean }>`
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 200ms;
`;

const PopoverContent = styled.div<{ tooltipColor: TooltipColor }>`
  ${caption1};
  margin: 8px;
  padding: 12px;
  border-radius: 3px;
  color: ${props => tooltipColors[props.tooltipColor]};
  background-color: ${props => tooltipBackgroundColors[props.tooltipColor]};
  ${elevation2};
`;
