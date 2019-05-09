import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { gray800 } from '../Colors';
import { body2 } from '../TextStyles';

interface Props {
  /** 카드 타이틀 */
  title: string;

  /** 카드 이미지 */
  coverImage: string | React.ReactNode;

  /** 카드 srcSet */
  coverImageSrcSet?: string;

  /** 대체 텍스트 */
  coverImageAlt?: string;

  /** 카드 이미지 비율 */
  coverImageRatio: '1*1' | '4*3' | '16*9';

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
}

export default class Card extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    coverImageRatio: '4*3',
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
    } = this.props;

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const imgElements = () => {
      if (typeof coverImage === 'string') {
        return coverImageSrcSet ? (
          <img src={coverImage} alt={coverImageAlt || ''} srcSet={coverImageSrcSet} />
        ) : (
          <img src={coverImage} alt={coverImageAlt || ''} />
        );
      }
      return coverImage;
    };

    const innerElements = (
      <>
        <CoverImage coverImageRatio={coverImageRatio}>{imgElements()}</CoverImage>
        <Body>
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

const CoverImage = styled.div<{ coverImageRatio: '1*1' | '4*3' | '16*9' }>`
  overflow: hidden;
  border-radius: 2px;
  ${props => {
    const ratios = props.coverImageRatio.split('*');
    return css`
      position: relative;
      padding-bottom: ${(Number(ratios[1]) / Number(ratios[0])) * 100}%;
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
  margin-top: 4px;
  > div {
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
