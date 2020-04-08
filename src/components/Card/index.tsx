import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { LinkBlock } from '../../core';
import { gray100, gray900 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { ifDarkTheme } from '../../utils';

export type CoverRatioType = 0.5625 | 0.625 | 0.75 | 1.333 | 1;

export enum CoverRatio {
  RATIO_16X9 = 0.5625,
  RATIO_16X10 = 0.625,
  RATIO_4X3 = 0.75,
  RATIO_3X4 = 1.333,
  RATIO_1X1 = 1,
}

export interface CardProps {
  /** 카드 타이틀 */
  title: string;

  /** 카드 이미지 */
  coverImage: string | React.ReactNode;

  /** 카드 srcSet */
  coverImageSrcSet?: string;

  /** 대체 텍스트 */
  coverImageAlt?: string;

  /** 카드 이미지 비율 */
  coverImageRatio: CoverRatioType;

  /** 타이틀 위에 들어갈 추가 노드 */
  extraTop?: React.ReactNode;

  /** 타이틀 아래에 들어갈 추가 노드 */
  extraBottom?: React.ReactNode;

  /** Link에 쓸 URL */
  to?: string;

  /** 새 탭 열기 여부 */
  external?: boolean;

  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export class Card extends PureComponent<CardProps> {
  public static defaultProps: Partial<CardProps> = {
    coverImageRatio: CoverRatio.RATIO_4X3,
  };

  public render() {
    const {
      title,
      coverImage,
      coverImageSrcSet,
      coverImageAlt,
      coverImageRatio,
      extraTop,
      extraBottom,
      children,
      to,
      external,
      className,
      onClick,
    } = this.props;

    const imgElements = () => {
      if (typeof coverImage === 'string') {
        return (
          <RatioCoverImageArea coverImageRatio={coverImageRatio} onClick={onClick}>
            <img src={coverImage} alt={coverImageAlt || ''} srcSet={coverImageSrcSet || undefined} />
          </RatioCoverImageArea>
        );
      }
      return <CoverImageArea onClick={onClick}>{coverImage}</CoverImageArea>;
    };

    const innerElements = (
      <>
        {imgElements()}
        <Body onClick={onClick}>
          {extraTop && <ExtraTopArea>{extraTop}</ExtraTopArea>}
          <Title>{title}</Title>
          {extraBottom && <ExtraBottomArea>{extraBottom}</ExtraBottomArea>}
        </Body>
      </>
    );

    if (to) {
      return (
        <Container className={className}>
          <LinkCardInner to={to} external={external}>
            {innerElements}
          </LinkCardInner>
          {children}
        </Container>
      );
    }

    return (
      <Container className={className}>
        {innerElements}
        {children}
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const CoverImageArea = styled.div`
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 8px;
`;

const RatioCoverImageArea = styled(CoverImageArea)<{ coverImageRatio: CoverRatio }>`
  ${props => {
    return css`
      position: relative;
      padding-bottom: ${props.coverImageRatio * 100}%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  }}
`;

const Body = styled.div``;

const Title = styled.div`
  ${body2};
  color: ${ifDarkTheme(gray100, gray900)};
  height: 40px;
  overflow: hidden;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ExtraTopArea = styled.div`
  margin-bottom: 4px;
  margin-top: 4px;
`;

const ExtraBottomArea = styled.div``;

const LinkCardInner = styled(LinkBlock)`
  img {
    transition: transform 0.5s, opacity 0.5s;
    opacity: 1;
    transform: scale(1);
  }
  &:hover,
  &:focus {
    img {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
`;
