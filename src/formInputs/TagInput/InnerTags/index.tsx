import React, { useCallback } from 'react';

import { Tag } from '../../../components/Tag';

type Props = {
  onRemove: (index: number) => void;
  value?: string[];
  disabled?: boolean;
};

const InnerTags = React.memo<Props>(({ value = [], disabled = false, onRemove }) => {
  const handleRemoveTag = useCallback(
    (index: number) => () => {
      onRemove(index);
    },
    [onRemove],
  );

  if (value.length > 5000) {
    return (
      <Tag
        value={`${value.slice(value.length - 3, value.length).join(', ')} 포함 총 ${value.length}개`}
        onRemove={handleRemoveTag(-1)}
        disabled={disabled}
        className="inner-tags__tag"
      />
    );
  }

  return (
    <>
      {value.map((v, i) => (
        <Tag value={v} key={v} onRemove={handleRemoveTag(i)} disabled={disabled} className="inner-tags__tag" />
      ))}
    </>
  );
});

export default InnerTags;
