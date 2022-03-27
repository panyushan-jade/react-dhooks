---
nav:
  path: /hooks
---

## useLocalStorage

用来将图片的 url 转换成 base64 格式

## 代码演示

### 基础用法

第一个参数是图片的<code>url</code>

```tsx
import React, { useState } from 'react';
import { useUrlToBase64 } from 'dHooks';
import baiduImg from '/public/images/baidu.png';

export default () => {
  const [imgUrl, setImgUrl] = useState(baiduImg);
  const onClick = async () => {
    const base64 = imgUrl.includes('base64') ? imgUrl : await useUrlToBase64(imgUrl);
    setImgUrl(base64);
  };
  const onReset = () => {
    setImgUrl(baiduImg);
  };
  const base64_exhibition = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '50%',
  };
  return (
    <>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <img width={300} src={imgUrl} />
        <button onClick={onClick}>转换</button>
        <button onClick={onReset}>重置</button>
      </div>
      <p style={base64_exhibition}>{imgUrl}</p>
    </>
  );
};
```

<code>注意：这里示例用的是本地图片，如果用的是网络图片请确保服务器端支持 CORS</code>

### 传递类型

第一个参数与上面一致，第二个参数为图片类型<code>type</code>

```tsx
import React, { useState } from 'react';
import { useUrlToBase64 } from 'dHooks';
import baiduImg from '/public/images/baidu.png';

//此处演示的图片默认类型为image/png
export default () => {
  const [imgUrl, setImgUrl] = useState(baiduImg);
  const [webp, setWebp] = useState(null);
  const [jpeg, setJpeg] = useState(null);
  const onClick = async () => {
    const webpBase64 = webp?.includes('base64') ? webp : await useUrlToBase64(imgUrl, 'image/webp');
    const jpegBase64 = jpeg?.includes('base64') ? jpeg : await useUrlToBase64(imgUrl, 'image/jpeg');
    setWebp(webpBase64);
    setJpeg(jpegBase64);
  };
  const onReset = () => {
    setWebp(null);
    setJpeg(null);
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
          image/webp：
          <img width={300} src={webp} />
        </div>
        <div>
          image/jpeg：
          <img width={300} src={jpeg} />
        </div>
      </div>
    </>
  );
};
```

<code>注意：因为是使用 canvas 进行的转换，当图片原始类型和要转换的类型不一致时，则透明区域会被填充黑色背景色。可以传递 bgColor 参数，默认值为白色</code>

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
