import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-dhooks',
  title: 'react-dhooks',
  publicPath: '/react-dhooks/',
  favicon:'/react-dhooks/logo.svg',
  logo: '/react-dhooks/icon.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    { title: 'Hooks', path: '/hooks' },
    {
      title: 'GitHub',
      path: 'https://github.com/panyushan-jade/react-dhooks',
    },
  ],
  alias: {
    'react-dhooks': process.cwd() + '/src/index.ts',
  },
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
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  dynamicImport: {},
});
