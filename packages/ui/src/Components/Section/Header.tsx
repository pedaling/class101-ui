import { Colors, TextStyles } from '@common';
import { Icon } from '@components';
import { Typo, Typography } from '@typography';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  ${TextStyles.caption1};
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
              <Icon.Chevron fillColor={Colors.gray300} />{' '}
            </Title>
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
              <Icon.Chevron fillColor={Colors.gray300} />
            </Title>
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
