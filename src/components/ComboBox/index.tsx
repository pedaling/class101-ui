import { Caption1, Colors, LinkBlock, TextStyles } from 'core';
import { elevation4 } from 'core/ElevationStyles';
import { IconProps } from 'Icon';
import React, { useCallback, useMemo, useState } from 'react';
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
  closeable?: boolean;
  onClick?: () => void | Promise<void>;
};

type Props = {
  items: ComboBoxProps[];
  position?: ComboBoxPosition;
  opened?: boolean;
  opener?: React.ReactElement<{ onClick: () => void }>;
  children?: React.ReactElement<{ onClick: () => void }>;
  onOpen?: () => void;
  onClose?: () => void;
};

export const ComboBox = React.memo<Props>(({ items, position, opened, opener, children, onOpen, onClose }) => {
  const [isOpened, setOpened] = useState(false);

  const handleClickOpener = useCallback(() => {
    if (opened) {
      onClose?.();
      return;
    }

    onOpen?.();
  }, [onClose, onOpen, opened]);

  const clonedOpener = useMemo(() => {
    if (opener) {
      return React.cloneElement(opener, {
        onClick: () => setOpened(!isOpened),
      });
    }

    if (children) {
      return React.cloneElement(children, {
        onClick: handleClickOpener,
      });
    }

    return null;
  }, [children, handleClickOpener, isOpened, opener]);

  const itemList = useMemo(() => {
    return items.map(item => {
      const handleItemClick = async () => {
        if (!item.closeable) {
          await item?.onClick?.();
          return;
        }

        await item?.onClick?.();

        if (opener) {
          setOpened(false);
        }

        onClose?.();
      };

      return <ComboBoxItem key={item.label} {...item} onClick={handleItemClick} />;
    });
  }, [items, onClose, opener]);

  const visible = opener ? isOpened : opened;

  return (
    <Container>
      {clonedOpener}
      <ActionItemList visible={visible} position={position}>
        {itemList}
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
  border-radius: 3px;
  position: absolute;
  z-index: 2000;

  ${elevation4};
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
