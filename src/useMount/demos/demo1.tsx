/**
 * title: 基础用法
 * desc: 在组件首次渲染时，执行方法。
 *
 */

import { useMount } from 'react-dhooks';
import React, { useState } from 'react';
import { message } from 'antd';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [isShow, setIsShow] = useState<boolean>();
  const toggle = () => setIsShow(!isShow);
  return (
    <>
      <button type="button" onClick={toggle}>
        {isShow ? 'unmount' : 'mount'}
      </button>
      {isShow && <MyComponent />}
    </>
  );
};
