import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '../Typography';
import { gray300 } from '../Colors';
import { body2Paragraph } from '../TextStyles';

type Props = {
  title?: string,
  subTitle?: string,
  typography?: string,
  to?: string,
  href?: string,
  target?: string,
};

const Header = styled.div`
  margin-bottom: 16px;
  a {
    display: inline-block;
    position: relative;
    padding-right: 24px;
  }
`;


const HeaderTitle = styled(Typography)`
  display: inline-block;
`;

const SubTitle = styled.p`
  ${body2Paragraph}
  margin-top: 4px;
`;

const HeaderIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  svg {
    display: block;
  }
`;

export default ({
  title,
  subTitle,
  typography,
  to,
  href,
  target,
  ...restProps,
}: Props) => {
  const options = {};

  if (target === '_blank') {
    options.rel = 'noopener noreferrer';
  }

  const sectionHeaderTitle=(
    <HeaderTitle 
      md={ typography || "Subtitle1" } 
      { ...restProps }
    >{title}
    </HeaderTitle>
  );

  const sectionHeaderIcon=(
    <HeaderIcon>
      <svg width={ 24 } height={ 24 } viewBox="0 0 24px 24px">
        <path
          fill={ gray300 }
          fillRule="evenodd"
          d="M8.5 18.5l6-6.5-6-6.5L10 4l7.5 8-7.5 8z"
        />
      </svg>
    </HeaderIcon>
  );
  
  if (to) {
    return (
      <Header>
        <Link
          to={ to } 
          target={ target }
          { ...options }
        >
          { sectionHeaderTitle }
          { sectionHeaderIcon }
        </Link>
        { subTitle && <SubTitle>{ subTitle }</SubTitle>}
      </Header>
    );
  } else if (href) {
    return (
      <Header>
        <a
          href={ href }
          target={ target }
          { ...options }
        >
          { sectionHeaderTitle }
          { sectionHeaderIcon }
        </a>
        { subTitle && <SubTitle>{ subTitle }</SubTitle>}
      </Header>
    );
  }
  return (
    <Header>
      { sectionHeaderTitle }
      { subTitle && <SubTitle>{ subTitle }</SubTitle>}
    </Header>
  );
}