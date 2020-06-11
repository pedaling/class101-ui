import React, { ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { BreakPoints, Caption1, Caption2 } from '../../core';
import { gray500, gray800, orange500 } from '../../core/Colors';
import { Avatar, AvatarProps, AvatarSize } from '.././Avatar';
import { ButtonIconPosition } from '../Button/ButtonIcon';
import { ReplyAction, ReplyActionProps } from './Action';
import { ReplyContent } from './Content';

export enum ReplySize {
  SMALL = 'sm',
  LARGE = 'lg',
}

export interface ReplyProps {
  name: string;

  /** 라인 숨김 여부. */
  disableLineClamp: boolean;

  readMoreText: string;
  hideText: string;

  /** 대 댓글이 표시 되는 여부. */
  showChildren: boolean;

  /** 보여질 라인의 개수. */
  maxLine?: number;

  nameDescriptionColor?: string;

  size: ReplySize;
  width: string;
  nameDescription?: string;
  avatar?: ReactElement<AvatarProps>;
  footer?: ReactNode;
  timeText?: ReactNode;
  leftAction?: ReactElement<ReplyActionProps>[];
  rightAction?: ReactElement<ReplyActionProps>[];
  content?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onContentClick?: React.MouseEventHandler<HTMLDivElement>;
  passingClickEventClampButton?: boolean;
}

const ReplyImage = styled.img`
  width: 100%;
  border-radius: 3px;
  margin-bottom: 2px;
`;

export const Reply = Object.assign(
  React.memo<ReplyProps>(props => {
    const {
      avatar,
      name,
      nameDescription,
      nameDescriptionColor = orange500,
      timeText,
      width = '100%',
      size = ReplySize.LARGE,
      content,
      leftAction,
      rightAction,
      children,
      disableLineClamp = false,
      showChildren = true,
      footer,
      maxLine = size === ReplySize.SMALL ? 2 : 4,
      className,
      onClick,
      onContentClick,
      readMoreText = '전체보기',
      hideText = '숨기기',
    } = props;

    const avatarSize = useMemo(() => {
      return size === ReplySize.LARGE ? AvatarSize.LARGE : AvatarSize.MEDIUM;
    }, [size]);

    const clonedAvatar = useMemo(() => {
      return avatar ? (
        React.cloneElement(avatar, {
          size: avatarSize,
        })
      ) : (
        <Avatar size={avatarSize} text={name} />
      );
    }, [avatar, avatarSize, name]);

    const preventPropagation = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
      event.stopPropagation();
    }, []);

    const [contentMargin, setContentMargin] = useState(0);

    const handleSetContentMargin = useCallback(
      (ref: HTMLDivElement | null) => {
        if (ref && size === ReplySize.SMALL) {
          setContentMargin(ref.clientWidth + 12);
        } else {
          return;
        }
      },
      [setContentMargin, size]
    );

    return (
      <Container width={width} className={className} onClick={onClick}>
        <DescriptionContainer>
          <AvatarWrapper ref={handleSetContentMargin}>{clonedAvatar}</AvatarWrapper>
          <TitleContainer>
            <NameContainer>
              <Caption1 fontWeight="600" color={gray800}>
                {name}
              </Caption1>
              {size === ReplySize.SMALL && <TimeText size={size}>{timeText}</TimeText>}
              {nameDescription && (
                <NameDescription color={nameDescriptionColor} size={size}>
                  {nameDescription}
                </NameDescription>
              )}
            </NameContainer>
            {size !== ReplySize.SMALL && <TimeText size={size}>{timeText}</TimeText>}
          </TitleContainer>
        </DescriptionContainer>
        <ContentWrapper marginLeft={contentMargin} size={size}>
          <ReplyContent
            readMoreText={readMoreText}
            hideText={hideText}
            useLineClamp={!disableLineClamp}
            maxLine={maxLine}
            onClick={onContentClick}
          >
            {content}
          </ReplyContent>
        </ContentWrapper>
        <ActionWrapper
          hasAction={Boolean(leftAction?.length || rightAction?.length)}
          marginLeft={contentMargin}
          size={size}
        >
          <LeftActionContainer onClick={preventPropagation}>
            {leftAction &&
              leftAction.map((action, key) => React.cloneElement(action, { position: ButtonIconPosition.LEFT, key }))}
          </LeftActionContainer>
          <RightActionContainer onClick={preventPropagation}>
            {rightAction &&
              rightAction.map((action, key) => React.cloneElement(action, { position: ButtonIconPosition.RIGHT, key }))}
          </RightActionContainer>
        </ActionWrapper>
        <CommentContainer marginLeft={contentMargin}>
          {showChildren &&
            children &&
            React.Children.map(
              children,
              element =>
                element &&
                React.cloneElement(element as React.ReactElement<ReplyProps>, {
                  width: '100%',
                  size: ReplySize.SMALL,
                })
            )}
        </CommentContainer>
        <FooterContainer marginLeft={contentMargin}>{footer}</FooterContainer>
      </Container>
    );
  }),
  { Action: ReplyAction, Image: ReplyImage }
);

const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.width};
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div<{ size: ReplySize; marginLeft: number }>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.size === ReplySize.SMALL ? '4px' : '12px')};
  margin-left: ${props => (props.size === ReplySize.SMALL ? `${props.marginLeft}px` : '0')};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 12px;
`;

const NameDescription = styled(Caption2)<{ size: ReplySize }>`
  display: flex;
  margin-left: ${props => (props.size === ReplySize.SMALL ? 'auto' : '4px')};
`;

const TimeText = styled(Caption2)<{ size: ReplySize }>`
  margin-top: ${props => (props.size === ReplySize.SMALL ? '0' : '2px')};
  margin-left: ${props => (props.size === ReplySize.SMALL ? '8px' : '0')};
  color: ${gray500};
`;

const NameContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const ActionWrapper = styled.div<{ hasAction: boolean; marginLeft: number; size: ReplySize }>`
  display: flex;
  margin-left: ${props => `${props.marginLeft}px`};
  margin-top: ${props => (props.hasAction ? '9px' : '0')};
  margin-bottom: 24px;
  ${BreakPoints.media.sm`
    margin-bottom: ${props => (props.size === ReplySize.SMALL ? '14px' : '24px')}
  `};
  justify-content: space-between;
`;

const LeftActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;

const RightActionContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-self: flex-end;
`;

const CommentContainer = styled.div<{ marginLeft: number }>`
  margin-left: ${props => (props.marginLeft === 0 ? '24px' : `${props.marginLeft}px`)};
`;

const FooterContainer = styled.div<{ marginLeft: number }>`
  margin-left: ${props => `${props.marginLeft}px`};
`;
