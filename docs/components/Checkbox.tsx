import { Checkbox } from '@class101/ui';
import * as React from 'react';

import { HTMLInputProps } from '../../src/interfaces/props';

export interface Props extends HTMLInputProps {
  className?: string;
  size: number;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class MyCheckbox extends React.Component<Props> {
  public readonly state = {
    checked: false,
  };

  private handleChange = event => {
    this.setState({ checked: event.target.checked });
  };

  public render() {
    const { ...restProps } = this.props;
    return <Checkbox checked={this.state.checked} onChange={this.handleChange} {...restProps} />;
  }
}
