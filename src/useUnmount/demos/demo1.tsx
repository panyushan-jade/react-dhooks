/**
 * title: Basic usage
 * desc: The function is called right before the component is unmounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件卸载时，执行函数。
 */

import { useUnmount } from 'react-dhooks';
import { message } from 'antd';
import React, { useState } from 'react';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
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
