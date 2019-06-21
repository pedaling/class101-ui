import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray100, gray200 } from '../../Colors';
import { Close } from '../../Icon';

interface TagProps {
  onRemove?: () => any;
  value: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default class Tag extends PureComponent<TagProps> {
  public render() {
    const { value, label, className } = this.props;
    return (
      <Container className={className}>
        <Text>{label || value}</Text>
        <CloseButton onClick={this.handleRemoveButton}>
          <Close size={16} />
        </CloseButton>
      </Container>
    );
  }

  private handleRemoveButton = () => {
    const { onRemove, disabled } = this.props;
    if (onRemove && disabled === false) {
      onRemove();
    }
  };
}

const Container = styled.div`
  display: inline-flex;
  margin-right: 8px;
  background-color: ${gray100};
  border-radius: 3px;
  align-items: center;
  overflow: hidden;
  height: 24px;
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

  &:hover {
    background-color: ${gray200};
  }
`;
