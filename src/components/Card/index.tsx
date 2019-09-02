import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { gray800 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';

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

  /** Link(React Router Dom)에 쓸 URL */
  to?: string;

  /**	Native Anchor에 쓸 URL */
  href?: string;

  className?: string;
  children?: React.ReactNode;
  target?: string;
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
      href,
      target,
      className,
      onClick,
    } = this.props;

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const imgElements = () => {
      if (typeof coverImage === 'string') {
        return (
          <RatioCoverImage coverImageRatio={coverImageRatio} onClick={onClick}>
            {coverImageSrcSet ? (
              <img src={coverImage} alt={coverImageAlt || ''} srcSet={coverImageSrcSet} />
            ) : (
              <img src={coverImage} alt={coverImageAlt || ''} />
            )}
          </RatioCoverImage>
        );
      }
      return <CoverImage onClick={onClick}>{coverImage}</CoverImage>;
    };

    const innerElements = (
      <>
        {imgElements()}
        <Body onClick={onClick}>
          {extraTop}
          <Title>{title}</Title>
          {extraBottom}
        </Body>
      </>
    );

    if (to) {
      return (
        <Container className={className}>
          <LinkCardInner to={to} target={target} {...options}>
            {innerElements}
          </LinkCardInner>
          {children}
        </Container>
      );
    }
    if (href) {
      return (
        <Container className={className}>
          <AnchorCardInner href={href} target={target} {...options}>
            {innerElements}
          </AnchorCardInner>
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

const CoverImage = styled.div`
  overflow: hidden;
  border-radius: 3px;
`;

const RatioCoverImage = styled(CoverImage)<{ coverImageRatio: CoverRatio }>`
  overflow: hidden;
  border-radius: 3px;
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

const Body = styled.div`
  margin-top: 12px;
  > div:not(:first-child) {
    margin-top: 2px;
  }
`;

const Title = styled.div`
  ${body2};
  color: ${gray800};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const anchorCardStyle = css`
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

const LinkCardInner = styled(Link)`
  ${anchorCardStyle};
`;

const AnchorCardInner = styled.a`
  ${anchorCardStyle};
`;
