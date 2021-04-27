import { Caption1, Colors, LinkBlock, TextStyles } from 'core';
import { elevation4 } from 'core/ElevationStyles';
import { IconProps } from 'Icon';
import React, { useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';

export enum ComboBoxPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  NONE = 'NONE',
}

export type ComboBoxProps = {
  label: string;
  to?: string;
  textColor?: string;
  icon?: React.ReactElement<IconProps>;
  description?: string;
  onClick?: () => void;
};

type Props = {
  items: ComboBoxProps[];
  position?: ComboBoxPosition;
  opened?: boolean;
  children: React.ReactElement;
  onOpen?: () => void;
  onClose?: () => void;
};

export const ComboBox = React.memo<Props>(({ items, position, opened, children, onOpen, onClose }) => {
  const handleClickOpener = useCallback(() => {
    if (opened) {
      onClose?.();
      return;
    }

    onOpen?.();
  }, [onClose, onOpen, opened]);

  const clonedOpener = React.cloneElement(children, {
    onClick: handleClickOpener,
  });

  return (
    <Container>
      {clonedOpener}
      <ActionItemList visible={opened} position={position}>
        {items.map(item => (
          <ComboBoxItem key={item.label} {...item} />
        ))}
      </ActionItemList>
    </Container>
  );
});

export const ComboBoxItem = ({ icon, label, description, to, textColor, onClick }: ComboBoxProps) => {
  const menuItemProps = useMemo(() => {
    return {
      color: textColor,
      onClick,
    };
  }, [onClick, textColor]);

  const innerElements = (
    <InnerElementWrapper>
      {icon}
      <TextWrapper>
        <Label>{label}</Label>
        {description && <Description>{description}</Description>}
      </TextWrapper>
    </InnerElementWrapper>
  );

  if (to) {
    return (
      <ActionItemLink key={label} to={to} {...menuItemProps}>
        {innerElements}
      </ActionItemLink>
    );
  }

  return (
    <ActionItem key={label} {...menuItemProps}>
      {innerElements}
    </ActionItem>
  );
};

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const ActionItemList = styled.div<{ visible?: boolean; position?: ComboBoxPosition }>`
  width: 216px;
  padding: 14px;
  background-color: ${Colors.white};
  box-shadow: ${elevation4};
  border-radius: 3px;
  position: absolute;
  z-index: 2000;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  ${({ position }) => (position === ComboBoxPosition.LEFT ? 'right: 0' : 'left: 0')};
`;

const InnerElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  margin-left: 8px;
`;

type ActionItemProps = {
  textColor?: string;
  position?: ComboBoxPosition;
};

const actionItemStyle = css<ActionItemProps>`
  ${TextStyles.body2};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.gray000};
  }
`;

const ActionItemLink = styled(LinkBlock)`
  ${actionItemStyle};
`;

const ActionItem = styled.div`
  ${actionItemStyle};
`;

const Label = styled.span``;

const Description = styled(Caption1)`
  color: ${Colors.gray600};
  margin-top: 6px;
`;
