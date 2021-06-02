import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import styled, { css } from 'styled-components';
import { gray500, gray800 } from '../../../core/Colors';
import { body2 } from '../../../core/TextStyles';
import { TextButton } from '../../Button';

interface Props {
  useLineClamp: boolean;
  maxLine: number;
  readMoreText: string;
  hideText: string;
  hideReadMore?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ReplyContent: FC<Props> = React.memo((props) => {
  const {
    children, useLineClamp, maxLine, readMoreText, hideText, hideReadMore, onClick,
  } = props;

  const [lineClamped, setLineClamped] = useState(true);
  const [lineClampable, setLineClampable] = useState(false);

  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const getContentClamped = useCallback(() => {
    const { current } = contentRef;

    if (children && current) {
      return current.scrollHeight > current.clientHeight;
    }
    return false;
  }, [children]);

  const calculateClamped = useCallback(() => {
    const initialLineClampable = useLineClamp && getContentClamped();
    setLineClampable(initialLineClampable);
    setLineClamped(initialLineClampable);
  }, [useLineClamp, getContentClamped]);

  useEffect(() => {
    calculateClamped();
  }, [calculateClamped]);

  const handleToggleClampButton = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
    setLineClamped((value) => !value);
    event.preventDefault();
    event.stopPropagation();
  }, []);

  return (
    <>
      <Content useLineClamp={lineClamped} maxLine={maxLine} ref={contentRef} onClick={onClick}>
        {children}
      </Content>
      {!hideReadMore && lineClampable && (
        <ClampToggleButton onClick={handleToggleClampButton}>{lineClamped ? readMoreText : hideText}</ClampToggleButton>
      )}
    </>
  );
});

const Content = styled.div<{ useLineClamp: boolean; maxLine: number }>`
  ${body2};
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-box-orient: vertical;
  color: ${gray800};
  ${(props) => props.useLineClamp
    && css`
      -webkit-line-clamp: ${props.maxLine};
    `}
`;

const ClampToggleButton = styled(TextButton)`
  margin-top: 4px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  color: ${gray500};
  align-self: flex-start;
`;
