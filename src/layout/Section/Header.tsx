import React, { memo, ReactNode, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Colors } from '../../core';

import { TextButton } from '../../components';
import { media } from '../../core/BreakPoints';
import { gray300, gray600 } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { BaseTypography, HeadlineTypoProps, Typo } from '../../core/Typography/BaseTypography';
import { ChevronRight } from '../../Icon';

export type TypographyProps = { typography?: Typo } & Partial<HeadlineTypoProps>;

interface Props {
  title?: ReactNode;
  description?: string;
  typographyProps?: TypographyProps;
  to?: string;
  href?: string;
  target?: string;
  linkText?: string;
  onClick?: () => void;
}

export const Header = memo(({ title, description, typographyProps, to, href, target, linkText, onClick }: Props) => {
  const hasLinkText = Boolean(linkText);

  const renderTitle = useCallback(() => {
    const { typography = 'Subtitle1', ...restTypographyProps } = typographyProps || {};
    return (
      <Title md={typography} {...restTypographyProps}>
        {title}
      </Title>
    );
  }, [title, typographyProps]);

  const renderLinkHeaderTop = useCallback(() => {
    return (
      <>
        <HeaderTop>
          {renderTitle()}
          <LinkButton />
        </HeaderTop>
        {description && <Description color={gray600}>{description}</Description>}
      </>
    );
  }, [description, renderTitle]);

  const renderActionHeader = useCallback(() => {
    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    if (to) {
      return (
        <>
          <Link to={to} target={target} {...options}>
            {renderLinkHeaderTop()}
          </Link>
          {hasLinkText && (
            <TextLink to={to} {...options}>
              {linkText}
            </TextLink>
          )}
        </>
      );
    }
    if (href) {
      return (
        <>
          <a href={href} target={target} {...options}>
            {renderLinkHeaderTop()}
          </a>
          {hasLinkText && (
            <TextLink href={href} target={target} {...options}>
              {linkText}
            </TextLink>
          )}
        </>
      );
    }

    if (onClick) {
      return (
        <>
          <ActionContainer onClick={onClick}>{renderLinkHeaderTop()}</ActionContainer>
          {hasLinkText && <TextLink onClick={onClick}>{linkText}</TextLink>}
        </>
      );
    }
  }, [target, to, href, onClick, renderLinkHeaderTop, hasLinkText, linkText]);

  return (
    <Container hasLinkText={hasLinkText}>
      {to || href || onClick ? (
        renderActionHeader()
      ) : (
        <>
          <HeaderTop>{renderTitle()}</HeaderTop>
          {description && <Description color={gray600}>{description}</Description>}
        </>
      )}
    </Container>
  );
});

const TextLink = styled(TextButton)`
  margin-left: 24px;
  font-weight: bold;
  color: ${Colors.gray600};
  > a {
    color: ${Colors.gray600};
  }
  ${media.sm`
    display: none;
  `}
`;

const LinkButton = styled(ChevronRight)`
  transition: opacity 150ms ease-in-out;
  opacity: 0;
  ${media.sm`
    opacity: 1;
    path {
      fill: ${gray300}
    }
  `};
`;

const ActionContainerStyle = css`
  display: inline-flex;
  flex-direction: column;
  &:hover {
    ${LinkButton} {
      opacity: 1;
    }
  }
`;

const ActionContainer = styled.div`
  ${ActionContainerStyle};
  cursor: pointer;
`;

const Container = styled.div<{ hasLinkText?: boolean }>`
  margin-bottom: 16px;
  ${props =>
    props.hasLinkText
      ? `display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `
      : `display: inline-flex;
        flex-direction: column
  `};
  a {
    ${ActionContainerStyle};
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  ${body2};
  margin-top: 4px;
`;

const Title = styled(BaseTypography)``;
