import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { gray300 } from '../Colors';
import { Chevron } from '../Icon';
import { caption1 } from '../TextStyles';
import Typography, { Typo } from '../Typography';

interface Props {
  title?: ReactNode;
  description?: string;
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

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  ${caption1};
  margin-top: 4px;
`;

const Title = styled(Typography)`
  margin-right: 4px;
`;

export default ({ title, description, typography, to, href, target, ...restProps }: Props) => {
  const options: { rel?: string } = {};

  if (target === '_blank') {
    options.rel = 'noopener noreferrer';
  }

  if (to) {
    return (
      <Header>
        <Link to={to} target={target} {...options}>
          <HeaderTop>
            <Title md={typography || ('Subtitle1' as Typo)} {...restProps}>
              {title}
            </Title>
            <Chevron fillColor={gray300} />
          </HeaderTop>
        </Link>
        {description && <Description>{description}</Description>}
      </Header>
    );
  }
  if (href) {
    return (
      <Header>
        <a href={href} target={target} {...options}>
          <HeaderTop>
            <Title md={typography || ('Subtitle1' as Typo)} {...restProps}>
              {title}
            </Title>
            <Chevron fillColor={gray300} />
          </HeaderTop>
        </a>
        {description && <Description>{description}</Description>}
      </Header>
    );
  }
  return (
    <Header>
      <HeaderTop>
        <Title md={typography || ('Subtitle1' as Typo)} {...restProps}>
          {title}
        </Title>
      </HeaderTop>
      {description && <Description>{description}</Description>}
    </Header>
  );
};
