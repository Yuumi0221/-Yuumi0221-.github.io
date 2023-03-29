import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://yuumi.link',
  favicon: "https://cdn.yuumi.link/images/settings/yuumi.svg",
  lang: 'zh-CN',
  title: "-Yuumi's Blog-",
  subtitle: '続きを鳴らそう——',
  author: {
    name: 'Yuumi',
    avatar: "https://cdn.yuumi.link/images/settings/favicon.png",
    status: {
      emoji: '💛',
      message: 'Looking for dawn.',
    },
  },
  description: '',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '网易云音乐',
      link: 'http://music.163.com/artist?id=30377410&userid=436730182',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C10D0C',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/3075122387',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/7498906',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Notion',
      link: 'https://yuumis.notion.site',
      icon: 'i-simple-icons-notion',
      color: '#717171',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Yuumi0221',
      icon: 'i-ri-github-line',
      color: '#9b9b9b',
    },
    {
      name: 'E-Mail',
      link: 'mailto:yuumi0221@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Pixiv',
      link: 'https://www.pixiv.net/users/10168567',
      icon: 'i-simple-icons:pixiv',
      color: '#0096FA',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/yuumi-81',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Yuumi12118924',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
  ],

  search: {
    enable: true,
    type: 'fuse'
  },

  sponsor: {
    enable: true,
    title: '内个……如果可以的话……',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yuumi.link/images/settiings/alipay.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yuumi.link/images/settiings/wechatpay.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yuumi.link/images/settiings/qqpay.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
    ],
  },

  comment: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },

  statistics: {
    enable: true,
  },
})
