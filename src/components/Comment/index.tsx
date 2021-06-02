import React, { PureComponent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { Caption1, Caption2 } from '../../core';
import { gray500, orange600 } from '../../core/Colors';
import { Avatar, AvatarProps, AvatarSize } from '../Avatar';
import { ButtonIconPosition } from '../Button/ButtonIcon';
import { CommentAction, CommentActionProps } from './Action';
import { CommentContent } from './Content';

export enum CommentSize {
  SMALL = 'sm',
  LARGE = 'lg',
}

export interface CommentProps {
  name: string;

  /** 라인 숨김 여부. */
  disableLineClamp: boolean;

  readMoreText: string;
  hideText: string;
  hideReadMore?: boolean;

  /** 대댓글이 표시되는 여부. */
  showChildren: boolean;

  /** 보여질 라인의 개수. */
  maxLine?: number;

  size: CommentSize;
  width: string;
  nameDescription?: string;
  avatar?: ReactElement<AvatarProps>;
  timeText?: ReactNode;
  leftAction?: ReactElement<CommentActionProps>[];
  rightAction?: ReactElement<CommentActionProps>[];
  content?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onContentClick?: React.MouseEventHandler<HTMLDivElement>;
  passingClickEventClampButton?: boolean;
  'data-element-name'?: string;
}

const CommentImage = styled.img`
  width: 100%;
  border-radius: 3px;
`;

export class Comment extends PureComponent<CommentProps> {
  public static Action = CommentAction;

  public static Image = CommentImage;

  public static defaultProps: Partial<CommentProps> = {
    size: CommentSize.LARGE,
    width: '100%',
    disableLineClamp: false,
    showChildren: true,
    readMoreText: '전체보기',
    hideText: '숨기기',
  };

  public render() {
    const {
      avatar,
      name,
      nameDescription,
      timeText,
      width,
      leftAction,
      rightAction,
      size,
      content,
      children,
      disableLineClamp,
      showChildren,
      maxLine = size === CommentSize.SMALL ? 2 : 4,
      className,
      onClick,
      onContentClick,
      hideReadMore = false,
      readMoreText,
      hideText,
      'data-element-name': dataElementName,
    } = this.props;
    const avatarSize = size === CommentSize.LARGE ? AvatarSize.LARGE : AvatarSize.MEDIUM;
    const clonedAvatar = avatar ? (
      React.cloneElement(avatar, {
        size: avatarSize,
      })
    ) : (
      <Avatar size={avatarSize} text={name} />
    );

    return (
      <Container width={width} className={className} onClick={onClick} data-element-name={dataElementName}>
        <AvatarWrapper>{clonedAvatar}</AvatarWrapper>
        <ContentContainer>
          <TitleContainer>
            <NameContainer>
              <Caption1 fontWeight="600">{name}</Caption1>
              {nameDescription && <NameDescription>{nameDescription}</NameDescription>}
            </NameContainer>
            <Caption2 color={gray500}>{timeText}</Caption2>
          </TitleContainer>
          <CommentContent
            readMoreText={readMoreText}
            hideText={hideText}
            hideReadMore={hideReadMore}
            useLineClamp={!disableLineClamp}
            maxLine={maxLine}
            onClick={onContentClick}
          >
            {content}
          </CommentContent>
          <ActionWrapper>
            <LeftActionContainer onClick={this.preventPropagation}>
              {leftAction
                && leftAction.map((action, key) => React.cloneElement(action, { position: ButtonIconPosition.LEFT, key }))}
            </LeftActionContainer>
            <RightActionContainer onClick={this.preventPropagation}>
              {rightAction
                && rightAction.map((action, key) => React.cloneElement(action, { position: ButtonIconPosition.RIGHT, key }))}
            </RightActionContainer>
          </ActionWrapper>
          {showChildren
            && children
            && React.Children.map(
              children,
              (element) => element
                && React.cloneElement(element as React.ReactElement<CommentProps>, {
                  width: '100%',
                  size: CommentSize.SMALL,
                }),
            )}
        </ContentContainer>
      </Container>
    );
  }

  private preventPropagation: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
}

const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: row;
  max-width: ${(props) => props.width};
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-left: 8px;
  flex: 1 1 auto;
  flex-direction: column;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameDescription = styled(Caption2)`
  margin-left: 4px;
  color: ${orange600};
  font-weight: 600;
`;

const ActionWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 12px;
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
