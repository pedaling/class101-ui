# Icon

src/Icon/svgs 에 추가 혹은 대체할 svg 아이콘을 넣고 프로젝트 루트에서 다음을 실행해주세요.

```
yarn svgr
```

src/Icon/index.ts에서 다음과 같은 형태로 추가된 아이콘아 export 되었는지 확인해주세요.  
(해당 파일을 직접 수정하지 마세요!)

```ts
import React from 'react';

export interface IconProps {
  size?: number;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export { default as Add } from './generated/Add';
export { default as AddCircleOutline } from './generated/AddCircleOutline';
```
