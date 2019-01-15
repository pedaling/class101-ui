import React from 'react';
import { HTMLInputProps } from '../../src/interfaces/props';
import { Checkbox } from '@class101/ui';

export interface Props extends HTMLInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class MyCheckbox extends React.Component {
  public readonly state = {
    checked: false,
  }

  private handleChange = (event) => {
    this.setState({checked: event.target.checked});
  }

  render() {
    return <Checkbox checked={this.state.checked} onChange={this.handleChange} children={this.props.children} />;
  }
}