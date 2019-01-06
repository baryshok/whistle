

const getMenuList = (dir) => {
  return [
    'introduction',
    'installation',
    'getting-started',
    'rule-introduction',
    'ui-operation',
    'cli',
    'custom',
    'examples/',
    'faq',
    'protocols/'
  ].map(name => `${dir}${name}`);
};

module.exports = {
  locales: {
    '/en/': {
      lang: 'English',
      title: 'Whistle Documentation',
      description: 'Whistle Documentation'
    },
    '/zh/': {
      lang: '简体中文',
      title: 'Whistle 帮助文档',
      description: 'Whistle 帮助文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    repo: 'avwo/whistle',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/zh/': {
        label: '简体中文',
        selectText: 'Languages',
        editLinkText: '在GitHub编辑此页',
        nav: [
          { text: '官方插件', link: 'https://github.com/whistle-plugins' },
          { text: '反馈问题', link: 'https://github.com/avwo/whistle/issues/new' },
        ],
      },
      '/en/': {
        label: 'English',
        selectText: '选择语言',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Plugins', link: 'https://github.com/whistle-plugins' },
          { text: 'Issue', link: 'https://github.com/avwo/whistle/issues/new' },
        ],
      },
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Plugins', link: 'https://github.com/whistle-plugins' },
          { text: 'Issue', link: 'https://github.com/avwo/whistle/issues/new' },
        ],
      },
    },
    sidebar: {
      '/examples/': [
        ''
      ],
      '/protocols/': [
        '',
        'host',
        {
          title: 'rule',
          collapsable: false,
          children: [
            'rule/file'
          ]
        }
      ],
      '/zh/': getMenuList('/zh/'),
      '/en/': getMenuList('/en/'),
    }
  },
  footer: 'MIT Licensed | Copyright © 2019-present avenwu'
}
