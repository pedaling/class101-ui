import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { gray800 } from '../Colors';
import { body2 } from '../TextStyles';

interface Props {
  title: string;
  coverImage: string | React.ReactNode;
  coverImageSrcSet?: string;
  coverImageAlt?: string;
  coverImageRatio?: '1*1' | '4*3' | '16*9';
  extraTop?: React.ReactNode;
  extraBottom?: React.ReactNode;
  to?: string;
  href?: string;
  children?: React.ReactNode;
  target?: string;
}

const Card = styled.div`
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

export default ({
  title,
  coverImage,
  coverImageSrcSet,
  coverImageAlt,
  coverImageRatio = '4*3',
  extraTop,
  extraBottom,
  children,
  to,
  href,
  target,
  ...restProps
}: Props) => {
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
      <Card>
        <LinkCardInner to={to} target={target} {...options}>
          {innerElements}
        </LinkCardInner>
        {children}
      </Card>
    );
  }
  if (href) {
    return (
      <Card>
        <AnchorCardInner href={href} target={target} {...options}>
          {innerElements}
        </AnchorCardInner>
        {children}
      </Card>
    );
  }
  return (
    <Card {...restProps}>
      {innerElements}
      {children}
    </Card>
  );
};
