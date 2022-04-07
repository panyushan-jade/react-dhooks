---
nav:
  path: /hooks
---

## useLocalStorage

用于 localStorage 的存储、获取、删除

## 代码演示

### setLocalStorage

```tsx
import React, { useState, useCallback } from 'react';
import { useLocalStorage } from 'dHooks';

export default () => {
  const [forms, setForms] = useState({
    key: null,
    value: null,
    expires: null,
    prefix: null,
  });
  const [localValue, setLocalValue] = useState(null);
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const onClick = async () => {};
  const onReset = () => {
    // setImgUrl();
  };
  const base64_exhibition = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '50%',
  };
  const onSaveHandle = () => {
    if (forms.key && forms.value) {
      const [key, value] = setLocalStorage(forms);
      setLocalValue(JSON.stringify(value));
    }
  };
  const onChangeHandle = (type, e) => {
    setForms({
      ...forms,
      [type]: e.target.value,
    });
  };

  const onGetHandle = () => {
    console.log('22222', getLocalStorage('__1111'));
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <span>
          key：<input onChange={onChangeHandle.bind(this, 'key')}></input>
        </span>
        <span style={{ margin: '0 10px' }}>
          value：<input onChange={onChangeHandle.bind(this, 'value')}></input>
        </span>
        <span style={{ margin: '0 10px' }}>
          expires：<input onChange={onChangeHandle.bind(this, 'expires')}></input>
        </span>
        <span>
          prefix：<input onChange={onChangeHandle.bind(this, 'prefix')}></input>
        </span>
        <button onClick={onSaveHandle}>保存</button>
        <button onClick={onGetHandle}>获取</button>
      </div>
      <p style={base64_exhibition}>
        <span>key:{forms.key}</span>
        <br />
        <span>value:{localValue}</span>
      </p>
    </>
  );
};
```

### getLocalStorage

```tsx | pure
import { useLocalStorage } from 'dHooks';

const { getLocalStorage } = useLocalStorage();
getLocalStorage('Your key');
```

### 图片质量

当转换类型为<code>'image/jpeg'|'image/webp'</code>时,可以传入<code>quality( 0 到 1)</code>质量参数，超出取值范围，将会使用默认值 <code>0.92</code><br/> 下图示例中可以看出中间的图片质量最高

```tsx
import React, { useState } from 'react';
import { useUrlToBase64 } from 'dHooks';
import baiduImg from '/public/images/baidu.png';

export default () => {
  const [imgUrl, setImgUrl] = useState(baiduImg);
  const [highQuality, setHighQuality] = useState(null);
  const [lowQuality, setLowQuality] = useState(null);
  const onClick = async () => {
    const highQuality = highQuality?.includes('base64')
      ? highQuality
      : await useUrlToBase64(imgUrl, 'image/jpeg', 'white', 0.96);
    const lowQuality = lowQuality?.includes('base64')
      ? lowQuality
      : await useUrlToBase64(imgUrl, 'image/jpeg', 'white', 0.1);
    setHighQuality(highQuality);
    setLowQuality(lowQuality);
  };
  const onReset = () => {
    setHighQuality(null);
    setLowQuality(null);
  };
  return (
    <>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <div>
          image/png（原图）：
          <img width={300} src={imgUrl} />
        </div>
        <button onClick={onClick}>转换</button>
        <button onClick={onReset}>重置</button>
        <div>
          image/jpeg（0.96）：
          <img width={300} src={highQuality} />
        </div>
        <div>
          image/jpeg（0.1）：
          <img width={300} src={lowQuality} />
        </div>
      </div>
    </>
  );
};
```

## API

```tsx | pure
import { useUrlToBase64 } from 'dHooks';

const toBase64 = useUrlToBase64(url);
```

## Params

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url<code>\*</code> | 图片地址 | <code>string</code> | -- |
| type | 转换图片类型 | <code>string(image/jpeg,image/png,...)</code> | image/png |
| bgColor | 背景颜色 | <code>string</code> | white |
| quality | 图片质量 | <code>number</code> | jpeg/webp 为 0.96 |

## Result

| 返回值  | 说明             | 类型                 | 默认值 |
| ------- | ---------------- | -------------------- | ------ |
| promise | 返回一个 promise | <code>Promise</code> | --     |

More skills for writing demo: https://github.com/panyushan-jade/dHooks
