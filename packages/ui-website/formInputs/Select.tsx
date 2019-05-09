import { Select } from '@class101/ui';
import React from 'react';

type OptionProps = string | { label?: string; disabled?: boolean; value?: string | number | undefined };

interface Props {
  options?: OptionProps[];
  fill?: boolean;
  value: string | boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

export const Component = ({ ...restProps }: Props) => <Select {...restProps} />;
