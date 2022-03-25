module.exports = {
  types: [
    { value: 'feat', name: 'feat: ✨ 一个新的特性' },
    { value: 'fix', name: 'fix: 🐛 修复一个Bug' },
    { value: 'docs', name: 'docs: 📚 变更的只有文档' },
    { value: 'style', name: 'style: 💎 代码风格,格式修复' },
    { value: 'refactor', name: 'refactor: 📦 代码重构，注意和feat、fix区分开' },
    { value: 'perf', name: 'perf: 🚀 代码优化,改善性能' },
    { value: 'test', name: 'test: 🚨 测试' },
    { alue: 'chore', name: 'chore: 🍉 变更构建流程或辅助工具' },
    { value: 'revert', name: 'revert: 🌄 代码回退' },
    { value: 'init', name: 'init: 🔰 项目初始化' },
    { value: 'build', name: 'build: ⭐ 变更项目构建或外部依赖' },
    { value: 'WIP', name: 'WIP: 🚶 进行中的工作' },
  ],
  scopes: [],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简短说明(最多40个字):',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#12, #34(可选):\n',
    confirmCommit: '确定提交?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['scope', 'body', 'breaking'],
  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
