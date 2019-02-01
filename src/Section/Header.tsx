import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { gray300 } from '../Colors';
import { Chevron } from '../Icon';
import { body2 } from '../TextStyles';
import Typography, { Typo, TypoProps } from '../Typography';

interface Props {
  title?: ReactNode;
  subTitle?: string;
  typography?: Typo;
  to?: string;
  href?: string;
  target?: string;
}

const Header = styled.div`
  margin-bottom: 16px;
  a {
    display: inline-block;
    position: relative;
    padding-right: 24px;
  }
`;

const HeaderTop: any = styled(Typography)`
  display: flex;
  align-items: center;
`;

const SubTitle = styled.p`
  ${body2}
  margin-top: 4px;
`;

const Title = styled.div`
  margin-right: 4px;
`;

export default ({ title, subTitle, typography, to, href, target, ...restProps }: Props) => {
  const options: { rel?: string } = {};

  if (target === '_blank') {
    options.rel = 'noopener noreferrer';
  }

  if (to) {
    return (
      <Header>
        <Link to={to} target={target} {...options}>
          <HeaderTop md={typography || ('Subtitle1' as Typo)} {...restProps}>
            <Title>{title}</Title>
            <Chevron fillColor={gray300} />
          </HeaderTop>
        </Link>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Header>
    );
  }
  if (href) {
    return (
      <Header>
        <a href={href} target={target} {...options}>
          <HeaderTop md={typography || ('Subtitle1' as Typo)} {...restProps}>
            <Title>{title}</Title>
            <Chevron fillColor={gray300} />
          </HeaderTop>
        </a>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Header>
    );
  }
  return (
    <Header>
      <HeaderTop md={typography || ('Subtitle1' as Typo)} {...restProps}>
        {title}
      </HeaderTop>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Header>
  );
};
