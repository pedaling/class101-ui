import React, {
  memo, ReactNode, useCallback, useMemo,
} from 'react';
import styled, { css } from 'styled-components';

import { TextButton } from '../../components';
import { media } from '../../core/BreakPoints';
import { gray300, gray600 } from '../../core/Colors';
import { Link } from '../../core/Link';
import { body2 } from '../../core/TextStyles';
import { BaseTypography, HeadlineTypoProps, Typo } from '../../core/Typography/BaseTypography';
import { ChevronRightIcon } from '../../Icon';

export type TypographyProps = { typography?: Typo } & Partial<HeadlineTypoProps>;

interface Props {
  title?: ReactNode;
  description?: string;
  typographyProps?: TypographyProps;
  to?: string;
  external?: boolean;
  linkText?: string;
  onClick?: () => void;
}

export const Header = memo(({
  title, description, typographyProps, to, external, linkText, onClick,
}: Props) => {
  const hasLinkText = useMemo(() => Boolean(linkText), [linkText]);

  const renderTitle = useCallback(() => {
    const { typography = 'Subtitle1', ...restTypographyProps } = typographyProps || {};
    return (
      <Title md={typography} {...restTypographyProps}>
        {title}
      </Title>
    );
  }, [title, typographyProps]);

  const renderLinkHeaderTop = useCallback(() => (
    <>
      <HeaderTop>
        {renderTitle()}
        <LinkButton />
      </HeaderTop>
      {description && <Description color={gray600}>{description}</Description>}
    </>
  ), [description, renderTitle]);

  const renderActionHeader = useCallback(() => {
    if (to) {
      return (
        <>
          <Link to={to} external={external} onClick={onClick}>
            {renderLinkHeaderTop()}
          </Link>
          {hasLinkText && (
            <TextLink to={to} external={external} onClick={onClick}>
              {linkText}
            </TextLink>
          )}
        </>
      );
    }

    return (
      <>
        <ActionContainer onClick={onClick}>{renderLinkHeaderTop()}</ActionContainer>
        {hasLinkText && <TextLink onClick={onClick}>{linkText}</TextLink>}
      </>
    );
  }, [to, external, onClick, renderLinkHeaderTop, hasLinkText, linkText]);

  return (
    <Container hasLinkText={hasLinkText}>
      {to || onClick ? (
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
  color: ${gray600};
  > a {
    color: ${gray600};
  }
  ${media.sm`
    display: none;
  `}
`;

const LinkButton = styled(ChevronRightIcon)`
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
  display: flex;
  ${(props) => (props.hasLinkText
    ? `
        justify-content: space-between;
        align-items: flex-end;
      `
    : `
        flex-direction: column
  `)};
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
