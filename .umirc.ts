import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    { title: 'Hooks', path: '/hooks' },
    {
      title: 'GitHub',
      path: 'https://github.com/panyushan-jade/dHooks',
    },
  ],
  menus: {
    '/hooks': [
      {
        title: 'LifeCycle',
        children: ['useMount', 'useUnmount'],
      },
      {
        title: 'State',
        children: ['useBoolean', 'useToggle'],
      },
      {
        title: 'Advanced',
        children: ['useLatest'],
      },
      {
        title: 'File',
        children: ['useUrlToBase64'],
      },
      {
        title: 'Local',
        children: ['useLocalStorage'],
      },
    ],
  },
});
