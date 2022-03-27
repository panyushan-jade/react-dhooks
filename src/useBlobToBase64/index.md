---
nav:
  path: /hooks
---

## useBlobToBase64

用来将 Blob 或 File 对象转换成 base64 格式

## 代码演示

### 基础用法

```tsx
import React, { useRef, useState } from 'react';
import { useBlobToBase64 } from 'dHooks';
import styles from './index.less';

export default () => {
  const inputRef = useRef();
  const [base64, setBase64] = useState(null);
  const onChange = async () => {
    const file = inputRef.current.files[0];
    const toBase64 = file && (await useBlobToBase64(file));
    setBase64(toBase64);
  };
  const base64_exhibition = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '50%',
  };
  return (
    <div>
      <input type="file" ref={inputRef} onChange={onChange}></input>
      <p style={base64_exhibition}>{base64}</p>
    </div>
  );
};
```

## API

```tsx | pure
import { useBlobToBase64 } from 'dHooks';

const toBase64 = useBlobToBase64(file);
```

## Params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| file<code>\*</code> | 一个文件对象或 Blob<code>（file 继承 Blob）</code> | <code>file</code> | -- |

## Result

| 返回值  | 说明             | 类型                 | 默认值 |
| ------- | ---------------- | -------------------- | ------ |
| promise | 返回一个 promise | <code>Promise</code> | --     |

More skills for writing demo: https://github.com/panyushan-jade/dHooks
