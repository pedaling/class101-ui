import { elevation2 } from 'core/ElevationStyles';
import Position from 'core/Position';
import { body2, caption1 } from 'core/TextStyles';
import {
  createElement,
  CSSProperties,
  memo,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import styled from 'styled-components';
import { isClient } from 'utils';
import Portal from 'overlays/Portal';
import { tooltipBackgroundColors, TooltipColor, tooltipColors } from './colors';
import adjustPositionWithTooltip from './utils';

interface Props {
  position?: Position;
  content: ReactNode;
  contentTitle?: string;
  color?: TooltipColor;
  children: string | JSX.Element;
  wrapperTagName?: string;
  wrapperStyle?: CSSProperties;
  targetStyle?: CSSProperties;
  fill?: boolean;
  isOpen?: boolean;
}

export const Tooltip = memo(
  ({
    position = Position.BOTTOM,
    content,
    contentTitle,
    wrapperStyle,
    color = TooltipColor.DEFAULT,
    children,
    targetStyle,
    wrapperTagName = 'span',
    fill,
    isOpen,
    ...restProps
  }: Props) => {
    const [opened, setOpened] = useState(isOpen ?? false);

    const handleMouseEnter = useCallback(() => {
      if (!opened) {
        setOpened(true);
      }
    }, [opened, setOpened]);

    const handleMouseLeave = useCallback(() => {
      if (opened) {
        setOpened(false);
      }
    }, [opened, setOpened]);

    useEffect(() => {
      if (isOpen !== undefined && isOpen !== null) {
        setOpened(isOpen);
      }
    }, [setOpened, isOpen]);

    const renderChild = useCallback(
      (ref: Ref<HTMLElement>) => {
        const childProps = {
          ref,
          style: { display: fill ? 'flex' : 'inline-flex', ...(wrapperStyle || {}) },
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          ...restProps,
        };

        return createElement(wrapperTagName, childProps, children);
      },
      [children, wrapperTagName, handleMouseEnter, handleMouseLeave, wrapperStyle, fill, restProps],
    );

    if (!isClient()) {
      return null;
    }

    return (
      <Manager>
        <Reference>{({ ref }) => renderChild(ref)}</Reference>
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
              <PopoverTarget
                isVisible={opened}
                ref={ref}
                style={{ ...style, ...(targetStyle || {}) }}
              >
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
  },
);

export { TooltipColor };

const ArrowSVG = ({
  tooltipColor,
  ...props
}: {
  tooltipColor: TooltipColor;
  className?: string;
}) => (
  <svg viewBox="7 10 10 5" width="16px" {...props}>
    <path fill={tooltipBackgroundColors[tooltipColor]} fillRule="evenodd" d="M17 10l-5 5-5-5z" />
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
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 200ms;
`;

const PopoverContent = styled.div<{ tooltipColor: TooltipColor }>`
  ${caption1};
  margin: 8px;
  padding: 12px;
  border-radius: 3px;
  color: ${(props) => tooltipColors[props.tooltipColor]};
  background-color: ${(props) => tooltipBackgroundColors[props.tooltipColor]};
  ${elevation2};
`;
