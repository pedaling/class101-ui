import React from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

type Props = {
  title?: string,
  titleStyle?: any,
  subTitle?: string,
  buttonTitle?: string,
  buttonStyle?: any,
  to?: string,
  href?: string,
  target?: string,
  onClick?: () => void;
};

const List = styled.div`
`;

export default ({
  title,
  titleStyle,
  subTitle,
  buttonTitle,
  buttonStyle,
  to,
  href,
  target,
  onClick,
  children,
  ...restProps,
}: Props) => (
  <List { ...restProps }>
    { title && 
      !buttonTitle ? 
        <ListHeader 
          title={ title } 
          to={ to }
          href={ href }
          target={ target }
          onClick={ onClick }
          subTitle={ subTitle }
          { ...titleStyle }
        /> :
        <ListHeader 
          title={ title } 
          subTitle={ subTitle }
          { ...titleStyle }
        />
    }
    { children }
    { buttonTitle && 
      <ListFooter 
        buttonTitle={ buttonTitle } 
        to={ to }
        href={ href }
        target={ target }
        onClick={ onClick }
        { ...buttonStyle }
      />
    }
  </List>
);