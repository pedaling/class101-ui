import { Badge } from 'components';
import { Icon } from 'Icon';
import React, { useState } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Colors, Position } from '../../core';
import { gray100 } from '../../core/Colors';

export enum AvatarSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export type AvatarIconPosition =
  | typeof Position.TOP_RIGHT
  | typeof Position.TOP
  | typeof Position.TOP_LEFT
  | typeof Position.BOTTOM
  | typeof Position.BOTTOM_LEFT
  | typeof Position.BOTTOM_RIGHT
  | typeof Position.LEFT
  | typeof Position.RIGHT;

export interface AvatarProps {
  size?: AvatarSize | number;
  iconRatio?: number;
  iconPosition?: AvatarIconPosition;
  src?: string;
  srcSet?: string;
  alt?: string;
  className?: string;
  text?: string;
  icon?: React.ReactElement<{ size: number }>;
  'data-element-name'?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  onIconClick?: React.MouseEventHandler<HTMLDivElement>;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

interface AvatarState {
  isError: boolean;
}

export const Avatar = React.memo<AvatarProps>(
  ({
    size = AvatarSize.MEDIUM,
    src,
    text,
    className,
    icon,
    iconRatio = 0.55,
    iconPosition = Position.BOTTOM_RIGHT,
    srcSet,
    alt,
    onClick,
    onIconClick,
    onError,
    'data-element-name': dataElementName,
  }) => {
    const [isError, setIsError] = useState(false);
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsError(true);
      if (onError) {
        onError(e);
      }
    };
    const avatarSize = typeof size === 'number' ? size : avatarSizeBySize[size];
    const iconSize = typeof size === 'number' ? avatarSize * iconRatio : iconSizeBySize[size];
    const sizedIcon = icon && React.cloneElement(icon, { size: iconSize });

    return (
      <Container onClick={onClick} size={avatarSize} className={className} data-element-name={dataElementName}>
        {src && !isError ? (
          <AvatarImage src={src} srcSet={srcSet} alt={alt} onError={handleImageError} />
        ) : (
          text && <TextWrapper>{text.substr(0, 2).toUpperCase()}</TextWrapper>
        )}
        {sizedIcon && (
          <IconWrapper position={iconPosition} onClick={onIconClick}>
            {sizedIcon}
          </IconWrapper>
        )}
      </Container>
    );
  }
);

const iconPositionByPosition: { [key in AvatarIconPosition]: FlattenSimpleInterpolation } = {
  [Position.BOTTOM]: css`
    bottom: -2px;
    right: 50%;
    transform: translateX(50%);
  `,
  [Position.BOTTOM_RIGHT]: css`
    bottom: -2px;
    right: -2px;
  `,
  [Position.BOTTOM_LEFT]: css`
    bottom: -2px;
    left: -2px;
  `,
  [Position.TOP]: css`
    top: -2px;
    right: 50%;
    transform: translateX(50%);
  `,
  [Position.TOP_RIGHT]: css`
    top: -2px;
    right: -2px;
  `,
  [Position.TOP_LEFT]: css`
    top: -2px;
    left: -2px;
  `,
  [Position.LEFT]: css`
    bottom: 50%;
    left: -2px;
    transform: translateY(50%);
  `,
  [Position.RIGHT]: css`
    bottom: 50%;
    right: -2px;
    transform: translateY(50%);
  `,
};

const avatarSizeBySize: { [key in AvatarSize]: number } = {
  [AvatarSize.LARGE]: 40,
  [AvatarSize.MEDIUM]: 24,
  [AvatarSize.SMALL]: 18,
};

const iconSizeBySize: { [key in AvatarSize]: number } = {
  [AvatarSize.LARGE]: 20,
  [AvatarSize.MEDIUM]: 16,
  [AvatarSize.SMALL]: 12,
};

const Container = styled.span<{ size: number }>`
  display: inline-block;
  position: relative;
  ${(props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `};
  border-radius: 50%;
  background: ${gray100};
  text-align: center;
  vertical-align: top;
`;

const AvatarImage = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const TextWrapper = styled.span`
  font-size: 13px;
  text-align: center;
`;

const IconWrapper = styled.div<{ position: Position }>`
  display: flex;
  position: absolute;
  z-index: 100;
  ${(props) => iconPositionByPosition[props.position]}
`;

const a = () => {
  return (
    <>
        <Badge>1</Badge>
        <br />
        <Badge>10</Badge>

        <Badge size="xs">101</Badge>
        <br />
        <Badge size="sm">101</Badge>
        <br />
        <Badge size="md">101</Badge>

        <Badge color="black" backgroundColor="pink">
          101
        </Badge>
        <br />
        <Badge color="pink" backgroundColor="black">
          101
        </Badge>

        <Badge pill={true}>무료 배송</Badge>

        <Badge icon={<Icon.ShippingTruck fillColor={Colors.white} />} pill={false} backgroundColor={Colors.green500}>
          무료 배송
        </Badge>
    </>
  );
};
