import {
    DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '趣味学习',
    link: '/src/python/basic' 
  },
  {
   
    text: '个人成长',
    items: [
      {
   
        text: '大江南北游记',
        link: '/src/python/basic1'
      },
      {
   
        text: '所思·所想',
        link: '/src/python/basic2' 
      }
    ]
  },
  {
   
    text: '关于我',
    items: [
      {
    text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
   
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
   
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];