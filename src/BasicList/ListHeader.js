import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '../Typography';
import { body2Paragraph } from '../TextStyles';

type Props = {
  title?: string,
  subTitle?: string,
  typography?: string,
  to?: string,
  href?: string,
  target?: string,
};

const ListHeader = styled.div`
  margin-bottom: 16px;
`
const LinkListHeader = styled(Link)`
`;

const AnchorListHeader = styled.a`
`;

const SubTitle = styled.p`
  ${body2Paragraph}
  margin-top: 4px;
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

  const ListHeaderTitle = (<Typography md={ typography || "Subtitle1" } { ...restProps }>{title}</Typography>)
  if (to) {
    return (
      <ListHeader>
        <LinkListHeader 
          to={ to } 
          target={ target }
          { ...options }
        >
          { ListHeaderTitle }
        </LinkListHeader>
        { subTitle && <SubTitle>{ subTitle }</SubTitle>}
      </ListHeader>
    );
  } else if (href) {
    return (
      <ListHeader>
        <AnchorListHeader 
          href={ href }
          target={ target }
          { ...options }
        >
          { ListHeaderTitle }
        </AnchorListHeader>
        { subTitle && <SubTitle>{ subTitle }</SubTitle>}
      </ListHeader>
    );
  }
  return (
    <ListHeader>
      { ListHeaderTitle }
      { subTitle && <SubTitle>{ subTitle }</SubTitle>}
    </ListHeader>
  );
};