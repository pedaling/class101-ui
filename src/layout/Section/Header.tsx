import React, { ReactNode, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

export class Header extends PureComponent<Props> {
  public render = () => {
    const { to, href, onClick, description, linkText } = this.props;

    return (
      <Container hasLinkText={!!linkText}>
        {to || href || onClick ? (
          this.renderActionHeader()
        ) : (
          <>
            <HeaderTop>{this.renderTitle()}</HeaderTop>
            {description && <Description color={gray600}>{description}</Description>}
          </>
        )}
      </Container>
    );
  };

  private renderTitle = () => {
    const { typographyProps, title } = this.props;
    const { typography = 'Subtitle1', ...restTypographyProps } = typographyProps || {};
    return (
      <Title md={typography} {...restTypographyProps}>
        {title}
      </Title>
    );
  };

  private renderLinkHeaderTop = () => {
    const { description } = this.props;
    return (
      <>
        <HeaderTop>
          {this.renderTitle()}
          <LinkButton />
        </HeaderTop>
        {description && <Description color={gray600}>{description}</Description>}
      </>
    );
  };

  private renderActionHeader = () => {
    const { target, to, href, onClick, linkText } = this.props;
    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    if (to) {
      return (
        <>
          <Link to={to} target={target} {...options}>
            {this.renderLinkHeaderTop()}
          </Link>
          {!!linkText && (
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
            {this.renderLinkHeaderTop()}
          </a>
          {!!linkText && (
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
          <ActionContainer onClick={onClick}>{this.renderLinkHeaderTop()}</ActionContainer>
          {!!linkText && <TextLink onClick={onClick}>{linkText}</TextLink>}
        </>
      );
    }
  };
}

const TextLink = styled(TextButton)`
  margin-left: 24px;
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
