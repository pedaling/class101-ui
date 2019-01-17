import * as React from 'react'
import styled from 'styled-components';
import { CheckboxOn, CheckboxOff} from '../Icon';
import { orange500, redError, gray600 } from '../Colors';
import { HTMLInputProps } from 'interfaces/props';
import Message from './message'

export interface Props extends HTMLInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const HiddenCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ChildText = styled.span`
  font-size: 16px;
  margin-left: 4px;
`

const Container = styled.label<Props>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
`;


export default class Checkbox extends React.PureComponent<Props> {
  public render() {
    const { className, style, inputStyle, inline, allowMessage, warnMessage, errorMessage, type, children, checked, ...restProps } = this.props;

    return (
      <div style={style}>
        <Container inline={inline}>
          {checked ? <CheckboxOn size={18}/> : <CheckboxOff size={18} />}
          <HiddenCheckboxInput
            className={className || ''}
            onChange={this.handleChange}
            checked={checked}
            style={inputStyle}
            {...restProps}
          />
          <ChildText>{children}</ChildText>
        </Container>

        {allowMessage && !errorMessage && <Message color={gray600} message={allowMessage}/>}
        {errorMessage && <Message color={redError} descriptionIconFillColor={redError} message={errorMessage} />}
        {warnMessage && <Message color={orange500} descriptionIconFillColor={orange500} message={warnMessage} />}
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange !== undefined) {
      this.props.onChange(e);
    }
  }
}
