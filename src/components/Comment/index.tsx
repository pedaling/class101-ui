import React, { PureComponent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import { Caption1, Caption2 } from '../../core';
import { gray600, orange600 } from '../../core/Colors';
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
    } = this.props;
    const avatarSize = size === CommentSize.LARGE ? AvatarSize.LARGE : AvatarSize.SMALL;
    const clonedAvatar = avatar ? (
      React.cloneElement(avatar, {
        size: avatarSize,
      })
    ) : (
      <Avatar size={avatarSize} text={name} />
    );

    return (
      <Container width={width} className={className}>
        <AvatarWrapper>{clonedAvatar}</AvatarWrapper>
        <ContentContainer>
          <TitleContainer>
            <NameContainer>
              <Caption1 fontWeight="600">{name}</Caption1>
              {nameDescription && <NameDescription>{nameDescription}</NameDescription>}
            </NameContainer>
            <Caption1 color={gray600}>{timeText}</Caption1>
          </TitleContainer>
          <CommentContent useLineClamp={!disableLineClamp} maxLine={maxLine}>
            {content}
          </CommentContent>
          <ActionWrapper>
            <LeftActionContainer>
              {leftAction &&
                leftAction.map((action, key) => React.cloneElement(action, { position: ButtonIconPosition.LEFT, key }))}
            </LeftActionContainer>
            <RightActionContainer>
              {rightAction &&
                rightAction.map((action, key) =>
                  React.cloneElement(action, { position: ButtonIconPosition.RIGHT, key })
                )}
            </RightActionContainer>
          </ActionWrapper>
          {showChildren &&
            children &&
            React.Children.map(
              children,
              element =>
                element &&
                React.cloneElement(element as React.ReactElement<CommentProps>, {
                  width: '100%',
                  size: CommentSize.SMALL,
                })
            )}
        </ContentContainer>
      </Container>
    );
  }
}

const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: row;
  max-width: ${props => props.width};
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 4px;
  margin-left: 8px;
  flex: 1 1 auto;
  flex-direction: column;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2px;
  align-items: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
