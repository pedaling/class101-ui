import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray100, gray200 } from '../../core/Colors';
import { Close } from '../../Icon';

export interface TagProps {
  onRemove?: () => any;
  value: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  'data-element-name'?: string;
}

export class Tag extends PureComponent<TagProps> {
  public render() {
    const { value, label, className, 'data-element-name': dataElementName, disabled } = this.props;
    return (
      <Container data-element-name={dataElementName} className={className}>
        <Text>{label || value}</Text>
        {disabled !== false && (
          <CloseButton onClick={this.handleRemoveButton}>
            <Close size={16} />
          </CloseButton>
        )}
      </Container>
    );
  }

  private handleRemoveButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onRemove, disabled } = this.props;
    if (onRemove && disabled === false) {
      onRemove();
    }
    e.preventDefault();
  };
}

const Container = styled.div`
  display: inline-flex;
  margin-right: 8px;
  background-color: ${gray100};
  border-radius: 3px;
  align-items: center;
  overflow: hidden;
  height: 28px;
`;

const Text = styled.span`
  font-size: 12px;
  margin: 0 4px 0 8px;
  line-height: 1;
`;

const CloseButton = styled.button`
  display: flex;
  padding: 0 4px;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  align-items: center;

  &:hover {
    background-color: ${gray200};
  }
`;
