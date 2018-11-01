import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { body2Black, tiny1Gray } from '../TextStyles';

type Props = {
  title: string,
  image: string | Node,
  imageSrcSet?: string,
  imageAlt?: string,
  imageRatio?: '1*1' | '4*3' | '16*9',
  tag?: Array<string>,
  extraTop?: Node,
  extraBottom?: Node,
  size?: "lg" | "sm",
  to?: string,
  href?: string,
};

const Card = styled.div`
  width: 100%;
`;

const ImageBox = styled.div`
  overflow: hidden;
  border-radius: ${props => props.size === 'sm' ? 2 : 4}px;
  ${props => {
    const ratios = props.imageRatio.split('*');
    return (
      `
      position: relative;
      padding-bottom: ${ratios[1] / ratios[0] * 100}%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }`
      )
    }}
`;

const TextBox = styled.div`
  margin-top: ${props => props.size === 'sm' ? 4 : 8}px;
`;

const Title = styled.div`
  ${body2Black};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TinyBox = styled.div`
  margin-left: -4px;
  &:after {
    content: '';
    display: block;
    clear: left;
  }
`;

const Tiny = styled.div`
  float: left;
  margin-left: 4px; 
  ${tiny1Gray}
`;

const anchorCardStyle = css`
  text-decoration: none;
  img {
    transition: transform 0.5s, opacity 0.5s;
    opacity: 1;
    transform: scale(1);
  }
  &:link, &:visited {
    color: inherit;
  }
  &:hover,
  &:focus {
    img {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
`;

const CardInner = styled.div`
`;

const LinkCardInner = styled(Link)`
  ${anchorCardStyle};
`;

const AnchorCardInner = styled.a`
  ${anchorCardStyle};
`;

export default ({
  title,
  image,
  imageSrcSet,
  imageAlt,
  imageRatio = "4*3",
  size = "lg",
  tag = [],
  extraTop,
  extraBottom,
  children,
  to,
  href,
  target,
  ...restProps
}: Props) => {

  const options = {};

  if (target === '_blank') {
    options.rel = 'noopener noreferrer';
  }

  const imgElements = () => {
    if(typeof image === 'string') {
      return (
        imageSrcSet ? 
          <img src={ image } alt={ imageAlt || "" } srcSet={ imageSrcSet } /> : 
          <img src={ image } alt={ imageAlt || "" } />
      )} 
      return image;
  };

  const tagElements = (
    <TinyBox>
      {
        tag.map((t, i) => 
          <Tiny key={ i.toString() }>{t}</Tiny>
        )
      }
    </TinyBox> 
  );

  const innerElements = (
    <CardInner>
      <ImageBox size={ size } imageRatio={ imageRatio } >
        { imgElements() }
      </ImageBox>
      <TextBox size={ size }>
        { extraTop }
        <Title>{title}</Title>
        { tag.length > 0 && tagElements }
        { extraBottom }
      </TextBox>
    </CardInner>
  )

  if(to) {
    return (
      <Card>
        <LinkCardInner 
          to={ to }
          target={ target }
          { ...options }
        >
          { innerElements }
        </LinkCardInner>
        { children }
      </Card>
    )
  } else if(href) {
    return (
      <Card>
        <AnchorCardInner 
          href={ href }
          target={ target }
          { ...options }
        >
          { innerElements }
        </AnchorCardInner>
        { children }
      </Card>
    )
  }
  return (
    <Card  { ...restProps }>
      { innerElements }
      { children }
    </Card>
  )
}