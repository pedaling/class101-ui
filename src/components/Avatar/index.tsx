import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { Colors } from '../../core';

export enum AvatarSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: AvatarSize | number;
  iconRatio: number;
  src?: string;
  className?: string;
  text?: string;
  icon?: React.ReactElement<{ size: number }>;
}

export class Avatar extends PureComponent<AvatarProps> {
  public static defaultProps: Partial<AvatarProps> = {
    size: AvatarSize.MEDIUM,
    iconRatio: 0.55,
  };

  public render() {
    const { size, src, text, className, icon, iconRatio, ...imgProps } = this.props;
    const avatarSize = typeof size === 'number' ? size : avatarSizeBySize[size];

    const sizedIcon = icon && React.cloneElement(icon, { size: avatarSize * iconRatio });

    return (
      <Container size={avatarSize} className={className}>
        {src ? (
          <AvatarImage src={src} {...imgProps} />
        ) : (
          text && <TextWrapper>{text.substr(0, 2).toUpperCase()}</TextWrapper>
        )}
        {sizedIcon && <IconWrapper>{sizedIcon}</IconWrapper>}
      </Container>
    );
  }
}

const avatarSizeBySize: { [key in AvatarSize]: number } = {
  [AvatarSize.LARGE]: 40,
  [AvatarSize.MEDIUM]: 32,
  [AvatarSize.SMALL]: 24,
};

const Container = styled.span<{ size: number }>`
  display: inline-block;
  position: relative;
  ${props => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `};
  border-radius: 50%;
  background: ${Colors.gray100};
  text-align: center;
`;

const AvatarImage = styled.img`
  width: 100%;
  border-radius: 50%;
  height: 100%;
  display: block;
`;

const TextWrapper = styled.span`
  font-size: 13px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  right: -2px;
  bottom: -2px;
  z-index: 100;
`;
