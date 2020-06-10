import { TextButton } from 'components/Button';
import { gray500, gray800 } from 'core/Colors';
import { body2 } from 'core/TextStyles';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  useLineClamp: boolean;
  maxLine: number;
  readMoreText: string;
  hideText: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ReplyContent: FC<Props> = React.memo(props => {
  const { children, useLineClamp, maxLine, readMoreText, hideText, onClick } = props;

  const [lineClamped, setLineClamped] = useState(true);
  const [lineClampable, setLineClampable] = useState(false);

  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const getContentClamped = useCallback(() => {
    const { current } = contentRef;

    if (children && current) {
      return current.scrollHeight > current.clientHeight;
    }
    return false;
  }, [contentRef, children]);

  const calculateClamped = useCallback(() => {
    const initialLineClampable = useLineClamp && getContentClamped();
    setLineClampable(initialLineClampable);
    setLineClamped(initialLineClampable);
  }, [useLineClamp, getContentClamped]);

  useEffect(() => {
    calculateClamped();
  }, [calculateClamped]);

  const handleToggleClampButton = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      setLineClamped(!lineClamped);
      event.preventDefault();
      event.stopPropagation();
    },
    [lineClamped]
  );

  return (
    <>
      <Content useLineClamp={lineClamped} maxLine={maxLine} ref={contentRef} onClick={onClick}>
        {children}
      </Content>
      {lineClampable && (
        <ClampToggleButton onClick={handleToggleClampButton}>{lineClamped ? readMoreText : hideText}</ClampToggleButton>
      )}
    </>
  );
});

const Content = styled.div<{ useLineClamp: boolean; maxLine: number }>`
  ${body2};
  display: -webkit-box;
  -webkit-box-align: baseline;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-box-orient: vertical;
  color: ${gray800};
  ${props =>
    props.useLineClamp &&
    css`
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
