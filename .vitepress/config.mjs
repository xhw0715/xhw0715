import { defineConfig } from 'vitepress'
import { nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python生活实验室",
  description: "一个专为 Python 初学者设计的趣味编程学习平台，通过生活化的小项目带你轻松入门编程。",
  themeConfig: {
    logo: '/static/logo.svg',
    nav,
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
